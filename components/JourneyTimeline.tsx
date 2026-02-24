'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { experienceData, type ExperienceEntry } from '@/lib/experienceData'

const certifications = [
  { name: 'Certified Scrum Product Owner (CSPO)', issuer: 'Scrum Alliance' },
  { name: 'Google Data Analytics Certification', issuer: 'Google' },
  { name: 'HIPAA Security Certification', issuer: 'HIPAA Training', expires: '2028' },
  { name: 'HIPAA Awareness Certification', issuer: 'HIPAA Training', expires: '2028' },
  { name: 'Transition into UX for Healthcare', issuer: 'Maven · Eric Shumake' },
]

// ── Shared hook ──────────────────────────────────────────────────────────────
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

// ── Year band separator ───────────────────────────────────────────────────────
function YearBand({ label }: { label: string }) {
  return (
    <div className="flex items-stretch">
      {/* spine column — line only, no node */}
      <div className="flex flex-col items-center w-6 shrink-0">
        <div className="w-0.5 bg-gray-200 dark:bg-slate-700 h-full" />
      </div>
      {/* label */}
      <div className="flex items-center gap-3 flex-1 pl-5 py-2">
        <span className="shrink-0 text-[10px] font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">
          {label}
        </span>
        <div className="flex-1 h-px bg-gray-100 dark:bg-slate-800" />
      </div>
    </div>
  )
}

// ── Experience accordion entry ────────────────────────────────────────────────
interface EntryProps {
  entry: ExperienceEntry
  isOpen: boolean
  onToggle: () => void
  isLast: boolean
}

function TimelineEntry({ entry, isOpen, onToggle, isLast }: EntryProps) {
  const { ref, visible } = useReveal()
  const headerId = `exp-header-${entry.id}`
  const panelId  = `exp-panel-${entry.id}`

  return (
    <div ref={ref} className="flex items-stretch">
      {/* spine column */}
      <div className="flex flex-col items-center w-6 shrink-0">
        {/* node — pops in with a spring bounce */}
        <div
          className="w-3 h-3 rounded-full bg-blue-700 dark:bg-blue-500 border-2 border-white dark:border-slate-950 shadow-sm mt-2 z-10 shrink-0"
          style={{
            transform: visible ? 'scale(1)' : 'scale(0)',
            transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        />
        {!isLast && (
          <div className="w-0.5 bg-gray-200 dark:bg-slate-700 flex-1 mt-0.5" />
        )}
      </div>

      {/* content — fades + slides in after node */}
      <div
        className="flex-1 pl-5 pb-6"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(14px)',
          transition: 'opacity 0.5s ease 90ms, transform 0.5s ease 90ms',
        }}
      >
        <button
          id={headerId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-4 text-left group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 dark:focus-visible:ring-blue-400 pb-0.5"
        >
          <span>
            <span className="block font-semibold text-gray-900 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
              {entry.company}
            </span>
            <span className="block text-sm text-gray-500 dark:text-slate-500">
              {entry.industry}
            </span>
          </span>
          <ChevronDown
            size={16}
            aria-hidden="true"
            className="shrink-0 text-gray-400 dark:text-slate-500 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-[color,transform] duration-300 ease-in-out"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </button>

        {/* accordion panel */}
        <div
          id={panelId}
          role="region"
          aria-labelledby={headerId}
          className="grid transition-[grid-template-rows] duration-300 ease-in-out"
          style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
            <div className="pt-3 pb-1">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-400 mb-0.5">
                {entry.title}
              </p>
              <p className="text-xs text-gray-400 dark:text-slate-500 tabular-nums mb-3">
                {entry.dateRange}
              </p>
              <ul className="space-y-1.5">
                {entry.duties.map((duty, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-slate-300 leading-snug">
                    <span aria-hidden="true" className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-700 dark:bg-blue-500" />
                    {duty}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Credential item ───────────────────────────────────────────────────────────
function CredentialItem({ name, issuer, expires, isLast }: { name: string; issuer: string; expires?: string; isLast: boolean }) {
  const { ref, visible } = useReveal(0.2)

  return (
    <div ref={ref} className="flex items-stretch">
      {/* spine column */}
      <div className="flex flex-col items-center w-6 shrink-0">
        {/* square node — different shape to distinguish from experience */}
        <div
          className="w-3 h-3 rounded-sm bg-gray-400 dark:bg-slate-500 border-2 border-white dark:border-slate-950 mt-2 z-10 shrink-0"
          style={{
            transform: visible ? 'scale(1)' : 'scale(0)',
            transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        />
        {!isLast && (
          <div className="w-0.5 bg-gray-200 dark:bg-slate-700 flex-1 mt-0.5" />
        )}
      </div>

      {/* content */}
      <div
        className="flex-1 pl-5 pb-5"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(14px)',
          transition: 'opacity 0.5s ease 90ms, transform 0.5s ease 90ms',
        }}
      >
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-sm font-semibold text-gray-900 dark:text-slate-100">{name}</p>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400">
              <span className="w-1 h-1 rounded-full bg-green-500" aria-hidden="true" />
              Active
            </span>
          {expires && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400">
              <span className="w-1 h-1 rounded-full bg-amber-500" aria-hidden="true" />
              Expires {expires}
            </span>
          )}
        </div>
        <p className="text-xs text-gray-400 dark:text-slate-500 mt-0.5">{issuer}</p>
      </div>
    </div>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function JourneyTimeline() {
  const [openIds, setOpenIds] = useState<Set<number>>(new Set())

  const toggle = (id: number) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div>
      {/* Experience entries — each preceded by its year band */}
      {experienceData.map((entry) => (
        <div key={entry.id}>
          <YearBand label={entry.dateRange} />
          <TimelineEntry
            entry={entry}
            isOpen={openIds.has(entry.id)}
            onToggle={() => toggle(entry.id)}
            isLast={false}
          />
        </div>
      ))}

      {/* Credentials section */}
      <YearBand label="Credentials" />
      {certifications.map((cert, i) => (
        <CredentialItem
          key={cert.name}
          name={cert.name}
          issuer={cert.issuer}
          expires={cert.expires}
          isLast={i === certifications.length - 1}
        />
      ))}
    </div>
  )
}
