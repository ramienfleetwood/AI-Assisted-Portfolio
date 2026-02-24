'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface Skill {
  name: string
  level: number // 0–100
}

interface Competency {
  category: string
  skills: Skill[]
}

const competencies: Competency[] = [
  {
    category: 'Product & Strategy',
    skills: [
      { name: 'Product Management',        level: 95 },
      { name: 'Scrum / Agile',             level: 92 },
      { name: 'Business Analysis',         level: 88 },
      { name: 'Value-Driven Prioritization', level: 88 },
      { name: 'Confluence',                level: 88 },
      { name: 'Jira',                      level: 85 },
    ],
  },
  {
    category: 'Healthcare Domain',
    skills: [
      { name: 'EHR / EMR Systems',         level: 95 },
      { name: 'Healthcare IT',             level: 92 },
      { name: 'Healthcare Operations',     level: 88 },
      { name: 'Clinical Workflow Design',  level: 88 },
    ],
  },
  {
    category: 'Leadership & Communication',
    skills: [
      { name: 'Strategic Problem Solving', level: 95 },
      { name: 'Microsoft & G Suite',       level: 95 },
      { name: 'Cross-Functional Communication', level: 88 },
      { name: 'CRM Systems',               level: 88 },
      { name: 'Storyboarding (Figma / Miro)', level: 85 },
    ],
  },
  {
    category: 'Data & Analytics',
    skills: [
      { name: 'Data Visualization (Power BI / Excel)', level: 88 },
      { name: 'Data Analytics',            level: 82 },
      { name: 'SQL',                       level: 80 },
      { name: 'Databricks',               level: 80 },
    ],
  },
  {
    category: 'AI & Automation',
    skills: [
      { name: 'AI / ML Integration',       level: 80 },
      { name: 'Automation',                level: 78 },
    ],
  },
  {
    category: 'Front End',
    skills: [
      { name: 'React',                     level: 72 },
      { name: 'Next.js',                   level: 68 },
      { name: 'TypeScript',                level: 68 },
      { name: 'Tailwind CSS',              level: 68 },
    ],
  },
  {
    category: 'Back End & Tooling',
    skills: [
      { name: 'API Development',           level: 76 },
      { name: 'Python',                    level: 72 },
      { name: 'Postman',                   level: 68 },
      { name: 'TestRail',                  level: 68 },
    ],
  },
  {
    category: 'Cloud Platforms',
    skills: [
      { name: 'AWS',                       level: 68 },
      { name: 'Azure',                     level: 68 },
      { name: 'GCP',                       level: 68 },
    ],
  },
]

function levelLabel(n: number) {
  if (n >= 92) return 'Expert'
  if (n >= 84) return 'Highly Proficient'
  if (n >= 74) return 'Proficient'
  if (n >= 58) return 'Competent'
  return 'Familiar'
}

export default function SkillBars() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())

  const toggle = (category: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      next.has(category) ? next.delete(category) : next.add(category)
      return next
    })
  }

  return (
    <div className="space-y-3">
      {competencies.map((comp) => {
        const isOpen = openIds.has(comp.category)
        const headerId = `skill-header-${comp.category.replace(/[\s&/()]+/g, '-').toLowerCase()}`
        const panelId  = `skill-panel-${comp.category.replace(/[\s&/()]+/g, '-').toLowerCase()}`

        return (
          <div key={comp.category} className="border-l-4 border-blue-700 dark:border-blue-500 pl-4">

            {/* Trigger */}
            <button
              id={headerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(comp.category)}
              className="w-full flex items-center justify-between gap-4 text-left py-1 group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 dark:focus-visible:ring-blue-400"
            >
              <span>
                <span className="block font-semibold text-lg text-gray-900 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                  {comp.category}
                </span>
                <span className="block text-sm text-gray-500 dark:text-slate-500">
                  {comp.skills.length} {comp.skills.length === 1 ? 'skill' : 'skills'}
                </span>
              </span>

              <ChevronDown
                size={18}
                aria-hidden="true"
                className="shrink-0 text-gray-500 dark:text-slate-400 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-[color,transform] duration-300 ease-in-out"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>

            {/* Expandable panel */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className="grid transition-[grid-template-rows] duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div className="space-y-3 pt-3 pb-4">
                  {comp.skills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-baseline mb-1.5">
                        <span className="text-sm text-gray-800 dark:text-slate-200">{skill.name}</span>
                        <span className="text-[10px] font-medium text-gray-400 dark:text-slate-500 tabular-nums">
                          {levelLabel(skill.level)}
                        </span>
                      </div>
                      {/* Track */}
                      <div className="h-1.5 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        {/* Fill — animates when panel opens */}
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-400"
                          style={{
                            width: isOpen ? `${skill.level}%` : '0%',
                            transition: `width 0.65s ease ${i * 90}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )
      })}
    </div>
  )
}
