-- ============================================================
-- GATE Tracker — Supabase Database Schema
-- Run this in: Supabase Dashboard > SQL Editor > New Query
-- ============================================================

-- 1. Profiles table (one row per user)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text not null default '',
  institute_name text default '',
  city text default '',
  state text default 'Gujarat',
  degree text default 'B.Tech',
  graduation_year int default 2025,
  selected_stream text default 'cs',   -- gate stream id: cs, ece, me, etc.
  target_date date default '2026-02-01',
  daily_goal_hours numeric default 6,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 2. User progress table (one row per user, stores all progress as JSON)
create table if not exists public.user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade unique,
  completed_topics jsonb default '{}'::jsonb,   -- { topicId: true/false }
  topic_notes jsonb default '{}'::jsonb,         -- { topicId: "note text" }
  study_hours jsonb default '{}'::jsonb,          -- { "YYYY-MM-DD": hours }
  updated_at timestamptz default now()
);

-- 3. Row Level Security (RLS) — users can only see/edit their own data
alter table public.profiles enable row level security;
alter table public.user_progress enable row level security;

-- Profiles RLS policies
create policy "Users can view own profile"
  on public.profiles for select using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert with check (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);

-- User progress RLS policies
create policy "Users can view own progress"
  on public.user_progress for select using (auth.uid() = user_id);

create policy "Users can insert own progress"
  on public.user_progress for insert with check (auth.uid() = user_id);

create policy "Users can update own progress"
  on public.user_progress for update using (auth.uid() = user_id);

-- 4. Auto-create a profile row when a new user signs up
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Done! ✓
