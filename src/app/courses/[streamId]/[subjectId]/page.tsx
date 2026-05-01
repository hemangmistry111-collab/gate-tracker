'use client'
import { useState } from 'react'
import { notFound } from 'next/navigation'
import AppShell from '@/components/layout/AppShell'
import { ALL_STREAMS } from '@/data/streams'
import { useAppStore } from '@/lib/store'
import { getDifficultyColor, getProgressColor, cn } from '@/lib/utils'
import Link from 'next/link'
import { Brain, Filter, CheckCheck, RotateCcw, StickyNote, X } from 'lucide-react'
import type { Difficulty } from '@/types'

type Filter = 'all' | 'done' | 'undone' | Difficulty

export default function SubjectPage({ params }: { params: { streamId: string; subjectId: string } }) {
  const stream = ALL_STREAMS.find(s => s.id === params.streamId)
  const subject = stream?.subjects.find(s => s.id === params.subjectId)
  if (!stream || !subject) return notFound()

  const { toggleTopic, completedTopics, topicNotes, setTopicNote, getSubjectProgress } = useAppStore()
  const [filter, setFilter] = useState<Filter>('all')
  const [noteModal, setNoteModal] = useState<string | null>(null)
  const [noteText, setNoteText] = useState('')

  const { done, total, pct } = getSubjectProgress(params.streamId, params.subjectId)

  const filtered = subject.topics.filter(t => {
    if (filter === 'all') return true
    if (filter === 'done') return completedTopics[t.id]
    if (filter === 'undone') return !completedTopics[t.id]
    return t.difficulty === filter
  })

  const openNote = (topicId: string) => {
    setNoteModal(topicId)
    setNoteText(topicNotes[topicId] || '')
  }

  const saveNote = () => {
    if (noteModal) {
      setTopicNote(noteModal, noteText)
      setNoteModal(null)
    }
  }

  const markAll = () => {
    subject.topics.forEach(t => {
      if (!completedTopics[t.id]) toggleTopic(t.id)
    })
  }

  const resetAll = () => {
    subject.topics.forEach(t => {
      if (completedTopics[t.id]) toggleTopic(t.id)
    })
  }

  return (
    <AppShell>
      <div className="max-w-4xl mx-auto animate-fade-in">
        {/* Header */}
        <div className="card p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${subject.color} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
              {subject.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-slate-100">{subject.name}</h1>
              <div className="flex items-center gap-3 mt-1 flex-wrap">
                <span className="text-xs font-mono text-slate-500">{stream.shortName} · {subject.code}</span>
                <span className="text-xs text-slate-500">Weightage: <span className="text-amber-400 font-mono">{subject.weightage}%</span></span>
              </div>
              {subject.description && (
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">{subject.description}</p>
              )}
            </div>
            <Link
              href={`/ai-mentor?subject=${subject.name}&stream=${stream.shortName}`}
              className="btn-primary flex-shrink-0"
            >
              <Brain className="w-4 h-4" />
              Ask AI
            </Link>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-slate-500">{done}/{total} topics completed</span>
                <span className={`font-mono font-bold bg-gradient-to-r ${getProgressColor(pct)} bg-clip-text text-transparent`}>{pct}%</span>
              </div>
              <div className="progress-track h-2 rounded-full">
                <div className={`progress-fill bg-gradient-to-r ${subject.color} rounded-full`} style={{ width: `${pct}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {/* Filter chips */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {(['all', 'undone', 'done', 'Easy', 'Medium', 'Hard'] as Filter[]).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  'px-3 py-1 rounded-full text-xs font-medium border transition-all',
                  filter === f
                    ? 'bg-violet-600 border-violet-500 text-white'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-600'
                )}
              >
                {f === 'all' ? `All (${total})` : f === 'done' ? `Done (${done})` : f === 'undone' ? `Pending (${total - done})` : f}
              </button>
            ))}
          </div>

          <div className="ml-auto flex gap-2">
            <button onClick={markAll} className="btn-ghost text-xs">
              <CheckCheck className="w-3.5 h-3.5" /> Mark All Done
            </button>
            <button onClick={resetAll} className="btn-ghost text-xs text-rose-400 hover:text-rose-300">
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>
        </div>

        {/* Topics list */}
        <div className="card overflow-hidden">
          {filtered.length === 0 && (
            <div className="py-16 text-center text-slate-500 text-sm">No topics match this filter.</div>
          )}
          {filtered.map((topic, i) => {
            const isDone = !!completedTopics[topic.id]
            const hasNote = !!topicNotes[topic.id]
            return (
              <div
                key={topic.id}
                className={cn(
                  'flex items-center gap-4 px-5 py-3.5 border-b border-slate-800 last:border-0 transition-colors',
                  isDone ? 'bg-emerald-500/3' : 'hover:bg-slate-800/40'
                )}
              >
                {/* Checkbox */}
                <button
                  onClick={() => toggleTopic(topic.id)}
                  className={cn(
                    'topic-check',
                    isDone ? 'done' : 'undone'
                  )}
                  aria-label={isDone ? 'Mark as undone' : 'Mark as done'}
                >
                  {isDone && (
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>

                {/* Topic name */}
                <div className="flex-1 min-w-0">
                  <div className={cn('text-sm font-medium transition-colors', isDone ? 'text-slate-500 line-through' : 'text-slate-200')}>
                    {topic.name}
                  </div>
                  {hasNote && (
                    <div className="text-xs text-amber-400/70 mt-0.5 truncate">{topicNotes[topic.id]}</div>
                  )}
                </div>

                {/* Estimated hours */}
                {topic.estimatedHours && (
                  <span className="text-xs font-mono text-slate-600 hidden sm:block">~{topic.estimatedHours}h</span>
                )}

                {/* Difficulty badge */}
                <span className={`badge ${getDifficultyColor(topic.difficulty)}`}>{topic.difficulty}</span>

                {/* Note button */}
                <button
                  onClick={() => openNote(topic.id)}
                  className={cn(
                    'w-7 h-7 rounded-lg flex items-center justify-center transition-colors flex-shrink-0',
                    hasNote ? 'text-amber-400 bg-amber-400/10' : 'text-slate-600 hover:text-slate-300 hover:bg-slate-700'
                  )}
                  title="Add note"
                >
                  <StickyNote className="w-3.5 h-3.5" />
                </button>
              </div>
            )
          })}
        </div>

        {/* Note Modal */}
        {noteModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="card p-6 w-full max-w-md animate-scale-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-200">Add Note</h3>
                <button onClick={() => setNoteModal(null)} className="text-slate-500 hover:text-slate-300">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="text-xs text-slate-500 mb-3 font-mono">
                {subject.topics.find(t => t.id === noteModal)?.name}
              </div>
              <textarea
                className="input h-28 resize-none text-sm"
                placeholder="Add your notes, formulas, or reminders..."
                value={noteText}
                onChange={e => setNoteText(e.target.value)}
                autoFocus
              />
              <div className="flex gap-2 mt-4">
                <button onClick={saveNote} className="btn-primary flex-1 justify-center">Save Note</button>
                <button onClick={() => setNoteModal(null)} className="btn-secondary">Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  )
}
