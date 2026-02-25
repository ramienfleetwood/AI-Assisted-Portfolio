'use client'

import { useState, useEffect } from 'react'

const stats = [
  { value: '6+',   label: 'Years in healthcare tech' },
  { value: '3+',   label: 'Companies shipped at' },
  { value: 'CSPO', label: 'Scrum Product Owner' },
  { value: 'AI',   label: 'Integrated solutions' },
]

const DISPLAY_MS  = 2800  // how long each stat is shown
const FOLD_OUT_MS = 230   // fold-away duration
const FOLD_IN_MS  = 340   // fold-in duration (slower = satisfying settle)

export default function StatsCarousel() {
  const [index, setIndex]     = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const tick = () => {
      // Phase 1 — fold out
      setVisible(false)
      // Phase 2 — swap content and fold in
      setTimeout(() => {
        setIndex((i) => (i + 1) % stats.length)
        setVisible(true)
      }, FOLD_OUT_MS + 40) // small buffer past the end of fold-out
    }

    const id = setInterval(tick, DISPLAY_MS)
    return () => clearInterval(id)
  }, []) // empty deps: functional update inside avoids stale-closure issues

  const stat = stats[index]

  return (
    <div
      className="border border-gray-100 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 my-10 overflow-hidden"
      style={{ perspective: '600px' }}
    >
      {/* ── Flip panel ─────────────────────────────────────────── */}
      <div
        className="px-8 py-7 min-h-[92px] flex flex-col justify-center"
        role="status"
        aria-live="polite"
        aria-label={`${stat.value} — ${stat.label}`}
      >
        <div
          style={{
            transformOrigin: 'center center',
            transform: visible ? 'rotateX(0deg)' : 'rotateX(-88deg)',
            opacity: visible ? 1 : 0,
            transition: visible
              ? `transform ${FOLD_IN_MS}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${FOLD_IN_MS}ms ease-out`
              : `transform ${FOLD_OUT_MS}ms ease-in, opacity ${FOLD_OUT_MS}ms ease-in`,
          }}
        >
          <p className="text-3xl font-bold text-gray-900 dark:text-slate-100 tabular-nums">
            {stat.value}
          </p>
          <p className="text-sm text-gray-500 dark:text-slate-500 mt-1.5">
            {stat.label}
          </p>
        </div>
      </div>

      {/* ── Progress pills ─────────────────────────────────────── */}
      <div className="px-8 pb-5 flex items-center gap-2" aria-hidden="true">
        {stats.map((s, i) => (
          <span
            key={s.label}
            className="block rounded-full bg-blue-700 dark:bg-blue-500 transition-all duration-300"
            style={{
              width:   i === index ? '20px' : '6px',
              height:  '6px',
              opacity: i === index ? 1 : 0.2,
            }}
          />
        ))}
      </div>
    </div>
  )
}
