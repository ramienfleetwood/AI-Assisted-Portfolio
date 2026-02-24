import { NextRequest, NextResponse } from 'next/server'
import { generateProjectDescription } from '@/lib/anthropic'

export async function POST(req: NextRequest) {
  try {
    const { title, technologies } = await req.json()

    if (!title || !technologies) {
      return NextResponse.json(
        { error: 'Title and technologies are required' },
        { status: 400 }
      )
    }

    const description = await generateProjectDescription(title, technologies)

    return NextResponse.json({ description })
  } catch (error) {
    console.error('Generate description error:', error)
    return NextResponse.json(
      { error: 'Failed to generate description' },
      { status: 500 }
    )
  }
}