'use client'
import AppShell from '@/components/layout/AppShell'
import { ALL_STREAMS } from '@/data/streams'
import { useAppStore } from '@/lib/store'
import { useAuth } from '@/lib/auth-context'
import { getProgressColor } from '@/lib/utils'
import Link from 'next/link'
import { ArrowRight, BookOpen, Lock } from 'lucide-react'

export default function CoursesPage() {
  const { profile } = useAuth()
  const completedTopics = useAppStore(s => s.completedTopics)

  // Only show user's selected stream
  const userStreamId = profile?.selected_stream
  const userStream = ALL_STREAMS.find(s => s.id === userStreamId)

  const getStreamProgress = (streamId: string) => {
    const stream = ALL_STREAMS.find(s => s.id === streamId)
    if (!stream) return { done: 0, total: 0, pct: 0 }
    let done = 0, total = 0
    stream.subjects.forEach(sub => sub.topics.forEach(t => {
      total++
      if (completedTopics[t.id]) done++
    }))
    return { done, total, pct: total ? Math.round(done / total * 100) : 0 }
  }

  if (!userStream) return null
  const { done, total, pct } = getStreamProgress(userStream.id)

  return (
    <AppShell>
      <div className="max-w-5xl mx-auto animate-fade-in">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{userStream.icon}</span>
            <h1 className="text-2xl font-bold text-slate-100">{userStream.name}</h1>
          </div>
          <p className="text-slate-400 text-sm">{userStream.description}</p>
          <div className="flex items-center gap-4 mt-3 text-sm">
            <span className="text-slate-500">{userStream.subjects.length} subjects</span>
            <span className="text-slate-500">{total} topics</span>
            <span className="font-mono text-violet-400 font-bold">{pct}% complete</span>
          </div>
          {/* Overall progress bar */}
          <div className="mt-3 h-2 bg-slate-800 rounded-full overflow-hidden max-w-md">
            <div className={`h-full rounded-full bg-gradient-to-r ${userStream.color} transition-all duration-500`}
              style={{ width: `${pct}%` }} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {userStream.subjects.map(sub => {
            let subDone = 0
            sub.topics.forEach(t => { if (completedTopics[t.id]) subDone++ })
            const subTotal = sub.topics.length
            const subPct = subTotal ? Math.round(subDone / subTotal * 100) : 0

            return (
              <Link
                key={sub.id}
                href={`/courses/${userStream.id}/${sub.id}`}
                className="card p-5 hover:border-slate-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 transition-all duration-200 group flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${sub.color} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                    {sub.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-slate-100 leading-tight group-hover:text-white">{sub.name}</div>
                    <div className="text-xs font-mono text-slate-500 mt-0.5">{sub.code}</div>
                    <div className="text-xs text-slate-500 mt-1">{sub.weightage}% weightage</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" />{subTotal} topics</span>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-500">{subDone}/{subTotal} done</span>
                    <span className={`font-mono font-bold bg-gradient-to-r ${getProgressColor(subPct)} bg-clip-text text-transparent`}>{subPct}%</span>
                  </div>
                  <div className="progress-track">
                    <div className={`progress-fill bg-gradient-to-r ${sub.color}`} style={{ width: `${subPct}%` }} />
                  </div>
                </div>

                <div className="mt-4 flex items-center text-xs text-violet-400 group-hover:text-violet-300 font-medium transition-colors">
                  View topics <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </AppShell>
  )
}
