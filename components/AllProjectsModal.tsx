'use client'

import { useState, useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'

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

export default function AllProjectsModal({ projects }: { projects: Project[] }) {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-sm text-blue-700 dark:text-blue-400 hover:underline shrink-0"
      >
        View all →
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="All Projects"
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Scroll wrapper — min-h-full ensures content below viewport stays reachable */}
          <div className="flex min-h-full items-start justify-center px-4 py-10">

          {/* Panel */}
          <div
            ref={panelRef}
            tabIndex={-1}
            className="relative z-10 w-full max-w-5xl bg-white dark:bg-slate-950 rounded-2xl shadow-2xl outline-none"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-slate-800">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-slate-100">All Projects</h2>
                <p className="text-sm text-gray-500 dark:text-slate-500 mt-0.5">
                  {projects.length} project{projects.length !== 1 ? 's' : ''}
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:text-slate-500 dark:hover:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-6">
              {projects.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {projects.map((project) => (
                    <ProjectCard key={project._id} project={project} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 dark:text-slate-500 text-sm py-10">
                  No projects yet.
                </p>
              )}
            </div>
          </div>
          </div>
        </div>
      )}
    </>
  )
}
