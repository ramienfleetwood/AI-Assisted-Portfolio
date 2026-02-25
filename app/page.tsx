import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import { getFeaturedProjects, getProjects } from '@/lib/sanity'

export const revalidate = 60 // re-fetch Sanity data at most every 60 seconds
import ProjectCard from '@/components/ProjectCard'
import AllProjectsModal from '@/components/AllProjectsModal'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { MapPin, Mail, Coffee, Construction } from 'lucide-react'
import StatsCarousel from '@/components/StatsCarousel'
import SkillBars from '@/components/SkillBars'
import JourneyTimeline from '@/components/JourneyTimeline'
import HeroCTA from '@/components/HeroCTA'

export default async function Home() {
  const [featuredProjects, allProjects] = await Promise.all([
    getFeaturedProjects(),
    getProjects(),
  ])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* ── Hero ──────────────────────────────────────────── */}
      <section id="home" className="relative overflow-hidden border-b border-gray-100 dark:border-slate-800">
        {/* Dot grid background */}
        <div className="dot-grid absolute inset-0 opacity-70" />
        {/* Fade out at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-[#020617]" />

        <div className="relative container mx-auto px-4 py-24 md:py-32 max-w-5xl">
          <div className="flex flex-col max-w-2xl">

            {/* Status badge */}
            <div className="fade-in-up inline-flex items-center gap-2 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs font-medium mb-6 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available for new opportunities
            </div>

            <h1 className="fade-in-up delay-100 text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-slate-100 mb-6 leading-[1.1]">
              Ramien Fleetwood
            </h1>

            {/* Profile photo — sits just below the name */}
            <div className="fade-in-up delay-150 mb-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white dark:border-slate-700 shadow-md">
                <Image
                  src="/profile.jpg"
                  alt="Ramien Fleetwood"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            <p className="fade-in-up delay-200 text-lg md:text-xl font-medium text-blue-700 dark:text-blue-400 mb-2">
              Digital Product Specialist
            </p>

            <p className="fade-in-up delay-200 flex items-center gap-1.5 text-sm text-gray-400 dark:text-slate-500 mb-6">
              <MapPin size={13} aria-hidden="true" />
              Lakeland, Florida
            </p>

            <p className="fade-in-up delay-300 text-gray-600 dark:text-slate-400 max-w-xl mb-8 leading-relaxed">
              Building AI-powered products at the intersection of technology and
              automation — turning complex workflows into intuitive, impactful experiences.
            </p>

            <HeroCTA />

          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 max-w-5xl flex-1">

        {/* ── Stats carousel ────────────────────────────────── */}
        <RevealOnScroll>
          <StatsCarousel />
        </RevealOnScroll>

        {/* ── Featured Projects ─────────────────────────────── */}
        <RevealOnScroll>
          <section id="projects" className="mb-14">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-slate-100">Featured Projects</h2>
                <p className="text-sm text-gray-500 dark:text-slate-500 mt-0.5">A selection of recent work</p>
              </div>
              <AllProjectsModal projects={allProjects} />
            </div>

            {/* Under Construction banner */}
            <div className="flex items-center gap-3 border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 rounded-lg px-4 py-3 mb-5 text-amber-700 dark:text-amber-400">
              <Construction size={15} className="shrink-0" aria-hidden="true" />
              <p className="text-sm">
                <span className="font-semibold">Coming soon —</span> project case studies are being prepared and will be added shortly.
              </p>
            </div>

            {featuredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredProjects.map((project: any, i: number) => (
                  <RevealOnScroll key={project._id} delay={i * 80}>
                    <ProjectCard project={project} />
                  </RevealOnScroll>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 border border-dashed border-gray-200 dark:border-slate-700 rounded-xl">
                <p className="text-gray-500 dark:text-slate-500 text-sm mb-3">No featured projects yet.</p>
                <Link href="/studio" className="text-sm text-blue-700 dark:text-blue-400 hover:underline">
                  Add projects in Studio →
                </Link>
              </div>
            )}
          </section>
        </RevealOnScroll>

        {/* ── About Me ──────────────────────────────────────── */}
        <RevealOnScroll>
          <section id="about" className="mb-14">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-slate-100">About Me</h2>
                <p className="text-sm text-gray-500 dark:text-slate-500 mt-0.5">Background &amp; competencies</p>
              </div>
              <Link href="/about" className="text-sm text-blue-700 dark:text-blue-400 hover:underline shrink-0">
                Full profile →
              </Link>
            </div>

            <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-4">
              I am a Product Specialist with over 6 years of experience building, scaling, and
              delivering impactful business solutions across healthcare technology. My work centers
              on maximizing product value — bridging the gap between complex clinical workflows and
              the intuitive, user-centered experiences that drive real outcomes.
            </p>
            <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-8">
              I draw on a multidisciplinary background spanning healthcare operations, data analytics,
              and AI &amp; automation to consistently deliver high-quality products that exceed
              expectations — creating meaningful experiences for both the users I serve and the
              teams I work alongside.
            </p>

            <h3 className="text-base font-semibold text-gray-900 dark:text-slate-100 mb-1">Competencies</h3>
            <p className="text-sm text-gray-500 dark:text-slate-500 mb-5">Skill depth across disciplines</p>
            <SkillBars />
          </section>
        </RevealOnScroll>

        {/* ── My Journey ────────────────────────────────────── */}
        <RevealOnScroll>
          <section id="journey" className="mb-14">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-slate-100">My Journey</h2>
                <p className="text-sm text-gray-500 dark:text-slate-500 mt-0.5">Experience &amp; credentials</p>
              </div>
              <Link href="/journey" className="text-sm text-blue-700 dark:text-blue-400 hover:underline shrink-0">
                Full timeline →
              </Link>
            </div>
            <JourneyTimeline />
          </section>
        </RevealOnScroll>

        {/* ── AI Chat CTA — slim inline card ────────────────── */}
        <RevealOnScroll>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-blue-100 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 rounded-xl px-6 py-5 mb-14">
            <div>
              <p className="font-semibold text-gray-900 dark:text-slate-100 text-sm">
                Have a question about my work?
              </p>
              <p className="text-xs text-gray-500 dark:text-slate-500 mt-0.5">
                The AI assistant is briefed on my projects, background, and experience.
              </p>
            </div>
            <Link
              href="/ai-chat"
              className="shrink-0 text-sm bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition font-medium"
            >
              Start a conversation →
            </Link>
          </div>
        </RevealOnScroll>

        {/* ── Get In Touch ───────────────────────────────────── */}
        <RevealOnScroll>
          <section id="contact" className="mb-14">
            <div className="mb-5">
              <h2 className="text-xl font-bold text-gray-900 dark:text-slate-100">Get In Touch</h2>
              <p className="text-sm text-gray-500 dark:text-slate-500 mt-0.5">Open to new opportunities and collaborations.</p>
            </div>

            <div className="flex flex-col gap-3">
              {/* Email */}
              <a
                href="mailto:newagenomadenergy@gmail.com"
                className="group flex items-center gap-4 border border-gray-100 dark:border-slate-800 rounded-xl px-5 py-4 bg-white dark:bg-slate-900 hover:border-blue-200 dark:hover:border-blue-800 transition"
              >
                <span className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400">
                  <Mail size={16} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs text-gray-400 dark:text-slate-500 font-medium uppercase tracking-wide">Email</p>
                  <p className="text-sm text-gray-800 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                    newagenomadenergy@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ramien-fleetwood/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-gray-100 dark:border-slate-800 rounded-xl px-5 py-4 bg-white dark:bg-slate-900 hover:border-blue-200 dark:hover:border-blue-800 transition"
              >
                <span className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-gray-400 dark:text-slate-500 font-medium uppercase tracking-wide">LinkedIn</p>
                  <p className="text-sm text-gray-800 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                    linkedin.com/in/ramien-fleetwood
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ramienfleetwood"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-gray-100 dark:border-slate-800 rounded-xl px-5 py-4 bg-white dark:bg-slate-900 hover:border-blue-200 dark:hover:border-blue-800 transition"
              >
                <span className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-gray-400 dark:text-slate-500 font-medium uppercase tracking-wide">GitHub</p>
                  <p className="text-sm text-gray-800 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                    github.com/ramienfleetwood
                  </p>
                </div>
              </a>

              {/* Buy Me a Coffee */}
              <a
                href="https://buymeacoffee.com/newagedigitalnomad"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-gray-100 dark:border-slate-800 rounded-xl px-5 py-4 bg-white dark:bg-slate-900 hover:border-yellow-300 dark:hover:border-yellow-700 transition"
              >
                <span className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-yellow-50 dark:bg-yellow-950/40 text-yellow-600 dark:text-yellow-400">
                  <Coffee size={16} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs text-gray-400 dark:text-slate-500 font-medium uppercase tracking-wide">Support my work</p>
                  <p className="text-sm text-gray-800 dark:text-slate-200 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                    Buy me a coffee
                  </p>
                </div>
              </a>
            </div>
          </section>
        </RevealOnScroll>

      </main>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="border-t border-gray-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-5xl py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400 dark:text-slate-600">
          <p>Ramien Fleetwood · Digital Product Specialist</p>
          <div className="flex items-center gap-4">
            <p>Built with Next.js · Claude AI · Sanity · Tailwind</p>
            <a
              href="https://buymeacoffee.com/newagedigitalnomad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-yellow-600 dark:text-yellow-500 hover:text-yellow-700 dark:hover:text-yellow-400 transition-colors"
            >
              <Coffee size={12} aria-hidden="true" />
              Support me
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
