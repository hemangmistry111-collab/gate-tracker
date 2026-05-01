'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAppStore } from '@/lib/store'
import { useAuth } from '@/lib/auth-context'
import { ALL_STREAMS } from '@/data/streams'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard, BookOpen, BarChart3, Brain, Calendar,
  Settings, ChevronRight, Flame, Target, Zap, Building2
} from 'lucide-react'

const NAV = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/courses', label: 'My Stream', icon: BookOpen },
  { href: '/schedule', label: 'Schedule', icon: Calendar },
  { href: '/analysis', label: 'Analysis', icon: BarChart3 },
  { href: '/ai-mentor', label: 'AI Mentor', icon: Brain },
  { href: '/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()
  const activeStream = useAppStore(s => s.activeStream)
  const completedTopics = useAppStore(s => s.completedTopics)
  const studyHours = useAppStore(s => s.studyHours)
  const targetDate = useAppStore(s => s.targetDate)
  const { profile } = useAuth()

  const daysLeft = Math.max(0, Math.ceil((new Date(targetDate).getTime() - Date.now()) / 86400000))

  // Compute streak inline (no getter functions = no infinite loop)
  const streak = (() => {
    let s = 0
    const today = new Date()
    for (let i = 0; i < 365; i++) {
      const d = new Date(today)
      d.setDate(d.getDate() - i)
      const key = d.toISOString().split('T')[0]
      if (studyHours[key] && studyHours[key] > 0) s++
      else if (i > 0) break
    }
    return s
  })()

  // Only show the user's selected stream
  const userStreamId = profile?.selected_stream || activeStream
  const userStream = ALL_STREAMS.find(s => s.id === userStreamId)

  const getStreamPct = (streamId: string) => {
    const stream = ALL_STREAMS.find(s => s.id === streamId)
    if (!stream) return 0
    let done = 0, total = 0
    stream.subjects.forEach(sub => sub.topics.forEach(t => {
      total++
      if (completedTopics[t.id]) done++
    }))
    return total ? Math.round(done / total * 100) : 0
  }

  const pct = userStream ? getStreamPct(userStream.id) : 0

  return (
    <aside className="w-64 h-screen bg-slate-900 border-r border-slate-800 flex flex-col sticky top-0 overflow-y-auto">
      {/* Logo */}
      <div className="p-5 border-b border-slate-800">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center font-mono font-bold text-sm text-white shadow-lg shadow-violet-500/20">
            GT
          </div>
          <div>
            <div className="font-bold text-slate-100 leading-none">GATE Tracker</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">AI-Powered</div>
          </div>
        </Link>
      </div>

      {/* User quick stats */}
      <div className="px-4 py-3 border-b border-slate-800 flex gap-3">
        <div className="flex items-center gap-1.5 text-xs">
          <Flame className="w-3.5 h-3.5 text-orange-400" />
          <span className="font-mono font-bold text-orange-400">{streak}</span>
          <span className="text-slate-500">streak</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <Target className="w-3.5 h-3.5 text-violet-400" />
          <span className="font-mono font-bold text-violet-400">{daysLeft}d</span>
          <span className="text-slate-500">left</span>
        </div>
      </div>

      {/* Institute badge */}
      {profile?.institute_name && (
        <div className="px-4 py-2.5 border-b border-slate-800 flex items-start gap-2">
          <Building2 className="w-3.5 h-3.5 text-cyan-500 mt-0.5 flex-shrink-0" />
          <div className="min-w-0">
            <div className="text-[11px] text-cyan-400 font-medium truncate">{profile.institute_name}</div>
            {profile.city && <div className="text-[10px] text-slate-600">{profile.city}, {profile.state}</div>}
          </div>
        </div>
      )}

      {/* Main nav */}
      <div className="p-3 border-b border-slate-800">
        <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest px-2 mb-2">Navigation</div>
        <nav className="space-y-0.5">
          {NAV.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'nav-item',
                (pathname === href || pathname.startsWith(href + '/') && href !== '/') && 'active'
              )}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="flex-1">{label}</span>
              {label === 'AI Mentor' && (
                <span className="text-[9px] font-mono bg-violet-500/20 text-violet-400 border border-violet-500/30 px-1.5 py-0.5 rounded uppercase tracking-wide">AI</span>
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/* Selected stream card */}
      {userStream && (
        <div className="p-3 flex-1">
          <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest px-2 mb-2">Your GATE Stream</div>
          <Link
            href={`/courses/${userStream.id}`}
            className={cn(
              'w-full flex items-center gap-2.5 px-3 py-3 rounded-xl border text-left transition-all',
              'bg-slate-800 border-slate-700/60 hover:border-slate-600'
            )}
          >
            <span className="text-2xl leading-none">{userStream.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-slate-100 text-sm">{userStream.shortName}</div>
              <div className="text-[10px] font-mono text-slate-500">GATE {userStream.examCode}</div>
              <div className="w-full h-1 bg-slate-700 rounded-full mt-2 overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${userStream.color} transition-all duration-500`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
            <span className="font-mono text-[11px] text-slate-400 flex-shrink-0">{pct}%</span>
          </Link>

          {/* Subjects quick-links */}
          <div className="mt-2 space-y-0.5">
            {userStream.subjects.slice(0, 6).map(sub => {
              let done = 0
              sub.topics.forEach(t => { if (completedTopics[t.id]) done++ })
              const subPct = sub.topics.length ? Math.round(done / sub.topics.length * 100) : 0
              return (
                <Link
                  key={sub.id}
                  href={`/courses/${userStream.id}/${sub.id}`}
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-all"
                >
                  <span className="text-sm">{sub.icon}</span>
                  <span className="flex-1 truncate">{sub.name}</span>
                  <span className="font-mono text-[10px] text-slate-600">{subPct}%</span>
                </Link>
              )
            })}
            {userStream.subjects.length > 6 && (
              <Link href={`/courses/${userStream.id}`}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-slate-600 hover:text-violet-400 transition-colors">
                <ChevronRight className="w-3 h-3" />
                +{userStream.subjects.length - 6} more subjects
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="p-3 border-t border-slate-800">
        <Link
          href="/ai-mentor"
          className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-gradient-to-r from-violet-600/20 to-purple-600/10 border border-violet-500/20 hover:border-violet-500/40 transition-all group"
        >
          <Zap className="w-4 h-4 text-violet-400" />
          <div className="flex-1">
            <div className="text-xs font-semibold text-violet-300">Ask AI Mentor</div>
            <div className="text-[10px] text-slate-500">Get study suggestions</div>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 transition-colors" />
        </Link>
      </div>
    </aside>
  )
}
