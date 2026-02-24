import Header from '@/components/layout/Header'
import { getProjects } from '@/lib/sanity'
import ProjectCard from '@/components/ProjectCard'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-slate-100">All Projects</h1>

        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project: any) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-slate-400 mb-4">
              No projects yet. Add some projects in the Sanity Studio!
            </p>
            <a
              href="/studio"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition inline-block"
            >
              Go to Studio
            </a>
          </div>
        )}
      </main>
    </div>
  )
}
