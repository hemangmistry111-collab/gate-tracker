'use client'
import Link from 'next/link'
import { ALL_STREAMS } from '@/data/streams'
import { useAuth } from '@/lib/auth-context'
import { ArrowRight, Zap, BarChart3, Brain, BookOpen, Target, CheckCircle, LogIn } from 'lucide-react'

export default function HomePage() {
  const { user, profile, loading } = useAuth()
  const isLoggedIn = !!user && !!profile?.full_name?.trim()

  return (
    <div className="min-h-screen bg-slate-950">

      {/* Navbar */}
      <nav className="border-b border-slate-800 px-6 py-4 flex items-center justify-between sticky top-0 bg-slate-950/90 backdrop-blur-sm z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center font-mono font-bold text-sm text-white">
            GT
          </div>
          <span className="font-bold text-slate-100">GATE Tracker</span>
          <span className="text-[10px] font-mono text-slate-500 hidden sm:block">AI-Powered</span>
        </div>
        <div className="flex items-center gap-3">
          {loading ? null : isLoggedIn ? (
            <Link href="/dashboard" className="btn-primary px-5 py-2 text-sm">
              Go to Dashboard <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <>
              <Link href="/dashboard" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-100 transition-colors px-3 py-2">
                <LogIn className="w-4 h-4" /> Log In
              </Link>
              <Link href="/dashboard" className="btn-primary px-5 py-2 text-sm">
                Get Started Free <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-slate-950 to-cyan-950/20 pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-8">
            <Zap className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-xs font-mono text-violet-400 tracking-widest uppercase">AI-Powered GATE Tracker</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Crack <span className="text-gradient">GATE</span>
            <br />with Smart Tracking
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Track every topic across all GATE streams — CS, ECE, EE, ME, CE, BT, DA and more.
            Get personalized AI mentorship, detailed analytics and structured study plans.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="btn-primary text-base px-8 py-3">
              {isLoggedIn ? 'Go to Dashboard' : 'Start Tracking Free'} <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#streams" className="btn-secondary text-base px-8 py-3">
              Browse Streams
            </a>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">Everything you need to <span className="text-gradient">score high</span></h2>
          <p className="text-slate-400">Built for serious GATE aspirants across all branches</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: <BookOpen className="w-6 h-6 text-violet-400" />, title: 'Complete Syllabus', desc: 'Every subject and topic for all GATE streams. CS, ECE, EE, ME, CE, BT, DA and more — fully mapped.', color: 'from-violet-500/10 to-purple-500/5', border: 'border-violet-500/20' },
            { icon: <Brain className="w-6 h-6 text-cyan-400" />, title: 'AI Mentor', desc: 'Get personalized study plans, topic explanations and GATE-level questions powered by Claude AI.', color: 'from-cyan-500/10 to-teal-500/5', border: 'border-cyan-500/20' },
            { icon: <BarChart3 className="w-6 h-6 text-amber-400" />, title: 'Deep Analytics', desc: 'Track progress by subject and difficulty. See your weak areas and get actionable insights.', color: 'from-amber-500/10 to-orange-500/5', border: 'border-amber-500/20' },
            { icon: <Target className="w-6 h-6 text-rose-400" />, title: 'Smart Planner', desc: 'Personalized daily schedules based on weak areas, exam weightage and days remaining.', color: 'from-rose-500/10 to-pink-500/5', border: 'border-rose-500/20' },
            { icon: <CheckCircle className="w-6 h-6 text-emerald-400" />, title: 'Cloud Sync', desc: 'Your progress is saved to the cloud. Log in from any device and pick up exactly where you left off.', color: 'from-emerald-500/10 to-green-500/5', border: 'border-emerald-500/20' },
            { icon: <Zap className="w-6 h-6 text-indigo-400" />, title: 'Streak Tracking', desc: 'Build daily habits with streak tracking. Set daily goals and stay motivated till exam day.', color: 'from-indigo-500/10 to-blue-500/5', border: 'border-indigo-500/20' },
          ].map(f => (
            <div key={f.title} className={`card p-6 bg-gradient-to-br ${f.color} border ${f.border} hover:scale-[1.02] transition-transform`}>
              <div className="mb-3">{f.icon}</div>
              <h3 className="font-semibold text-slate-100 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Streams */}
        <div id="streams">
          <h2 className="text-2xl font-bold text-center mb-10">All <span className="text-gradient">GATE Streams</span> Covered</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {ALL_STREAMS.map(stream => (
              <div key={stream.id} className="card p-4 text-center hover:border-slate-600 hover:-translate-y-1 transition-all duration-200 group">
                <div className="text-3xl mb-2">{stream.icon}</div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-white">{stream.shortName}</div>
                <div className="text-xs text-slate-500 mt-1">{stream.examCode}</div>
                <div className="text-xs text-slate-600 mt-1">{stream.subjects.length} subjects</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center card p-12 bg-gradient-to-br from-violet-950/40 to-cyan-950/20 border-violet-500/20">
          <div className="text-4xl mb-4">🎯</div>
          <h2 className="text-2xl font-bold mb-3">Ready to start your GATE prep?</h2>
          <p className="text-slate-400 mb-6">Join thousands of aspirants tracking their progress with GATE Tracker.</p>
          <Link href="/dashboard" className="btn-primary text-base px-8 py-3">
            {isLoggedIn ? 'Go to Dashboard' : 'Create Free Account'} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>Built for GATE Aspirants 🔥 &nbsp;|&nbsp; AI Mentor powered by Claude &nbsp;|&nbsp; Cloud sync via Supabase</p>
      </footer>
    </div>
  )
}