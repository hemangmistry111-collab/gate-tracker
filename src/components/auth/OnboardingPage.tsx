'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/lib/auth-context'
import { ALL_STREAMS } from '@/data/streams'
import { User, GraduationCap, Building2, MapPin, BookOpen, Target, ChevronRight, ChevronLeft, Loader2, CheckCircle2 } from 'lucide-react'

const STEPS = ['profile', 'institute', 'stream', 'goal'] as const
type Step = typeof STEPS[number]

const DEGREES = ['B.Tech', 'B.E.', 'B.Sc', 'M.Tech', 'M.E.', 'M.Sc', 'PhD', 'Other']
const STATES = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat',
  'Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh',
  'Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan',
  'Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal',
  'Delhi','Chandigarh','Jammu & Kashmir','Ladakh','Puducherry','Other'
]

export default function OnboardingPage() {
  const { user, refreshProfile } = useAuth()
  const [step, setStep] = useState<Step>('profile')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [fullName, setFullName] = useState('')
  const [degree, setDegree] = useState('B.Tech')
  const [gradYear, setGradYear] = useState(new Date().getFullYear() + 1)

  const [institute, setInstitute] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('Gujarat')

  const [selectedStream, setSelectedStream] = useState('')
  const [targetDate, setTargetDate] = useState('2026-02-01')
  const [dailyGoal, setDailyGoal] = useState(6)

  const stepIndex = STEPS.indexOf(step)
  const canNext: Record<Step, boolean> = {
    profile: !!fullName.trim(),
    institute: !!institute.trim() && !!city.trim(),
    stream: !!selectedStream,
    goal: true,
  }

  const next = () => {
    if (stepIndex < STEPS.length - 1) setStep(STEPS[stepIndex + 1])
  }
  const back = () => {
    if (stepIndex > 0) setStep(STEPS[stepIndex - 1])
  }

  const submit = async () => {
    setLoading(true); setError('')
    try {
      const { error } = await supabase.from('profiles').upsert({
        id: user!.id,
        email: user!.email,
        full_name: fullName.trim(),
        degree,
        graduation_year: gradYear,
        institute_name: institute.trim(),
        city: city.trim(),
        state,
        selected_stream: selectedStream,
        target_date: targetDate,
        daily_goal_hours: dailyGoal,
        updated_at: new Date().toISOString(),
      })
      if (error) throw error
      await refreshProfile()
    } catch (e: any) {
      setError(e.message)
      setLoading(false)
    }
  }

  const stepLabels: Record<Step, string> = {
    profile: 'Your Profile',
    institute: 'Your Institute',
    stream: 'GATE Stream',
    goal: 'Study Goal',
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center font-mono font-bold text-lg text-white shadow-lg shadow-violet-500/30 mx-auto mb-4">
            GT
          </div>
          <h1 className="text-2xl font-bold text-slate-100">Set up your profile</h1>
          <p className="text-slate-400 text-sm mt-1">Takes about 1 minute. You can update this anytime.</p>
        </div>

        {/* Step progress */}
        <div className="flex items-center gap-2 mb-6">
          {STEPS.map((s, i) => (
            <div key={s} className="flex-1 flex items-center gap-2">
              <div className={`h-1.5 flex-1 rounded-full transition-all ${i <= stepIndex ? 'bg-violet-500' : 'bg-slate-800'}`} />
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <div className="flex items-center gap-2.5 mb-6">
            {step === 'profile' && <User className="w-5 h-5 text-violet-400" />}
            {step === 'institute' && <Building2 className="w-5 h-5 text-cyan-400" />}
            {step === 'stream' && <BookOpen className="w-5 h-5 text-emerald-400" />}
            {step === 'goal' && <Target className="w-5 h-5 text-amber-400" />}
            <h2 className="text-lg font-semibold text-slate-100">{stepLabels[step]}</h2>
          </div>

          {/* Step: Profile */}
          {step === 'profile' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Full Name *</label>
                <input className="input" placeholder="e.g. Heman Patel" value={fullName} onChange={e => setFullName(e.target.value)} />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Degree</label>
                <div className="grid grid-cols-4 gap-2">
                  {DEGREES.map(d => (
                    <button key={d} onClick={() => setDegree(d)}
                      className={`px-3 py-2 rounded-lg border text-xs font-medium transition-all ${degree === d ? 'border-violet-500 bg-violet-500/10 text-violet-300' : 'border-slate-700 bg-slate-800/50 text-slate-400 hover:border-slate-600'}`}>
                      {d}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Graduation Year</label>
                <input type="number" className="input" min={2020} max={2030}
                  value={gradYear} onChange={e => setGradYear(Number(e.target.value))} />
              </div>
            </div>
          )}

          {/* Step: Institute */}
          {step === 'institute' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Institute / College Name *</label>
                <input className="input" placeholder="e.g. LDRP Institute of Technology, NIT Surat..."
                  value={institute} onChange={e => setInstitute(e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">City *</label>
                  <input className="input" placeholder="e.g. Gandhinagar" value={city} onChange={e => setCity(e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">State</label>
                  <select className="input" value={state} onChange={e => setState(e.target.value)}>
                    {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step: Stream */}
          {step === 'stream' && (
            <div>
              <p className="text-slate-400 text-sm mb-4">Choose your GATE paper. You can only see and track your selected stream.</p>
              <div className="grid grid-cols-1 gap-2 max-h-72 overflow-y-auto pr-1">
                {ALL_STREAMS.map(stream => (
                  <button key={stream.id} onClick={() => setSelectedStream(stream.id)}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                      selectedStream === stream.id
                        ? `border-violet-500/60 bg-gradient-to-br ${stream.color} bg-opacity-10 ring-1 ring-violet-500/30`
                        : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                    }`}>
                    <span className="text-2xl leading-none">{stream.icon}</span>
                    <div>
                      <div className={`text-sm font-bold ${selectedStream === stream.id ? 'text-white' : 'text-slate-200'}`}>{stream.shortName}</div>
                      <div className="text-[11px] text-slate-400 leading-tight">{stream.name}</div>
                      <div className="text-[10px] font-mono text-slate-500 mt-0.5">GATE {stream.examCode}</div>
                    </div>
                    {selectedStream === stream.id && <CheckCircle2 className="w-4 h-4 text-violet-400 ml-auto flex-shrink-0" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step: Goal */}
          {step === 'goal' && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">GATE Target Date</label>
                <input type="date" className="input" value={targetDate} onChange={e => setTargetDate(e.target.value)} />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                  Daily Study Goal: <span className="text-amber-400">{dailyGoal}h</span>
                </label>
                <input type="range" min={1} max={16} step={0.5} value={dailyGoal}
                  onChange={e => setDailyGoal(Number(e.target.value))}
                  className="w-full accent-violet-500" />
                <div className="flex justify-between text-xs text-slate-600 font-mono mt-1">
                  <span>1h</span><span>8h</span><span>16h</span>
                </div>
              </div>
              {error && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-3">
                  {error}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex gap-3 mt-4">
          {stepIndex > 0 && (
            <button onClick={back} className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-slate-600 hover:text-slate-100 transition-all text-sm font-medium">
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
          )}
          <button
            onClick={step === 'goal' ? submit : next}
            disabled={!canNext[step] || loading}
            className="btn-primary flex-1 justify-center py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : step === 'goal' ? <CheckCircle2 className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            {step === 'goal' ? "Let's Start!" : 'Next'}
          </button>
        </div>
      </div>
    </div>
  )
}