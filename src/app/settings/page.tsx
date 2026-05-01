'use client'
import { useState } from 'react'
import AppShell from '@/components/layout/AppShell'
import { useAppStore } from '@/lib/store'
import { useAuth } from '@/lib/auth-context'
import { supabase } from '@/lib/supabase'
import { ALL_STREAMS } from '@/data/streams'
import { getDaysToGATE } from '@/lib/utils'
import { Save, User, Target, Clock, BookOpen, Building2, Loader2 } from 'lucide-react'

const STATES = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat',
  'Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh',
  'Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan',
  'Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal',
  'Delhi','Chandigarh','Jammu & Kashmir','Ladakh','Puducherry','Other'
]

export default function SettingsPage() {
  const { targetDate, dailyGoalHours, setTargetDate, setDailyGoalHours } = useAppStore()
  const { profile, user, refreshProfile } = useAuth()

  const [fullName, setFullName] = useState(profile?.full_name || '')
  const [institute, setInstitute] = useState(profile?.institute_name || '')
  const [city, setCity] = useState(profile?.city || '')
  const [state, setState] = useState(profile?.state || 'Gujarat')
  const [selectedStream, setSelectedStream] = useState(profile?.selected_stream || '')
  const [date, setDate] = useState(targetDate)
  const [hours, setHours] = useState(dailyGoalHours)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const save = async () => {
    setSaving(true)
    setTargetDate(date)
    setDailyGoalHours(hours)
    if (user) {
      await supabase.from('profiles').upsert({
        id: user.id,
        full_name: fullName,
        institute_name: institute,
        city,
        state,
        selected_stream: selectedStream,
        target_date: date,
        daily_goal_hours: hours,
        updated_at: new Date().toISOString(),
      })
      await refreshProfile()
    }
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const daysLeft = getDaysToGATE(date)

  return (
    <AppShell>
      <div className="max-w-2xl mx-auto animate-fade-in">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-100">Settings</h1>
          <p className="text-slate-400 text-sm mt-1">Update your profile and GATE preferences</p>
        </div>

        <div className="space-y-5">
          {/* Profile */}
          <div className="card p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <User className="w-4 h-4 text-violet-400" />
              <h2 className="font-semibold text-slate-200">Profile</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                <input className="input" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Email</label>
                <input className="input opacity-60" value={profile?.email || ''} disabled />
                <p className="text-xs text-slate-600 mt-1">Email cannot be changed</p>
              </div>
            </div>
          </div>

          {/* Institute */}
          <div className="card p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <h2 className="font-semibold text-slate-200">Institute</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">College / Institute Name</label>
                <input className="input" value={institute} onChange={e => setInstitute(e.target.value)} placeholder="e.g. LDRP Institute of Technology" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">City</label>
                  <input className="input" value={city} onChange={e => setCity(e.target.value)} placeholder="e.g. Gandhinagar" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">State</label>
                  <select className="input" value={state} onChange={e => setState(e.target.value)}>
                    {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Stream */}
          <div className="card p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <h2 className="font-semibold text-slate-200">GATE Stream</h2>
            </div>
            <p className="text-xs text-slate-500 mb-4">Changing your stream will not delete your existing progress.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {ALL_STREAMS.map(stream => (
                <button key={stream.id} onClick={() => setSelectedStream(stream.id)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all ${
                    selectedStream === stream.id
                      ? `border-violet-500/50 bg-gradient-to-br ${stream.color} bg-opacity-10`
                      : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                  }`}>
                  <span className="text-xl">{stream.icon}</span>
                  <div>
                    <div className={`text-xs font-semibold ${selectedStream === stream.id ? 'text-white' : 'text-slate-300'}`}>{stream.shortName}</div>
                    <div className="text-[10px] font-mono text-slate-500">{stream.examCode}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* GATE Target */}
          <div className="card p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <Target className="w-4 h-4 text-cyan-400" />
              <h2 className="font-semibold text-slate-200">GATE Target</h2>
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Target Exam Date</label>
              <input type="date" className="input" value={date} onChange={e => setDate(e.target.value)} />
              {date && (
                <p className="text-xs text-amber-400 mt-2 font-mono">
                  {daysLeft > 0 ? `${daysLeft} days remaining` : 'Exam date passed!'}
                </p>
              )}
            </div>
          </div>

          {/* Study Goal */}
          <div className="card p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <Clock className="w-4 h-4 text-amber-400" />
              <h2 className="font-semibold text-slate-200">Daily Study Goal</h2>
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Hours Per Day: <span className="text-amber-400">{hours}h</span></label>
              <input type="range" min={1} max={16} step={0.5} value={hours}
                onChange={e => setHours(Number(e.target.value))} className="w-full accent-violet-500" />
              <div className="flex justify-between text-xs text-slate-600 font-mono mt-1">
                <span>1h</span><span>8h</span><span>16h</span>
              </div>
            </div>
          </div>

          <button onClick={save} disabled={saving}
            className="btn-primary w-full justify-center py-3 disabled:opacity-60">
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {saved ? 'Saved! ✓' : saving ? 'Saving...' : 'Save Settings'}
          </button>

          <div className="card p-5 bg-gradient-to-br from-violet-950/20 to-slate-900 border-violet-500/10">
            <div className="text-xs text-slate-500 text-center leading-relaxed">
              <div className="font-mono text-violet-400 mb-1">GATE Tracker v2.0</div>
              Built for GATE aspirants 🔥 · AI powered by Claude (Anthropic) · Data synced to cloud
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
