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
  caseStudyUrl?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:shadow-slate-900/50 transition h-full">
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

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold mb-1 text-gray-900 dark:text-slate-100">{project.title}</h3>
        <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">{project.description}</p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-[10px] bg-gray-50 dark:bg-slate-700/60 text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-600 px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-4">
          <Link
            href={`/projects/${project.slug.current}`}
            className="text-sm text-blue-700 dark:text-blue-400 hover:underline"
          >
            View Details
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Case study strip — only renders when caseStudyUrl is set in Sanity */}
      {project.caseStudyUrl && (
        <Link
          href={project.caseStudyUrl}
          className="group flex items-center justify-between px-5 py-3 border-t border-blue-100 dark:border-blue-900/50 bg-blue-50/70 dark:bg-blue-950/25 hover:bg-blue-100/60 dark:hover:bg-blue-950/50 transition"
        >
          <span className="text-[10px] font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">
            Case Study
          </span>
          <span className="text-xs font-medium text-blue-700 dark:text-blue-400 group-hover:underline">
            Read →
          </span>
        </Link>
      )}
    </div>
  )
}
