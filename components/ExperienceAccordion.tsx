'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { experienceData, type ExperienceEntry } from '@/lib/experienceData'

export default function ExperienceAccordion() {
  const [openIds, setOpenIds] = useState<Set<number>>(new Set())

  const toggle = (id: number) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div className="space-y-3">
      {experienceData.map((entry) => (
        <AccordionItem
          key={entry.id}
          entry={entry}
          isOpen={openIds.has(entry.id)}
          onToggle={() => toggle(entry.id)}
        />
      ))}
    </div>
  )
}

interface AccordionItemProps {
  entry: ExperienceEntry
  isOpen: boolean
  onToggle: () => void
}

function AccordionItem({ entry, isOpen, onToggle }: AccordionItemProps) {
  const headerId = `exp-header-${entry.id}`
  const panelId = `exp-panel-${entry.id}`

  return (
    <div className="border-l-4 border-blue-700 dark:border-blue-500 pl-4">

      {/* Trigger button */}
      <button
        id={headerId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left py-1 group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 dark:focus-visible:ring-blue-400"
      >
        <span>
          <span className="block font-semibold text-lg text-gray-900 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
            {entry.company}
          </span>
          <span className="block text-sm text-gray-600 dark:text-slate-400">
            {entry.industry}
          </span>
        </span>

        <ChevronDown
          size={18}
          aria-hidden="true"
          className="shrink-0 text-gray-500 dark:text-slate-400 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-[color,transform] duration-300 ease-in-out"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {/* Expandable panel — CSS grid-rows trick for smooth height animation */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        {/* overflow-hidden on this div is required — it clips content when grid row = 0fr */}
        <div className="overflow-hidden">
          <div className="pt-2 pb-4">
            <p className="text-sm font-medium text-blue-700 dark:text-blue-400 mb-0.5">
              {entry.title}
            </p>
            <p className="text-xs text-gray-500 dark:text-slate-500 mb-3 tabular-nums">
              {entry.dateRange}
            </p>
            <ul className="space-y-1.5">
              {entry.duties.map((duty, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-slate-300 leading-snug">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-700 dark:bg-blue-500"
                  />
                  {duty}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
