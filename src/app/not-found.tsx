import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl font-mono font-black text-slate-800 mb-4">404</div>
        <h1 className="text-2xl font-bold text-slate-200 mb-2">Page Not Found</h1>
        <p className="text-slate-400 mb-8">This page doesn't exist. Let's get you back on track.</p>
        <Link href="/dashboard" className="btn-primary">Go to Dashboard</Link>
      </div>
    </div>
  )
}
