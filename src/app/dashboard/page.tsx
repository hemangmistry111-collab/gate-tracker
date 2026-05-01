'use client'
import AppShell from '@/components/layout/AppShell'
import { useAppStore } from '@/lib/store'
import { ALL_STREAMS } from '@/data/streams'
import { getDaysToGATE, getStatus, getProgressColor, getLast7Days, cn } from '@/lib/utils'
import Link from 'next/link'
import { Flame, Target, BookOpen, TrendingUp, AlertTriangle, ArrowRight, Brain, CheckCircle2 } from 'lucide-react'

export default function DashboardPage() {
  const {
    activeStream, targetDate, dailyGoalHours, studyHours,
    getStreamProgress, getSubjectProgress, getWeakSubjects, getOverallStats, toggleTopic, completedTopics
  } = useAppStore()

  const stream = ALL_STREAMS.find(s => s.id === activeStream)!
  const { done, total, pct } = getStreamProgress(activeStream)
  const { totalTopics, doneTopics, pct: overallPct, streak } = getOverallStats()
  const weakSubjects = getWeakSubjects(activeStream)
  const daysLeft = getDaysToGATE(targetDate)
  const last7 = getLast7Days()
  const todayKey = last7[6]
  const todayHours = studyHours[todayKey] || 0

  // Recent activity: topics that are done across active stream
  const recentDone = stream.subjects.flatMap(s =>
    s.topics.filter(t => completedTopics[t.id]).map(t => ({ ...t, subjectName: s.name }))
  ).slice(-5).reverse()

  return (
    <AppShell>
      <div className="max-w-6xl mx-auto space-y-6 animate-fade-in">

        {/* Welcome */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-100">
              {stream.icon} {stream.shortName} Dashboard
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              {stream.name} — {stream.subjects.length} subjects, {total} topics
            </p>
          </div>
          <Link href="/ai-mentor" className="btn-primary">
            <Brain className="w-4 h-4" />
            Ask AI Mentor
          </Link>
        </div>

        {/* Top stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Stream Progress', val: `${pct}%`, sub: `${done}/${total} topics`, icon: TrendingUp, color: 'text-violet-400' },
            { label: 'Study Streak', val: `${streak}`, sub: 'days in a row', icon: Flame, color: 'text-orange-400' },
            { label: 'Days to GATE', val: daysLeft, sub: `Target: ${new Date(targetDate).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}`, icon: Target, color: 'text-cyan-400' },
            { label: "Today's Hours", val: `${todayHours}h`, sub: `Goal: ${dailyGoalHours}h/day`, icon: BookOpen, color: 'text-emerald-400' },
          ].map(stat => (
            <div key={stat.label} className="stat-card group">
              <div className="flex items-start justify-between mb-3">
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">{stat.label}</div>
                <stat.icon className={`w-4 h-4 ${stat.color} opacity-70`} />
              </div>
              <div className={`text-3xl font-mono font-bold ${stat.color}`}>{stat.val}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Progress bar hero */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="font-semibold text-slate-200">{stream.shortName} Overall Progress</div>
              <div className="text-sm text-slate-500">{done} of {total} topics completed</div>
            </div>
            <div className={`text-4xl font-mono font-bold bg-gradient-to-r ${getProgressColor(pct)} bg-clip-text text-transparent`}>
              {pct}%
            </div>
          </div>
          <div className="progress-track h-3 rounded-lg">
            <div
              className={`h-full rounded-lg bg-gradient-to-r ${getProgressColor(pct)} transition-all duration-1000 ease-out`}
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-3 text-xs text-slate-500">
            <span>0%</span>
            <span className="text-slate-400">Est. {Math.ceil((total - done) * 0.5)} hrs remaining</span>
            <span>100%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Subject progress */}
          <div className="lg:col-span-2 card p-5">
            <div className="section-heading">Subject Progress</div>
            <div className="space-y-3">
              {stream.subjects.map(sub => {
                const { done: sd, total: st, pct: sp } = getSubjectProgress(activeStream, sub.id)
                return (
                  <Link
                    key={sub.id}
                    href={`/courses/${activeStream}/${sub.id}`}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-800/60 transition-colors group"
                  >
                    <div className="text-xl w-8 text-center flex-shrink-0">{sub.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-slate-200 truncate group-hover:text-white">{sub.name}</span>
                        <span className="text-xs font-mono text-slate-400 ml-2 flex-shrink-0">{sd}/{st}</span>
                      </div>
                      <div className="progress-track">
                        <div
                          className={`progress-fill bg-gradient-to-r ${sub.color}`}
                          style={{ width: `${sp}%` }}
                        />
                      </div>
                    </div>
                    <div className="text-xs font-mono font-bold w-10 text-right flex-shrink-0" style={{
                      color: sp >= 70 ? '#34d399' : sp >= 40 ? '#fbbf24' : '#a78bfa'
                    }}>
                      {sp}%
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {/* Weak areas */}
            <div className="card p-5">
              <div className="section-heading text-rose-500/70">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                Weak Areas
              </div>
              {weakSubjects.length === 0 ? (
                <div className="text-sm text-slate-500 text-center py-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                  No weak areas!
                </div>
              ) : (
                <div className="space-y-3">
                  {weakSubjects.map(w => (
                    <div key={w.subjectId}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-400 truncate">{w.name}</span>
                        <span className="font-mono text-rose-400">{w.pct}%</span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill bg-gradient-to-r from-rose-500 to-red-500" style={{ width: `${w.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <Link href="/ai-mentor" className="mt-4 flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 transition-colors">
                <Brain className="w-3.5 h-3.5" />
                Get AI suggestions for weak areas
              </Link>
            </div>

            {/* Weekly study heat */}
            <div className="card p-5">
              <div className="section-heading">This Week</div>
              <div className="grid grid-cols-7 gap-1">
                {last7.map((day, i) => {
                  const h = studyHours[day] || 0
                  const intensity = Math.min(1, h / dailyGoalHours)
                  const dayName = new Date(day).toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 2)
                  return (
                    <div key={day} className="text-center">
                      <div
                        className="w-full aspect-square rounded-md mb-1 transition-colors"
                        style={{
                          backgroundColor: h > 0
                            ? `rgba(139,92,246,${0.2 + intensity * 0.8})`
                            : '#1e293b',
                          border: day === todayKey ? '1px solid rgb(139,92,246)' : '1px solid transparent'
                        }}
                      />
                      <div className="text-[9px] font-mono text-slate-600">{dayName}</div>
                      <div className="text-[9px] font-mono text-slate-500">{h > 0 ? `${h}h` : ''}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Quick links */}
            <div className="card p-5">
              <div className="section-heading">Quick Actions</div>
              <div className="space-y-2">
                {[
                  { href: `/courses/${activeStream}`, label: 'View All Subjects', icon: BookOpen },
                  { href: '/schedule', label: 'Study Schedule', icon: Target },
                  { href: '/analysis', label: 'Full Analytics', icon: TrendingUp },
                ].map(a => (
                  <Link key={a.href} href={a.href} className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-slate-800 transition-colors text-sm text-slate-400 hover:text-slate-200 group">
                    <a.icon className="w-4 h-4" />
                    {a.label}
                    <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
