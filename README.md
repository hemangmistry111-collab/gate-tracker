# 🎯 GATE Tracker — AI-Powered GATE Exam Preparation

> A full-stack, production-ready GATE preparation tracker built with **Next.js 14**, **Tailwind CSS**, and **Claude AI**. Track every topic across all GATE streams, get personalized AI mentorship, and analyze your progress with charts.

![GATE Tracker](https://img.shields.io/badge/GATE-Tracker-violet?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwindcss)
![Claude AI](https://img.shields.io/badge/Claude-AI-orange?style=for-the-badge)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏫 **10+ GATE Streams** | CS/IT, ECE, EE, ME, CE, BT, DA, AE, CH, PH and more |
| 📚 **Complete Syllabus** | Every subject and topic for each stream (500+ topics) |
| 🤖 **AI Mentor** | Powered by Claude — personalized study plans, concept explanations, GATE-level MCQs |
| 📊 **Analytics** | Progress charts, radar diagrams, difficulty distribution, study hour heatmaps |
| 📅 **Smart Scheduler** | AI-recommended priority subjects based on weightage and progress |
| 🔥 **Streak Tracking** | Daily study hour logging with streak and heatmap visualization |
| 📝 **Topic Notes** | Save formulas and notes for any topic |
| 💾 **Local Storage** | No account needed — all data persists in your browser |
| 🌙 **Dark Theme** | Beautiful dark UI built for late-night study sessions |

---

## 🗂️ Project Structure

```
gate-tracker/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── layout.tsx                # Root layout with fonts
│   │   ├── globals.css               # Global styles + Tailwind
│   │   ├── page.tsx                  # Landing page
│   │   ├── dashboard/
│   │   │   └── page.tsx              # Main dashboard
│   │   ├── courses/
│   │   │   ├── page.tsx              # All streams listing
│   │   │   └── [streamId]/
│   │   │       ├── page.tsx          # Stream detail (all subjects)
│   │   │       └── [subjectId]/
│   │   │           └── page.tsx      # Subject detail (all topics + toggle)
│   │   ├── schedule/
│   │   │   └── page.tsx              # Study hour logger + schedule
│   │   ├── analysis/
│   │   │   └── page.tsx              # Charts & analytics
│   │   ├── ai-mentor/
│   │   │   └── page.tsx              # AI chat interface
│   │   ├── settings/
│   │   │   └── page.tsx              # User preferences
│   │   └── api/
│   │       └── ai/
│   │           └── route.ts          # Server-side Anthropic API call
│   ├── components/
│   │   └── layout/
│   │       ├── AppShell.tsx          # Sidebar + header wrapper
│   │       ├── Sidebar.tsx           # Navigation + stream switcher
│   │       └── Header.tsx            # Top bar with breadcrumbs
│   ├── data/
│   │   ├── cs/subjects.ts            # CS/IT — 12 subjects, 130+ topics
│   │   ├── ece/subjects.ts           # ECE — 9 subjects, 100+ topics
│   │   └── streams/
│   │       ├── other-subjects.ts     # EE, ME, CE, BT, DA subjects
│   │       └── index.ts              # All streams registry
│   ├── lib/
│   │   ├── store.ts                  # Zustand global state (persisted)
│   │   └── utils.ts                  # Helper functions
│   └── types/
│       └── index.ts                  # TypeScript type definitions
├── public/                           # Static assets
├── .env.local.example                # Environment variables template
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- An [Anthropic API key](https://console.anthropic.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/gate-tracker.git
cd gate-tracker

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local and add your Anthropic API key:
# ANTHROPIC_API_KEY=sk-ant-...

# 4. Start the development server
npm run dev

# 5. Open http://localhost:3000
```

---

## 🌊 GATE Streams Covered

| Stream | Code | Subjects | Topics |
|---|---|---|---|
| Computer Science & IT | CS | 12 | 135+ |
| Electronics & Communication | ECE | 9 | 95+ |
| Electrical Engineering | EE | 11 | 85+ |
| Mechanical Engineering | ME | 9 | 80+ |
| Civil Engineering | CE | 10 | 75+ |
| Biotechnology | BT | 8 | 65+ |
| Data Science & AI | DA | 7 | 60+ |
| Biomedical Engineering | BM | 6 | 20+ |
| Aerospace Engineering | AE | 6 | 15+ |
| Chemical Engineering | CH | 6 | 15+ |
| Physics | PH | 6 | 15+ |

---

## 🤖 AI Mentor Capabilities

The AI Mentor (powered by Claude) knows your **exact progress** and can:

- 🎯 Analyze your weak areas and create a personalized study plan
- 📖 Explain GATE concepts with examples tailored to your stream
- ❓ Generate GATE-level practice MCQs with detailed solutions
- 📅 Build 30-day or 60-day revision schedules
- 💡 Share memory tricks, formulas and exam strategies
- ⚠️ Warn about common GATE traps and mistakes

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Full-stack React framework |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Zustand + Persist | Global state + localStorage |
| Recharts | Analytics charts |
| Anthropic Claude API | AI Mentor backend |
| Lucide React | Icons |
| Framer Motion | Animations |

---

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variable in Vercel dashboard:
# ANTHROPIC_API_KEY = your_key_here
```

### Environment Variables

| Variable | Required | Description |
|---|---|---|
| `ANTHROPIC_API_KEY` | ✅ Yes | Your Anthropic API key for AI Mentor |
| `NEXT_PUBLIC_APP_URL` | No | Your deployed app URL |

---

## 🔐 Privacy

- All study progress is stored **locally in your browser** (localStorage via Zustand persist)
- No user account or database required
- AI chat messages are sent to Anthropic's API but not stored on any server
- No analytics or tracking

---

## 🤝 Contributing

Contributions are welcome! Ideas for improvement:

- [ ] Add more GATE streams (IN, GE, AG, MN, MT, NM, PE, ST, TF, XH)
- [ ] Previous Year Questions (PYQ) integration
- [ ] Pomodoro timer
- [ ] Export progress as PDF report
- [ ] Community leaderboard
- [ ] GATE score predictor

```bash
# Fork and clone
git checkout -b feature/your-feature
npm run dev
# Make changes, test
git commit -m "feat: your feature"
git push origin feature/your-feature
# Open a Pull Request
```

---

## 📄 License

MIT License — free to use, modify and distribute.

---

## 🙏 Acknowledgements

- [Anthropic](https://anthropic.com) — Claude AI API
- [GATE IIT](https://gate2026.iitr.ac.in/) — Official GATE syllabus
- [Next.js](https://nextjs.org) — React framework
- All GATE aspirants who inspired this project 🔥

---

<div align="center">
  <strong>Built with ❤️ for GATE Aspirants</strong>
  <br/>
  <sub>Star ⭐ this repo if it helped you in your GATE preparation!</sub>
</div>
