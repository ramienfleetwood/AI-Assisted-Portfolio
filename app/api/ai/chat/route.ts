import { NextRequest, NextResponse } from 'next/server'
import { generateChatResponse, type ChatMessage } from '@/lib/anthropic'

export async function POST(req: NextRequest) {
  try {
    const { messages, portfolioContext } = await req.json()

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages are required' }, { status: 400 })
    }

    const response = await generateChatResponse(messages as ChatMessage[], portfolioContext)

    return NextResponse.json({ response })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error)
    console.error('[AI chat error]', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
