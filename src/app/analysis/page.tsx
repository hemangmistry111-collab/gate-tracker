'use client'
import AppShell from '@/components/layout/AppShell'
import { useAppStore } from '@/lib/store'
import { ALL_STREAMS } from '@/data/streams'
import { getLast7Days, getProgressColor, getDifficultyColor } from '@/lib/utils'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis } from 'recharts'

const COLORS = ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#6366f1', '#14b8a6']

export default function AnalysisPage() {
  const { activeStream, getSubjectProgress, getStreamProgress, getOverallStats, studyHours } = useAppStore()
  const stream = ALL_STREAMS.find(s => s.id === activeStream)!
  const { pct: streamPct } = getStreamProgress(activeStream)
  const { totalTopics, doneTopics, streak } = getOverallStats()

  const last7 = getLast7Days()
  const studyData = last7.map(day => ({
    day: new Date(day).toLocaleDateString('en-US', { weekday: 'short' }),
    hours: studyHours[day] || 0,
  }))

  const subjectData = stream.subjects.map(sub => {
    const { done, total, pct } = getSubjectProgress(activeStream, sub.id)
    return { name: sub.code, fullName: sub.name, pct, done, total, weightage: sub.weightage }
  })

  // Difficulty distribution
  let easy = 0, med = 0, hard = 0
  stream.subjects.forEach(s => s.topics.forEach(t => {
    if (t.difficulty === 'Easy') easy++
    else if (t.difficulty === 'Medium') med++
    else hard++
  }))
  const diffData = [
    { name: 'Easy', value: easy, color: '#10b981' },
    { name: 'Medium', value: med, color: '#f59e0b' },
    { name: 'Hard', value: hard, color: '#ef4444' },
  ]

  // Radar data
  const radarData = stream.subjects.slice(0, 8).map(sub => ({
    subject: sub.code,
    progress: getSubjectProgress(activeStream, sub.id).pct,
    fullMark: 100,
  }))

  // All streams comparison
  const allStreamsData = ALL_STREAMS.map(s => ({
    name: s.shortName,
    pct: getStreamProgress(s.id).pct,
  }))

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload?.length) {
      return (
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-xs shadow-xl">
          <div className="font-mono text-slate-300 mb-1">{label}</div>
          {payload.map((p: any, i: number) => (
            <div key={i} style={{ color: p.color }}>{p.name}: {p.value}{p.name === 'hours' ? 'h' : '%'}</div>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <AppShell>
      <div className="max-w-6xl mx-auto space-y-6 animate-fade-in">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Analytics</h1>
          <p className="text-slate-400 text-sm mt-1">{stream.icon} {stream.shortName} — Detailed progress analysis</p>
        </div>

        {/* Top stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Stream Progress', val: `${streamPct}%`, color: 'text-violet-400' },
            { label: 'Topics Completed', val: `${doneTopics}/${totalTopics}`, color: 'text-cyan-400' },
            { label: 'Study Streak', val: `${streak} days`, color: 'text-orange-400' },
            { label: 'Mastered Subjects', val: subjectData.filter(s => s.pct === 100).length, color: 'text-emerald-400' },
          ].map(s => (
            <div key={s.label} className="stat-card text-center">
              <div className={`text-3xl font-mono font-bold ${s.color} mb-1`}>{s.val}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Subject completion bar chart */}
          <div className="card p-5">
            <div className="section-heading">Subject Progress</div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={subjectData} layout="vertical" barSize={10}>
                <XAxis type="number" domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} unit="%" />
                <YAxis dataKey="name" type="category" tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} width={50} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                <Bar dataKey="pct" name="progress" radius={[0, 4, 4, 0]}>
                  {subjectData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Study hours */}
          <div className="card p-5">
            <div className="section-heading">Study Hours — Last 7 Days</div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={studyData} barSize={28}>
                <XAxis dataKey="day" tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} unit="h" />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                <Bar dataKey="hours" name="hours" fill="#8b5cf6" radius={[4, 4, 0, 0]}>
                  {studyData.map((_, i) => (
                    <Cell key={i} fill={i === 6 ? '#06b6d4' : '#8b5cf6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Radar chart */}
          <div className="card p-5">
            <div className="section-heading">Subject Coverage Radar</div>
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#1e293b" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 11 }} />
                <Radar name="Progress" dataKey="progress" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie chart difficulty */}
          <div className="card p-5">
            <div className="section-heading">Topic Difficulty Distribution</div>
            <div className="flex items-center justify-center gap-8">
              <ResponsiveContainer width="50%" height={200}>
                <PieChart>
                  <Pie data={diffData} cx="50%" cy="50%" outerRadius={80} dataKey="value" nameKey="name">
                    {diffData.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Pie>
                  <Tooltip formatter={(v: any, n: any) => [`${v} topics`, n]} contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', fontSize: '12px' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3">
                {diffData.map(d => (
                  <div key={d.name} className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: d.color }} />
                    <div>
                      <div className="text-sm text-slate-300">{d.name}</div>
                      <div className="text-xs font-mono text-slate-500">{d.value} topics</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All streams comparison */}
        <div className="card p-5">
          <div className="section-heading">All Streams Comparison</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {allStreamsData.map((s, i) => (
              <div key={s.name} className="text-center">
                <div className="text-lg font-mono font-bold" style={{ color: COLORS[i % COLORS.length] }}>{s.pct}%</div>
                <div className="text-xs text-slate-500 mb-2">{s.name}</div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${s.pct}%`, background: COLORS[i % COLORS.length] }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subject table */}
        <div className="card overflow-hidden">
          <div className="p-5 border-b border-slate-800">
            <div className="section-heading mb-0">Subject Details</div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800">
                  {['Subject', 'Code', 'Weightage', 'Done', 'Total', 'Progress', 'Status'].map(h => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-mono text-slate-500 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {subjectData.sort((a, b) => a.pct - b.pct).map((sub, i) => (
                  <tr key={sub.name} className="border-b border-slate-800/60 hover:bg-slate-800/30 transition-colors">
                    <td className="px-5 py-3 text-slate-200 font-medium truncate max-w-[180px]">{sub.fullName}</td>
                    <td className="px-5 py-3 font-mono text-slate-400 text-xs">{sub.name}</td>
                    <td className="px-5 py-3 font-mono text-amber-400">{sub.weightage}%</td>
                    <td className="px-5 py-3 font-mono text-emerald-400">{sub.done}</td>
                    <td className="px-5 py-3 font-mono text-slate-500">{sub.total}</td>
                    <td className="px-5 py-3 w-32">
                      <div className="flex items-center gap-2">
                        <div className="progress-track flex-1">
                          <div className="progress-fill bg-gradient-to-r from-violet-500 to-purple-500" style={{ width: `${sub.pct}%` }} />
                        </div>
                        <span className="text-xs font-mono text-slate-400 w-8 text-right">{sub.pct}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <span className={`badge text-[10px] ${sub.pct === 100 ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30' : sub.pct > 0 ? 'text-amber-400 bg-amber-400/10 border-amber-400/30' : 'text-slate-400 bg-slate-700 border-slate-600'}`}>
                        {sub.pct === 100 ? 'Done' : sub.pct > 0 ? 'In Progress' : 'Pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
