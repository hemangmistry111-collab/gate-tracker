'use client'
import { useEffect, useRef } from 'react'
import { useAuth } from '@/lib/auth-context'
import { useAppStore } from '@/lib/store'

// Loads user data from DB on login, and auto-saves every 30s
export default function DbSync() {
  const { user, profile } = useAuth()
  const { loadFromDb, syncToDb } = useAppStore()
  const loaded = useRef(false)
  const syncTimer = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (user && profile && !loaded.current) {
      loaded.current = true
      loadFromDb(user.id, {
        selected_stream: profile.selected_stream,
        target_date: profile.target_date,
        daily_goal_hours: profile.daily_goal_hours,
        full_name: profile.full_name,
      })
    }
    if (!user) loaded.current = false
  }, [user, profile])

  // Auto-sync to DB every 30 seconds
  useEffect(() => {
    if (!user) return
    syncTimer.current = setInterval(() => {
      syncToDb(user.id)
    }, 30000)
    return () => clearInterval(syncTimer.current)
  }, [user])

  // Sync on page unload
  useEffect(() => {
    if (!user) return
    const handleUnload = () => syncToDb(user.id)
    window.addEventListener('beforeunload', handleUnload)
    return () => window.removeEventListener('beforeunload', handleUnload)
  }, [user])

  return null
}
