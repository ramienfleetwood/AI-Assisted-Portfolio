import Header from '@/components/layout/Header'
import AIChat from '@/components/AIChat'
import { getProjects } from '@/lib/sanity'

export default async function AIChatPage() {
  const projects = await getProjects()

  const portfolioContext = projects.length > 0
    ? `Here are Ramien's current projects:\n${projects
        .map((p: any) =>
          `- ${p.title}${p.description ? `: ${p.description}` : ''}${
            p.technologies?.length ? ` (${p.technologies.join(', ')})` : ''
          }${p.liveUrl ? ` — Live: ${p.liveUrl}` : ''}${p.githubUrl ? ` — GitHub: ${p.githubUrl}` : ''}`
        )
        .join('\n')}`
    : undefined

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-slate-100">Ask About My Work</h1>
          <p className="text-gray-600 dark:text-slate-400 mb-8">
            Chat with an AI assistant that knows Ramien's projects, background, and experience.
            Ask anything — from specific project details to skills and career history.
          </p>

          <AIChat portfolioContext={portfolioContext} />
        </div>
      </main>
    </div>
  )
}
