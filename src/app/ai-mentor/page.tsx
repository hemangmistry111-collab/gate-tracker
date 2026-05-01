'use client'
import { useState, useRef, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import AppShell from '@/components/layout/AppShell'
import { useAppStore } from '@/lib/store'
import { ALL_STREAMS } from '@/data/streams'
import { buildProgressContext } from '@/lib/utils'
import { Brain, Send, Trash2, Sparkles, User, Bot } from 'lucide-react'
import type { ChatMessage } from '@/types'

const QUICK_PROMPTS = [
  'Analyze my current progress and tell me exactly what to focus on this week',
  'Which subjects are my weakest? Create a detailed 7-day plan to fix them',
  'Give me 5 GATE-level MCQ questions on my weakest subject with solutions',
  'Create an optimal 30-day GATE revision schedule based on my progress',
  'Explain the most important topics I haven\'t covered yet with a roadmap',
  'What are common GATE traps and mistakes students make in my stream?',
  'How should I divide my daily 6 hours of study across subjects?',
  'Give me memory tricks and shortcuts for important formulas',
]

function AIMentorContent() {
  const searchParams = useSearchParams()
  const subjectHint = searchParams.get('subject')
  const streamHint = searchParams.get('stream')

  const { activeStream, chatHistory, addChatMessage, clearChatHistory, completedTopics } = useAppStore()
  const stream = ALL_STREAMS.find(s => s.id === activeStream)!
  const messages = chatHistory[activeStream] || []

  const [input, setInput] = useState(subjectHint ? `Explain key GATE topics in ${subjectHint} for ${streamHint} that I haven't studied yet` : '')
  const [loading, setLoading] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const buildSystemPrompt = () => {
    const ctx = buildProgressContext(activeStream, stream.subjects, completedTopics)
    return `You are an expert GATE exam mentor specializing in ${stream.name} (GATE ${stream.examCode}).

The student's current progress:
${ctx}

Your responsibilities:
1. Analyze their exact progress and give hyper-specific, actionable advice
2. Explain GATE topics clearly with examples relevant to GATE exam pattern
3. Create practice questions at GATE difficulty with detailed solutions
4. Build personalized study plans based on their actual weak areas
5. Share exam strategies, time management tips and important formulas
6. Motivate and encourage the student toward their GATE goals

Format your responses well — use bullet points, numbered lists, and code blocks where needed. Be specific, not generic. Reference the student's actual completed and pending topics when giving advice.`
  }

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return
    setInput('')
    setLoading(true)

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text.trim(),
      timestamp: new Date().toISOString(),
    }
    addChatMessage(activeStream, userMsg)

    try {
      const history = [...(chatHistory[activeStream] || []), userMsg]
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: history.map(m => ({ role: m.role, content: m.content })),
          system: buildSystemPrompt(),
        }),
      })

      if (!res.ok) throw new Error('API error')
      const data = await res.json()
      const reply = data.content?.[0]?.text || 'Sorry, I could not generate a response. Please try again.'

      addChatMessage(activeStream, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: reply,
        timestamp: new Date().toISOString(),
      })
    } catch (err) {
      addChatMessage(activeStream, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '⚠️ Could not connect to AI. Make sure your `ANTHROPIC_API_KEY` is set in `.env.local` and the server is running.',
        timestamp: new Date().toISOString(),
      })
    } finally {
      setLoading(false)
      inputRef.current?.focus()
    }
  }

  const formatMessage = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-slate-700 text-cyan-300 px-1 rounded text-xs font-mono">$1</code>')
      .replace(/\n\n/g, '<br/><br/>')
      .replace(/\n/g, '<br/>')
      .replace(/^(\d+\.\s)/gm, '<br/>$1')
      .replace(/^(•\s)/gm, '<br/>$1')
  }

  return (
    <AppShell>
      <div className="max-w-4xl mx-auto h-full flex flex-col animate-fade-in" style={{ height: 'calc(100vh - 3.5rem - 3rem)' }}>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center shadow-lg shadow-violet-500/20">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-slate-100">AI Mentor</h1>
              <div className="text-xs text-slate-500">
                {stream.icon} {stream.shortName} · Powered by Claude
              </div>
            </div>
          </div>
          {messages.length > 0 && (
            <button
              onClick={() => clearChatHistory(activeStream)}
              className="btn-ghost text-rose-400 hover:text-rose-300 text-xs"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear chat
            </button>
          )}
        </div>

        {/* Chat area */}
        <div className="card flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {/* Welcome */}
            {messages.length === 0 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600/20 to-purple-600/10 border border-violet-500/20 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-7 h-7 text-violet-400" />
                </div>
                <h2 className="font-bold text-slate-200 mb-2">GATE AI Mentor</h2>
                <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                  I know your exact progress in {stream.shortName}. Ask me anything — study plans, concept explanations, practice questions, weak area analysis, or exam strategies.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl mx-auto">
                  {QUICK_PROMPTS.slice(0, 4).map((p, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(p)}
                      className="text-left p-3 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-violet-500/40 hover:bg-slate-800 text-xs text-slate-400 hover:text-slate-200 transition-all"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            {messages.map(msg => (
              <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'assistant'
                    ? 'bg-gradient-to-br from-violet-600 to-purple-700'
                    : 'bg-slate-700 border border-slate-600'
                }`}>
                  {msg.role === 'assistant'
                    ? <Bot className="w-4 h-4 text-white" />
                    : <User className="w-4 h-4 text-slate-300" />
                  }
                </div>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-violet-600/20 border border-violet-500/30 text-slate-200 rounded-tr-sm'
                    : 'bg-slate-800 border border-slate-700 text-slate-200 rounded-tl-sm'
                }`}>
                  <div
                    dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }}
                    className="prose prose-sm prose-invert max-w-none [&>strong]:text-white [&>em]:text-violet-300"
                  />
                  <div className="text-[10px] text-slate-600 mt-2 font-mono">
                    {new Date(msg.timestamp).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="typing-dot" />
                    <div className="typing-dot" />
                    <div className="typing-dot" />
                  </div>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick prompts (if has messages) */}
          {messages.length > 0 && (
            <div className="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-none">
              {QUICK_PROMPTS.slice(4).map((p, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(p)}
                  className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-slate-200 hover:border-violet-500/40 transition-all"
                >
                  {p.slice(0, 40)}...
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-slate-800 flex gap-3">
            <input
              ref={inputRef}
              className="input flex-1"
              placeholder={`Ask about ${stream.shortName} topics, study plans, practice questions...`}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage(input)}
              disabled={loading}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={loading || !input.trim()}
              className="btn-primary px-4"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  )
}

export default function AIMentorPage() {
  return (
    <Suspense fallback={<div className="p-8 text-slate-400">Loading...</div>}>
      <AIMentorContent />
    </Suspense>
  )
}
