'use client'

import { useState, useRef, useEffect } from 'react'

type Message = { role: 'user' | 'assistant'; content: string }

export default function AIChat({ portfolioContext }: { portfolioContext?: string }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const handleSend = async () => {
    if (!input.trim() || loading) return

    const userMessage: Message = { role: 'user', content: input }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages, portfolioContext }),
      })

      const data = await response.json()

      if (!response.ok || !data.response) {
        throw new Error(data.error || 'No response received')
      }

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.response },
      ])
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong.'
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: `Error: ${message}` },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-[600px] border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
      {/* Header — blue-700 ensures white text passes WCAG AA (6.4:1) */}
      <div className="bg-blue-700 dark:bg-blue-800 text-white p-4">
        <h2 className="text-xl font-bold">AI Portfolio Assistant</h2>
        <p className="text-sm text-blue-100">Ask me anything about Ramien's work and experience</p>
      </div>

      {/* Message list */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-slate-900">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 dark:text-slate-400 mt-8 space-y-2">
            <p className="font-medium text-gray-700 dark:text-slate-300">Not sure where to start? Try asking:</p>
            <ul className="text-sm space-y-1">
              <li>"What projects has Ramien built?"</li>
              <li>"What is Ramien's background in healthcare?"</li>
              <li>"What technologies does Ramien work with?"</li>
            </ul>
          </div>
        )}

        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] p-3 rounded-lg text-sm leading-relaxed whitespace-pre-wrap ${
                message.role === 'user'
                  ? 'bg-blue-700 text-white rounded-br-none'
                  : 'bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 border border-gray-200 dark:border-slate-700 rounded-bl-none shadow-sm'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-500 dark:text-slate-400 p-3 rounded-lg rounded-bl-none shadow-sm text-sm">
              <span className="animate-pulse">Thinking...</span>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input bar */}
      <div className="border-t border-gray-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-900">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
            placeholder="Ask about projects, experience, skills..."
            className="flex-1 border border-gray-300 dark:border-slate-600 rounded-lg px-4 py-2 text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500"
            disabled={loading}
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="bg-blue-700 text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-800 disabled:bg-gray-300 dark:disabled:bg-slate-700 disabled:cursor-not-allowed transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
