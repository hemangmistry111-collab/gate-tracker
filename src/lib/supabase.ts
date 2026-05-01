import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type UserProfile = {
  id: string
  email: string
  full_name: string
  institute_name: string
  city: string
  state: string
  degree: string          // B.Tech, M.Tech, B.E., etc.
  graduation_year: number
  selected_stream: string // gate stream id e.g. 'cs', 'ece'
  target_date: string
  daily_goal_hours: number
  created_at: string
  updated_at: string
}
