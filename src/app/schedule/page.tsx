'use client'
import { useState } from 'react'
import AppShell from '@/components/layout/AppShell'
import { useAppStore } from '@/lib/store'
import { ALL_STREAMS } from '@/data/streams'
import { getLast7Days } from '@/lib/utils'
import { Plus, Minus, Calendar, Clock, Target } from 'lucide-react'

const STUDY_PLAN_TEMPLATES = [
  { time: '6:00 AM', duration: '90 min', type: 'Core Subject Study', color: 'border-violet-500/30 bg-violet-500/5' },
  { time: '8:00 AM', duration: '60 min', type: 'Previous Year Questions', color: 'border-cyan-500/30 bg-cyan-500/5' },
  { time: '10:00 AM', duration: '45 min', type: 'Quick Revision', color: 'border-emerald-500/30 bg-emerald-500/5' },
  { time: '2:00 PM', duration: '90 min', type: 'Weak Area Focus', color: 'border-amber-500/30 bg-amber-500/5' },
  { time: '4:30 PM', duration: '60 min', type: 'Mock Test / MCQs', color: 'border-rose-500/30 bg-rose-500/5' },
  { time: '7:00 PM', duration: '60 min', type: 'Formula Revision', color: 'border-indigo-500/30 bg-indigo-500/5' },
  { time: '9:00 PM', duration: '30 min', type: 'Next Day Planning', color: 'border-slate-500/30 bg-slate-500/5' },
]

export default function SchedulePage() {
  const { activeStream, studyHours, logStudyHours, dailyGoalHours, getSubjectProgress, getWeakSubjects } = useAppStore()
  const stream = ALL_STREAMS.find(s => s.id === activeStream)!
  const last7 = getLast7Days()
  const todayKey = last7[6]
  const weakSubjects = getWeakSubjects(activeStream)

  const totalWeekHours = last7.reduce((acc, d) => acc + (studyHours[d] || 0), 0)
  const todayHours = studyHours[todayKey] || 0

  const adjustHours = (delta: number) => {
    const next = Math.max(0, Math.min(16, (studyHours[todayKey] || 0) + delta))
    logStudyHours(todayKey, next)
  }

  // Generate a smart schedule based on weak areas
  const smartSchedule = stream.subjects
    .map(sub => ({
      ...sub,
      pct: getSubjectProgress(activeStream, sub.id).pct,
      priority: sub.weightage * (1 - getSubjectProgress(activeStream, sub.id).pct / 100)
    }))
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 5)

  return (
    <AppShell>
      <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Study Schedule</h1>
          <p className="text-slate-400 text-sm mt-1">{stream.icon} {stream.shortName} — Track your daily study hours and plan your week</p>
        </div>

        {/* Weekly overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="stat-card">
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mb-2">Today</div>
            <div className="text-3xl font-mono font-bold text-cyan-400">{todayHours}h</div>
            <div className="text-xs text-slate-500 mt-1">Goal: {dailyGoalHours}h</div>
            <div className="progress-track mt-2">
              <div className="progress-fill bg-gradient-to-r from-cyan-500 to-teal-500" style={{ width: `${Math.min(100, todayHours / dailyGoalHours * 100)}%` }} />
            </div>
          </div>
          <div className="stat-card">
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mb-2">This Week</div>
            <div className="text-3xl font-mono font-bold text-violet-400">{totalWeekHours}h</div>
            <div className="text-xs text-slate-500 mt-1">of {dailyGoalHours * 7}h goal</div>
          </div>
          <div className="stat-card">
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mb-2">Avg / Day</div>
            <div className="text-3xl font-mono font-bold text-amber-400">
              {(totalWeekHours / 7).toFixed(1)}h
            </div>
            <div className="text-xs text-slate-500 mt-1">last 7 days</div>
          </div>
          <div className="stat-card">
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mb-2">Days Active</div>
            <div className="text-3xl font-mono font-bold text-emerald-400">
              {last7.filter(d => (studyHours[d] || 0) > 0).length}
            </div>
            <div className="text-xs text-slate-500 mt-1">of 7 days</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Log today's hours */}
          <div className="card p-5">
            <div className="section-heading">Log Today's Study Hours</div>
            <div className="text-xs text-slate-500 mb-4 font-mono">
              {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })}
            </div>
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={() => adjustHours(-0.5)}
                className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 hover:border-rose-500/40 hover:bg-rose-500/5 text-slate-300 flex items-center justify-center transition-all text-xl"
              >
                <Minus className="w-5 h-5" />
              </button>
              <div className="text-center">
                <div className="text-6xl font-mono font-black text-cyan-400">{todayHours}</div>
                <div className="text-sm text-slate-500 mt-1">hours today</div>
              </div>
              <button
                onClick={() => adjustHours(0.5)}
                className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 hover:border-emerald-500/40 hover:bg-emerald-500/5 text-slate-300 flex items-center justify-center transition-all text-xl"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {/* Quick set */}
            <div className="flex gap-2 mt-6 justify-center flex-wrap">
              {[2, 4, 6, 8, 10].map(h => (
                <button
                  key={h}
                  onClick={() => logStudyHours(todayKey, h)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                    todayHours === h
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600'
                  }`}
                >
                  {h}h
                </button>
              ))}
            </div>
          </div>

          {/* Weekly heatmap */}
          <div className="card p-5">
            <div className="section-heading">Weekly Heatmap</div>
            <div className="grid grid-cols-7 gap-2">
              {last7.map((day, i) => {
                const h = studyHours[day] || 0
                const dayName = new Date(day).toLocaleDateString('en-US', { weekday: 'short' })
                const dateNum = new Date(day).getDate()
                const isToday = day === todayKey
                const intensity = Math.min(1, h / dailyGoalHours)
                return (
                  <div key={day} className="text-center">
                    <div className="text-xs font-mono text-slate-500 mb-1.5">{dayName}</div>
                    <div
                      className="w-full aspect-square rounded-lg flex items-center justify-center text-xs font-mono font-bold transition-all"
                      style={{
                        background: h > 0 ? `rgba(139,92,246,${0.15 + intensity * 0.85})` : '#1e293b',
                        border: isToday ? '2px solid rgb(139,92,246)' : '2px solid transparent',
                        color: h > 0 ? 'white' : '#475569',
                      }}
                    >
                      {dateNum}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 mt-1">{h > 0 ? `${h}h` : '—'}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Smart Priority Schedule */}
        <div className="card p-5">
          <div className="section-heading">AI-Recommended Priority Subjects</div>
          <p className="text-xs text-slate-500 mb-4">Based on your progress and GATE weightage, focus on these subjects today:</p>
          <div className="space-y-3">
            {smartSchedule.map((sub, i) => (
              <div key={sub.id} className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/40 border border-slate-700/60">
                <div className="text-slate-400 font-mono text-sm font-bold w-6">#{i + 1}</div>
                <div className="text-xl">{sub.icon}</div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-200">{sub.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {sub.weightage}% GATE weightage · {sub.pct}% completed
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-mono text-amber-400 font-bold">
                    ~{Math.max(1, Math.round((100 - sub.pct) / 100 * sub.topics.length * 0.5))}h
                  </div>
                  <div className="text-xs text-slate-500">recommended</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily schedule template */}
        <div className="card p-5">
          <div className="section-heading">Ideal Daily Study Template</div>
          <div className="space-y-2">
            {STUDY_PLAN_TEMPLATES.map((slot, i) => (
              <div key={i} className={`flex items-center gap-4 p-3.5 rounded-xl border ${slot.color}`}>
                <div className="flex items-center gap-2 w-24 flex-shrink-0">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-xs font-mono text-slate-400">{slot.time}</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-slate-200">{slot.type}</div>
                </div>
                <div className="text-xs font-mono text-slate-500">{slot.duration}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-600 mt-4 text-center font-mono">
            Total: ~7h 45min · Adjust based on your daily goal of {dailyGoalHours}h
          </p>
        </div>
      </div>
    </AppShell>
  )
}
