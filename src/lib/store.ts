import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { StreamId, ChatMessage } from '@/types'
import { ALL_STREAMS } from '@/data/streams'
import { supabase } from '@/lib/supabase'

interface AppState {
  activeStream: StreamId
  setActiveStream: (id: StreamId) => void
  completedTopics: Record<string, boolean>
  toggleTopic: (topicId: string) => void
  setTopicDone: (topicId: string, done: boolean) => void
  isTopicDone: (topicId: string) => boolean
  topicNotes: Record<string, string>
  setTopicNote: (topicId: string, note: string) => void
  studyHours: Record<string, number>
  logStudyHours: (date: string, hours: number) => void
  chatHistory: Record<string, ChatMessage[]>
  addChatMessage: (streamId: string, msg: ChatMessage) => void
  clearChatHistory: (streamId: string) => void
  targetDate: string
  dailyGoalHours: number
  userName: string
  setTargetDate: (d: string) => void
  setDailyGoalHours: (h: number) => void
  setUserName: (n: string) => void
  loadFromDb: (userId: string, profile: { selected_stream: string; target_date: string; daily_goal_hours: number; full_name: string }) => Promise<void>
  syncToDb: (userId: string) => Promise<void>
  getStreamProgress: (streamId: string) => { done: number; total: number; pct: number }
  getSubjectProgress: (streamId: string, subjectId: string) => { done: number; total: number; pct: number }
  getWeakSubjects: (streamId: string) => { subjectId: string; name: string; pct: number }[]
  getOverallStats: () => { totalTopics: number; doneTopics: number; pct: number; streak: number }
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      activeStream: 'cs',
      setActiveStream: (id) => set({ activeStream: id }),
      completedTopics: {},
      toggleTopic: (topicId) => {
        const { completedTopics } = get()
        set({ completedTopics: { ...completedTopics, [topicId]: !completedTopics[topicId] } })
      },
      setTopicDone: (topicId, done) => {
        set(s => ({ completedTopics: { ...s.completedTopics, [topicId]: done } }))
      },
      isTopicDone: (topicId) => !!get().completedTopics[topicId],
      topicNotes: {},
      setTopicNote: (topicId, note) => {
        set(s => ({ topicNotes: { ...s.topicNotes, [topicId]: note } }))
      },
      studyHours: {},
      logStudyHours: (date, hours) => {
        set(s => ({ studyHours: { ...s.studyHours, [date]: hours } }))
      },
      chatHistory: {},
      addChatMessage: (streamId, msg) => {
        set(s => ({
          chatHistory: {
            ...s.chatHistory,
            [streamId]: [...(s.chatHistory[streamId] || []), msg]
          }
        }))
      },
      clearChatHistory: (streamId) => {
        set(s => ({ chatHistory: { ...s.chatHistory, [streamId]: [] } }))
      },
      targetDate: '2026-02-01',
      dailyGoalHours: 6,
      userName: 'Aspirant',
      setTargetDate: (d) => set({ targetDate: d }),
      setDailyGoalHours: (h) => set({ dailyGoalHours: h }),
      setUserName: (n) => set({ userName: n }),

      loadFromDb: async (userId, profile) => {
        const { data: progress } = await supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', userId)
          .single()
        set({
          activeStream: (profile.selected_stream as StreamId) || 'cs',
          targetDate: profile.target_date || '2026-02-01',
          dailyGoalHours: profile.daily_goal_hours || 6,
          userName: profile.full_name || 'Aspirant',
          completedTopics: progress?.completed_topics || {},
          topicNotes: progress?.topic_notes || {},
          studyHours: progress?.study_hours || {},
        })
      },

      syncToDb: async (userId) => {
        const { completedTopics, topicNotes, studyHours } = get()
        await supabase.from('user_progress').upsert({
          user_id: userId,
          completed_topics: completedTopics,
          topic_notes: topicNotes,
          study_hours: studyHours,
          updated_at: new Date().toISOString(),
        })
      },

      getStreamProgress: (streamId) => {
        const { completedTopics } = get()
        const stream = ALL_STREAMS.find(s => s.id === streamId)
        if (!stream) return { done: 0, total: 0, pct: 0 }
        let done = 0, total = 0
        stream.subjects.forEach(sub => sub.topics.forEach(t => {
          total++
          if (completedTopics[t.id]) done++
        }))
        return { done, total, pct: total ? Math.round(done / total * 100) : 0 }
      },

      getSubjectProgress: (streamId, subjectId) => {
        const { completedTopics } = get()
        const stream = ALL_STREAMS.find(s => s.id === streamId)
        const subject = stream?.subjects.find(s => s.id === subjectId)
        if (!subject) return { done: 0, total: 0, pct: 0 }
        let done = 0
        subject.topics.forEach(t => { if (completedTopics[t.id]) done++ })
        const total = subject.topics.length
        return { done, total, pct: total ? Math.round(done / total * 100) : 0 }
      },

      getWeakSubjects: (streamId) => {
        const stream = ALL_STREAMS.find(s => s.id === streamId)
        if (!stream) return []
        const { completedTopics } = get()
        return stream.subjects
          .map(sub => {
            let done = 0
            sub.topics.forEach(t => { if (completedTopics[t.id]) done++ })
            const pct = sub.topics.length ? Math.round(done / sub.topics.length * 100) : 0
            return { subjectId: sub.id, name: sub.name, pct }
          })
          .filter(s => s.pct < 40)
          .sort((a, b) => a.pct - b.pct)
          .slice(0, 5)
      },

      getOverallStats: () => {
        const { completedTopics, studyHours } = get()
        let totalTopics = 0, doneTopics = 0
        ALL_STREAMS.forEach(stream =>
          stream.subjects.forEach(sub =>
            sub.topics.forEach(t => {
              totalTopics++
              if (completedTopics[t.id]) doneTopics++
            })
          )
        )
        let streak = 0
        const today = new Date()
        for (let i = 0; i < 365; i++) {
          const d = new Date(today)
          d.setDate(d.getDate() - i)
          const key = d.toISOString().split('T')[0]
          if (studyHours[key] && studyHours[key] > 0) streak++
          else if (i > 0) break
        }
        return { totalTopics, doneTopics, pct: totalTopics ? Math.round(doneTopics / totalTopics * 100) : 0, streak }
      },
    }),
    { name: 'gate-tracker-store', version: 2 }
  )
)
