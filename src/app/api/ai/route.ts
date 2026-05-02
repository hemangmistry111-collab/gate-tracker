import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(req: NextRequest) {
  try {
    const { messages, system } = await req.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages' }, { status: 400 })
    }

    const response = await client.messages.create({
      model: 'claude-sonnet-4-5',   // FIX: was 'claude-sonnet-4-20250514' (invalid model string)
      max_tokens: 1500,
      system: system || 'You are a helpful GATE exam preparation assistant.',
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })),
    })

    return NextResponse.json(response)
  } catch (error: any) {
    console.error('AI API error:', error)
    return NextResponse.json(
      { error: error?.message || 'Failed to get AI response' },
      { status: 500 }
    )
  }
}