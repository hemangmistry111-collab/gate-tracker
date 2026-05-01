'use client'
import { notFound } from 'next/navigation'
import AppShell from '@/components/layout/AppShell'
import { ALL_STREAMS } from '@/data/streams'
import { useAppStore } from '@/lib/store'
import { getDifficultyColor, getProgressColor, getStatus, getStatusColor, getStatusLabel } from '@/lib/utils'
import Link from 'next/link'
import { ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react'

export default function StreamPage({ params }: { params: { streamId: string } }) {
  const stream = ALL_STREAMS.find(s => s.id === params.streamId)
  if (!stream) return notFound()

  const { getSubjectProgress, setActiveStream } = useAppStore()

  // Set active stream on visit
  if (typeof window !== 'undefined') setActiveStream(params.streamId as any)

  const overallDone = stream.subjects.reduce((acc, s) => acc + getSubjectProgress(params.streamId, s.id).done, 0)
  const overallTotal = stream.subjects.reduce((acc, s) => acc + s.topics.length, 0)
  const overallPct = overallTotal ? Math.round(overallDone / overallTotal * 100) : 0

  return (
    <AppShell>
      <div className="max-w-5xl mx-auto animate-fade-in">
        {/* Hero banner */}
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${stream.color} p-8 mb-8`}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative flex items-start justify-between">
            <div>
              <div className="text-5xl mb-3">{stream.icon}</div>
              <h1 className="text-3xl font-bold text-white mb-1">{stream.shortName}</h1>
              <div className="text-white/60 font-mono text-sm mb-3">GATE {stream.examCode}</div>
              <p className="text-white/70 text-sm max-w-xl leading-relaxed">{stream.description}</p>
            </div>
            <div className="text-right hidden sm:block">
              <div className="text-5xl font-mono font-black text-white/90">{overallPct}%</div>
              <div className="text-white/60 text-sm mt-1">{overallDone}/{overallTotal} topics</div>
            </div>
          </div>
          <div className="relative mt-6">
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white/80 rounded-full transition-all duration-1000"
                style={{ width: `${overallPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Subjects grid */}
        <div className="section-heading">{stream.subjects.length} Subjects</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stream.subjects.map(subject => {
            const { done, total, pct } = getSubjectProgress(params.streamId, subject.id)
            const status = getStatus(pct)
            const easyCount = subject.topics.filter(t => t.difficulty === 'Easy').length
            const medCount = subject.topics.filter(t => t.difficulty === 'Medium').length
            const hardCount = subject.topics.filter(t => t.difficulty === 'Hard').length

            return (
              <Link
                key={subject.id}
                href={`/courses/${params.streamId}/${subject.id}`}
                className="card p-5 hover:border-slate-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 transition-all duration-200 group"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${subject.color} flex items-center justify-center text-xl flex-shrink-0`}>
                    {subject.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-semibold text-slate-200 group-hover:text-white text-sm leading-tight">{subject.name}</div>
                      <span className={`badge flex-shrink-0 ${getStatusColor(status)}`}>{getStatusLabel(status)}</span>
                    </div>
                    <div className="text-xs font-mono text-slate-500 mt-0.5">{subject.code} · {subject.weightage}% weightage</div>
                  </div>
                </div>

                {subject.description && (
                  <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">{subject.description}</p>
                )}

                {/* Difficulty breakdown */}
                <div className="flex gap-2 mb-4">
                  <span className={`badge text-[9px] ${getDifficultyColor('Easy')}`}>Easy×{easyCount}</span>
                  <span className={`badge text-[9px] ${getDifficultyColor('Medium')}`}>Med×{medCount}</span>
                  <span className={`badge text-[9px] ${getDifficultyColor('Hard')}`}>Hard×{hardCount}</span>
                </div>

                {/* Progress */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-500">{done}/{total} topics</span>
                    <span className={`font-mono font-bold bg-gradient-to-r ${getProgressColor(pct)} bg-clip-text text-transparent`}>
                      {pct}%
                    </span>
                  </div>
                  <div className="progress-track">
                    <div
                      className={`progress-fill bg-gradient-to-r ${subject.color}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>

                <div className="mt-3 flex items-center text-xs text-violet-400 group-hover:text-violet-300 font-medium transition-colors">
                  View topics <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </AppShell>
  )
}
