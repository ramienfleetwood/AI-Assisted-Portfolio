import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import { getProjectBySlug, urlFor } from '@/lib/sanity'
import { PortableText, type PortableTextComponents } from '@portabletext/react'

// Renders image blocks embedded inside the project content (screenshots, wireframes, etc.)
const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <figure className="my-8">
          <div className="relative w-full overflow-hidden rounded-lg border border-gray-100 dark:border-slate-800">
            <Image
              src={urlFor(value).width(1200).url()}
              alt={value.alt ?? ''}
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>
          {value.alt && (
            <figcaption className="mt-2 text-center text-xs text-gray-500 dark:text-slate-500">
              {value.alt}
            </figcaption>
          )}
        </figure>
      )
    },
  },
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/projects"
          className="text-blue-700 dark:text-blue-400 hover:underline mb-8 inline-block"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-slate-100">{project.title}</h1>

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {project.mainImage && (
          <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={urlFor(project.mainImage).width(1200).height(600).url()}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <p className="text-lg text-gray-700 dark:text-slate-300 mb-8">{project.description}</p>

        <div className="flex gap-4 mb-12">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 dark:bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-gray-900 dark:hover:bg-slate-600 transition"
            >
              View on GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Live Demo
            </a>
          )}
        </div>

        {project.content && (
          <div className="text-gray-800 dark:text-slate-200 leading-relaxed">
            <PortableText value={project.content} components={portableTextComponents} />
          </div>
        )}
      </main>
    </div>
  )
}
