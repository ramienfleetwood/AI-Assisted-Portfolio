'use client'

import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

interface Project {
  _id: string
  title: string
  slug: { current: string }
  description: string
  mainImage?: any
  technologies?: string[]
  githubUrl?: string
  liveUrl?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:shadow-slate-900/50 transition">
      {project.mainImage && (
        <div className="relative h-48 w-full">
          <Image
            src={urlFor(project.mainImage).width(600).height(400).url()}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-slate-100">{project.title}</h3>
        <p className="text-gray-600 dark:text-slate-400 mb-4">{project.description}</p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-4">
          <Link
            href={`/projects/${project.slug.current}`}
            className="text-blue-700 dark:text-blue-400 hover:underline"
          >
            View Details
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
