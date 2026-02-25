'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

const NAV_SECTIONS = ['home', 'projects', 'about', 'journey', 'contact'] as const

export default function Header() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Scroll spy
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('')
      return
    }

    const handleScroll = () => {
      // Use 65% of viewport height so sections activate when their top
      // enters the lower third of the screen — works correctly on both
      // short horizontal monitors and tall vertical ones.
      const threshold = window.innerHeight * 0.65
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

  const mobileLinkClass = (section: string) =>
    activeSection === section
      ? 'block px-4 py-3 text-sm font-medium text-blue-700 dark:text-blue-400 border-l-2 border-blue-700 dark:border-blue-400 bg-blue-50/50 dark:bg-blue-950/20'
      : 'block px-4 py-3 text-sm text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-slate-100 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition'

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 dark:border-slate-700/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center max-w-5xl">
        <Link href="/" className="text-base font-semibold text-gray-900 dark:text-slate-100 tracking-tight">
          Ramien Fleetwood
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5">
          <Link href="/#projects" className={linkClass('projects')}>Projects</Link>
          <Link href="/#about" className={linkClass('about')}>About</Link>
          <Link href="/#journey" className={linkClass('journey')}>My Journey</Link>
          <Link
            href="/ai-chat"
            className="text-sm bg-blue-700 text-white px-3 py-1.5 rounded-lg hover:bg-blue-800 transition font-medium"
          >
            Ask my AI
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="p-2 rounded-lg text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md">
          <div className="container mx-auto max-w-5xl py-2">
            <Link href="/#projects" className={mobileLinkClass('projects')} onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
            <Link href="/#about" className={mobileLinkClass('about')} onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="/#journey" className={mobileLinkClass('journey')} onClick={() => setMenuOpen(false)}>
              My Journey
            </Link>
            <div className="px-4 py-3">
              <Link
                href="/ai-chat"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center text-sm bg-blue-700 text-white px-3 py-2 rounded-lg hover:bg-blue-800 transition font-medium"
              >
                Ask my AI
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
