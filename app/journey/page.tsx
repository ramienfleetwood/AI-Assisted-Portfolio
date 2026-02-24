import Header from '@/components/layout/Header'
import JourneyTimeline from '@/components/JourneyTimeline'
import Link from 'next/link'

export default function JourneyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-slate-100">My Journey</h1>
        <p className="text-gray-500 dark:text-slate-500 mb-12 text-sm">
          A look at my professional experience and credentials.
        </p>

        <JourneyTimeline />

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-blue-100 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 rounded-xl px-6 py-5 mt-10">
          <div>
            <p className="font-semibold text-gray-900 dark:text-slate-100 text-sm">
              Want to know more?
            </p>
            <p className="text-xs text-gray-500 dark:text-slate-500 mt-0.5">
              The AI assistant is briefed on my background and can answer specific questions.
            </p>
          </div>
          <Link
            href="/ai-chat"
            className="shrink-0 text-sm bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition font-medium"
          >
            Chat with AI →
          </Link>
        </div>
      </main>
    </div>
  )
}
