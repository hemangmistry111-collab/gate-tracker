// ─── Core Data Types ──────────────────────────────────────────────
export type Difficulty = 'Easy' | 'Medium' | 'Hard'
export type Status = 'not-started' | 'in-progress' | 'completed' | 'mastered'
export type StreamId = 'cs' | 'ece' | 'ee' | 'me' | 'ce' | 'bt' | 'bi' | 'da' | 'ae' | 'ag' | 'ch' | 'cy' | 'ge' | 'mn' | 'mt' | 'nm' | 'pe' | 'ph' | 'pi' | 'st' | 'tf' | 'xh'

export interface Topic {
  id: string
  name: string
  difficulty: Difficulty
  done: boolean
  notes?: string
  resources?: string[]
  estimatedHours?: number
}

export interface Subject {
  id: string
  name: string
  code: string
  weightage: number           // % in GATE exam
  color: string               // Tailwind gradient class
  icon: string                // emoji icon
  topics: Topic[]
  description?: string
}

export interface Stream {
  id: StreamId
  name: string
  shortName: string
  icon: string
  color: string
  description: string
  examCode: string            // Official GATE paper code
  subjects: Subject[]
  totalMarks?: number
  duration?: string
}

// ─── Progress Types ────────────────────────────────────────────────
export interface SubjectProgress {
  subjectId: string
  topicsDone: number
  topicsTotal: number
  percentage: number
  status: Status
  lastStudied?: string
  timeSpent?: number          // minutes
}

export interface StreamProgress {
  streamId: StreamId
  overallPercentage: number
  subjects: Record<string, SubjectProgress>
  streak: number
  totalTimeSpent: number
  lastActive: string
}

export interface UserProgress {
  streams: Record<string, StreamProgress>
  activeStream: StreamId
  studyGoalHoursPerDay: number
  targetDate: string          // GATE exam date
  createdAt: string
  updatedAt: string
}

// ─── Schedule Types ────────────────────────────────────────────────
export interface StudySession {
  id: string
  subjectId: string
  streamId: StreamId
  topicIds: string[]
  date: string
  startTime: string
  endTime: string
  durationMinutes: number
  notes?: string
  completed: boolean
}

export interface WeeklySchedule {
  weekOf: string
  sessions: StudySession[]
  targetHours: number
  achievedHours: number
}

// ─── AI Types ─────────────────────────────────────────────────────
export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
  context?: string            // what progress context was sent
}

export interface AISession {
  streamId: StreamId
  messages: ChatMessage[]
  createdAt: string
}

// ─── Analytics Types ──────────────────────────────────────────────
export interface DailyActivity {
  date: string
  hoursStudied: number
  topicsCompleted: number
  subjects: string[]
}

export interface WeakArea {
  subjectId: string
  subjectName: string
  streamId: StreamId
  percentage: number
  topics: string[]
}
