import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Difficulty, Status } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStatus(pct: number): Status {
  if (pct === 0) return 'not-started'
  if (pct < 100) return 'in-progress'
  return 'completed'
}

export function getStatusLabel(status: Status): string {
  switch (status) {
    case 'not-started': return 'Not Started'
    case 'in-progress': return 'In Progress'
    case 'completed': return 'Completed'
    case 'mastered': return 'Mastered'
  }
}

export function getDifficultyColor(diff: Difficulty): string {
  switch (diff) {
    case 'Easy': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30'
    case 'Medium': return 'text-amber-400 bg-amber-400/10 border-amber-400/30'
    case 'Hard': return 'text-rose-400 bg-rose-400/10 border-rose-400/30'
  }
}

export function getStatusColor(status: Status): string {
  switch (status) {
    case 'not-started': return 'text-slate-400 bg-slate-400/10 border-slate-400/20'
    case 'in-progress': return 'text-amber-400 bg-amber-400/10 border-amber-400/30'
    case 'completed': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30'
    case 'mastered': return 'text-violet-400 bg-violet-400/10 border-violet-400/30'
  }
}

export function getDaysToGATE(targetDate: string): number {
  const target = new Date(targetDate)
  const now = new Date()
  const diff = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  return Math.max(0, diff)
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric'
  })
}

export function getLast7Days(): string[] {
  const days = []
  for (let i = 6; i >= 0; i--) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    days.push(d.toISOString().split('T')[0])
  }
  return days
}

export function getProgressColor(pct: number): string {
  if (pct >= 80) return 'from-emerald-500 to-teal-500'
  if (pct >= 60) return 'from-blue-500 to-cyan-500'
  if (pct >= 40) return 'from-amber-500 to-yellow-500'
  if (pct >= 20) return 'from-orange-500 to-red-400'
  return 'from-rose-600 to-red-600'
}

export function buildProgressContext(
  streamId: string,
  subjects: { id: string; name: string; code: string; topics: { id: string; name: string; done: boolean; difficulty: string }[] }[],
  completedTopics: Record<string, boolean>
): string {
  const lines = subjects.map(sub => {
    const done = sub.topics.filter(t => completedTopics[t.id]).length
    const total = sub.topics.length
    const pct = Math.round(done / total * 100)
    const incomplete = sub.topics.filter(t => !completedTopics[t.id]).slice(0, 4).map(t => t.name)
    return `• ${sub.name} (${sub.code}): ${pct}% — ${done}/${total} topics. Pending: ${incomplete.join(', ')}`
  })
  return lines.join('\n')
}
