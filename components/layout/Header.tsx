'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { ThemeToggle } from '@/components/ThemeToggle'

const NAV_SECTIONS = ['home', 'projects', 'about', 'journey', 'contact'] as const

export default function Header() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('')
      return
    }

    const handleScroll = () => {
      const threshold = window.innerHeight * 0.35
      let current = ''
      for (const id of NAV_SECTIONS) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= threshold) current = id
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const linkClass = (section: string) =>
    activeSection === section
      ? 'text-sm font-medium text-blue-700 dark:text-blue-400 transition relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-px after:bg-blue-700 dark:after:bg-blue-400'
      : 'text-sm text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 transition'

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 dark:border-slate-700/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center max-w-5xl">
        <Link href="/" className="text-base font-semibold text-gray-900 dark:text-slate-100 tracking-tight">
          Ramien Fleetwood
        </Link>

        <div className="flex items-center gap-5">
          <Link href="/#projects" className={linkClass('projects')}>
            Projects
          </Link>
          <Link href="/#about" className={linkClass('about')}>
            About
          </Link>
          <Link href="/#journey" className={linkClass('journey')}>
            My Journey
          </Link>
          <Link
            href="/ai-chat"
            className="text-sm bg-blue-700 text-white px-3 py-1.5 rounded-lg hover:bg-blue-800 transition font-medium"
          >
            Ask my AI
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
