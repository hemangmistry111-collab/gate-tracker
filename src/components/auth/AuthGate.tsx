'use client'
import { useAuth } from '@/lib/auth-context'
import { usePathname } from 'next/navigation'
import AuthPage from '@/components/auth/AuthPage'
import OnboardingPage from '@/components/auth/OnboardingPage'
import DbSync from '@/components/auth/DbSync'
import { Loader2 } from 'lucide-react'

// Pages that don't require login
const PUBLIC_PATHS = ['/']

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const { user, profile, loading } = useAuth()
  const pathname = usePathname()

  const isPublic = PUBLIC_PATHS.includes(pathname)

  // FIX: Home page should NEVER be blocked by the loading spinner.
  // Show it immediately — the navbar handles its own auth state display.
  if (isPublic) return <>{children}</>

  // For protected pages only: show spinner while auth resolves
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

  // Protected pages: require login
  if (!user) return <AuthPage />

  // Require onboarding if name not filled
  if (!profile || !profile.full_name || !profile.full_name.trim()) return <OnboardingPage />

  // FIX: DbSync only mounts for fully authenticated + onboarded users,
  // eliminating the data race where it could fire before auth was ready
  return (
    <>
      <DbSync />
      {children}
    </>
  )
}