import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/lib/auth-context'
import AuthGate from '@/components/auth/AuthGate'
import DbSync from '@/components/auth/DbSync'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['300', '400', '500', '600', '700'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'GATE Tracker — AI-Powered GATE Preparation',
  description: 'Track your GATE preparation across CS, ECE, EE, ME, CE, BT, DA and more.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${sora.variable} ${spaceMono.variable} font-sans bg-slate-950 text-slate-100 antialiased`}>
        <AuthProvider>
          <AuthGate>
            <DbSync />
            {children}
          </AuthGate>
        </AuthProvider>
      </body>
    </html>
  )
}
