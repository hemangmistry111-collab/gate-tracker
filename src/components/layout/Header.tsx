'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAppStore } from '@/lib/store'
import { useAuth } from '@/lib/auth-context'
import { ALL_STREAMS } from '@/data/streams'
import { Brain, ChevronRight, LogOut, User, Settings } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const PAGE_TITLES: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/courses': 'All Streams',
  '/schedule': 'Study Schedule',
  '/analysis': 'Analytics',
  '/ai-mentor': 'AI Mentor',
  '/settings': 'Settings',
}

export default function Header() {
  const pathname = usePathname()
  const activeStream = useAppStore(s => s.activeStream)
  const stream = ALL_STREAMS.find(s => s.id === activeStream)
  const { profile, signOut } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const pageTitle = Object.entries(PAGE_TITLES).find(([k]) => pathname.startsWith(k))?.[1] ?? 'GATE Tracker'
  const crumbs: { label: string; href?: string }[] = [{ label: 'GATE Tracker', href: '/' }]
  if (pathname.startsWith('/courses/') && pathname.split('/').length >= 3) {
    const sid = pathname.split('/')[2]
    const s = ALL_STREAMS.find(s => s.id === sid)
    crumbs.push({ label: 'Streams', href: '/courses' })
    if (s) crumbs.push({ label: s.shortName })
    if (pathname.split('/').length >= 4) {
      const subid = pathname.split('/')[3]
      const sub = s?.subjects.find(sub => sub.id === subid)
      if (sub) crumbs.push({ label: sub.code })
    }
  } else if (PAGE_TITLES[pathname]) {
    crumbs.push({ label: PAGE_TITLES[pathname] })
  }

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const initials = profile?.full_name
    ? profile.full_name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
    : '?'

  return (
    <header className="h-14 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 flex items-center justify-between px-6 sticky top-0 z-30">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-sm">
        {crumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-600" />}
            {crumb.href ? (
              <Link href={crumb.href} className="text-slate-400 hover:text-slate-200 transition-colors">{crumb.label}</Link>
            ) : (
              <span className="text-slate-200 font-medium">{crumb.label}</span>
            )}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3">
        {stream && (
          <Link href={`/courses/${stream.id}`}
            className="hidden sm:flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-slate-100 hover:border-slate-600 transition-all">
            <span>{stream.icon}</span>
            <span>{stream.shortName}</span>
          </Link>
        )}

        <Link href="/ai-mentor"
          className="flex items-center gap-1.5 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all shadow-md shadow-violet-500/20">
          <Brain className="w-3.5 h-3.5" />
          AI Mentor
        </Link>

        {/* User avatar + dropdown */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center text-xs font-bold text-white hover:ring-2 hover:ring-violet-500/50 transition-all"
          >
            {initials}
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-10 w-64 bg-slate-900 border border-slate-700 rounded-xl shadow-xl shadow-black/40 py-2 z-50">
              {/* Profile info */}
              <div className="px-4 py-3 border-b border-slate-800">
                <div className="font-semibold text-slate-100 text-sm">{profile?.full_name}</div>
                <div className="text-xs text-slate-500 mt-0.5">{profile?.email}</div>
                {profile?.institute_name && (
                  <div className="text-xs text-violet-400 mt-1 font-mono truncate">{profile.institute_name}</div>
                )}
                {profile?.city && profile?.state && (
                  <div className="text-xs text-slate-600 mt-0.5">{profile.city}, {profile.state}</div>
                )}
              </div>

              <Link href="/settings" onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-300 hover:text-slate-100 hover:bg-slate-800/60 transition-colors">
                <Settings className="w-4 h-4 text-slate-500" />
                Settings
              </Link>

              <button onClick={() => { setMenuOpen(false); signOut() }}
                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors">
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
