'use client'
import { useAuth } from '@/lib/auth-context'
import AuthPage from '@/components/auth/AuthPage'
import OnboardingPage from '@/components/auth/OnboardingPage'
import { Loader2 } from 'lucide-react'

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const { user, profile, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center font-mono font-bold text-lg text-white">
            GT
          </div>
          <Loader2 className="w-5 h-5 animate-spin text-violet-400" />
        </div>
      </div>
    )
  }

  if (!user) return <AuthPage />
  if (!profile || !profile.full_name || !profile.full_name.trim()) return <OnboardingPage />

  return <>{children}</>
}