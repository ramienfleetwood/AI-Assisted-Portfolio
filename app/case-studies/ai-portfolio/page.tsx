import Link from 'next/link'
import Header from '@/components/layout/Header'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Case Study: AI-Integrated Portfolio | Ramien Fleetwood',
  description:
    'A product case study on building an AI-integrated portfolio using Next.js, Sanity CMS, and the Anthropic Claude API.',
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-gray-900 dark:text-slate-100 mt-14 mb-4 pb-2 border-b border-gray-100 dark:border-slate-800">
      {children}
    </h2>
  )
}

function DecisionBlock({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <div className="flex items-start gap-3 mb-3">
        <span className="shrink-0 w-6 h-6 rounded-full bg-blue-700 dark:bg-blue-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
          {number}
        </span>
        <h3 className="text-base font-semibold text-gray-900 dark:text-slate-100">{title}</h3>
      </div>
      <div className="pl-9 space-y-3">{children}</div>
    </div>
  )
}

function Callout({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-blue-300 dark:border-blue-700 pl-4 py-0.5">
      <span className="text-sm font-semibold text-gray-700 dark:text-slate-300">{label} </span>
      <span className="text-sm text-gray-600 dark:text-slate-400">{children}</span>
    </div>
  )
}

function Lesson({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50 rounded-lg px-4 py-3 mt-3">
      <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">Lesson: </span>
      <span className="text-sm text-gray-700 dark:text-slate-300">{children}</span>
    </div>
  )
}

function PainPoint({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
      <span aria-hidden="true" className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-700 dark:bg-blue-500" />
      <span>
        <span className="font-semibold text-gray-900 dark:text-slate-100">{label} </span>
        {children}
      </span>
    </li>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
          <span aria-hidden="true" className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-700 dark:bg-blue-500" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-slate-800 text-xs font-mono text-blue-700 dark:text-blue-400 border border-gray-200 dark:border-slate-700">
      {children}
    </code>
  )
}

export default function AIPortfolioCaseStudy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="container mx-auto px-4 max-w-3xl flex-1 py-12">
        {/* Back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-slate-500 hover:text-blue-700 dark:hover:text-blue-400 transition mb-10"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Back to projects
        </Link>

        {/* Title block */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400 mb-2">
            Product Case Study
          </p>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-1 leading-tight">
            AI-Integrated Portfolio
          </h1>
          <p className="text-sm text-gray-500 dark:text-slate-500">
            Ramien Fleetwood · Digital Product Specialist
          </p>
        </div>

        {/* ── The Problem ─────────────────────────────── */}
        <SectionHeading>The Problem</SectionHeading>

        <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed mb-4">
          Portfolio sites for product professionals face a paradox: the people best positioned to articulate product
          value often have the least compelling way to demonstrate it. Static resume pages and generic LinkedIn
          profiles flatten nuanced, multi-year careers into bullet points — removing the very thing product work
          requires: context, judgment, and narrative.
        </p>

        <p className="text-sm font-medium text-gray-900 dark:text-slate-100 mb-3">
          The specific pain points I set out to address:
        </p>

        <ul className="space-y-3 mb-5">
          <PainPoint label="Recruiters and hiring managers are time-constrained —">
            They can't navigate five separate pages to piece together who you are. The story needs to come to them.
          </PainPoint>
          <PainPoint label="Static content doesn't differentiate —">
            Anyone can list "6+ years in healthcare tech." Fewer can show how they think.
          </PainPoint>
          <PainPoint label="AI is frequently claimed as a competency but rarely demonstrated —">
            I wanted the portfolio itself to serve as proof of the capability I was describing.
          </PainPoint>
        </ul>

        <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
          The goal wasn't just a portfolio. It was a live product that embodied the skills on the page — built by
          someone who could scope it, weigh in on architectural trade-offs, deploy it, and iterate on it after
          real-world feedback.
        </p>

        {/* ── Role and Process ────────────────────────── */}
        <SectionHeading>Role and Process</SectionHeading>

        <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed mb-4">
          I was the sole product owner and engineer on this project, working alongside Claude (Anthropic) as an AI
          development collaborator. This wasn't just "vibe coding." I drove every product decision, defined
          requirements, validated approaches, and debugged what broke.
        </p>

        <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed mb-5">
          <span className="font-semibold text-gray-900 dark:text-slate-100">Stack: </span>
          Next.js 15 (App Router), Tailwind CSS v4, Sanity CMS, Anthropic Claude API, deployed via Vercel.
        </p>

        <p className="text-sm font-semibold text-gray-900 dark:text-slate-100 mb-2">Discovery process</p>
        <BulletList items={[
          'Audited reference portfolios to identify UX patterns worth adopting',
          'Mapped the content hierarchy: hero → stats → projects → about → journey → contact',
          'Defined the AI chat assistant as a first-class feature, not an afterthought — it needed to be briefed on real experience, not generic filler',
        ]} />

        <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed mt-5">
          <span className="font-semibold text-gray-900 dark:text-slate-100">Prioritization framework: </span>
          I treated the build like a product sprint. Core user flow first (hero → content → contact), then
          progressive enhancement (scroll spy, animations, mobile nav), then infrastructure (deployment, package
          hygiene).
        </p>

        {/* ── Decision Points ─────────────────────────── */}
        <SectionHeading>Decision Points and Trade-offs</SectionHeading>
        <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
          These are the choices that actually shaped the product:
        </p>

        <DecisionBlock number={1} title="Single-page scroll vs. separate routes">
          <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
            Early in the project I identified a tension: I wanted a scrollable, narrative portfolio experience but
            also needed shareable deep-link URLs for specific pages (<Code>/about</Code>, <Code>/journey</Code>)
            that a recruiter might send directly.
          </p>
          <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
            I evaluated four structural options and ultimately landed on{' '}
            <span className="font-semibold text-gray-900 dark:text-slate-100">Parallel architecture</span> — the
            home page became a full single-page scroll containing all content, while standalone sub-pages remained
            intact as independent routes. This preserved deep-linkability without sacrificing scroll cohesion.
          </p>
          <Callout label="Trade-off accepted:">
            Content is duplicated across home and sub-pages. I accepted this because the standalone pages serve a
            different access pattern (direct link) than the home page (exploratory scroll), and the component reuse
            meant no actual code duplication.
          </Callout>
        </DecisionBlock>

        <DecisionBlock number={2} title='"View all" modal vs. page navigation for projects'>
          <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
            When evaluating whether to put About, Journey, and Projects behind expand modals, I scoped each
            independently rather than applying a blanket solution.
          </p>
          <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
            For About and Journey: the full content was already rendered on the home page scroll. Adding a modal
            would have added engineering complexity for zero UX gain. The standalone pages serve a purpose as
            shareable links.
          </p>
          <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
            For Projects: a modal was the right call. The home page only surfaces featured work, but "View all"
            shouldn't break the browsing context. Built a fully accessible modal (<Code>role="dialog"</Code>,
            focus trap, scroll lock, Escape-to-close) that fetches all projects in parallel at page load.
          </p>
        </DecisionBlock>

        <DecisionBlock number={3} title="Hero navigation — surfacing a browser quirk">
          <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
            After restructuring to the SPA model, the "About me" hero button stopped working reliably.
          </p>
          <Callout label="Initial diagnosis:">
            <Code>href="/#about"</Code> from the same page caused Next.js to reset scroll position rather than
            navigate.
          </Callout>
          <Callout label="Fix attempt 1:">
            Bare <Code>href="#about"</Code> worked on first click but failed on repeat clicks because browsers
            don't re-fire hash navigation when the URL hash hasn't changed.
          </Callout>
          <Callout label="Final resolution:">
            Extracted the hero buttons into a <Code>'use client'</Code> component (<Code>HeroCTA.tsx</Code>) using
            imperative <Code>scrollIntoView({'{ behavior: \'smooth\' }'})</Code> on <Code>onClick</Code>. This fires
            unconditionally regardless of URL state.
          </Callout>
          <Lesson>
            Framework-level navigation behavior and browser-native behavior aren't always the same. Declarative
            fixes don't always hold at the edges.
          </Lesson>
        </DecisionBlock>

        <DecisionBlock number={4} title="Scroll spy threshold — vertical monitor failure">
          <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
            Post-deployment, a vertical monitor (portrait orientation, ~1920px viewport height) issue was reported
            where "My Journey" never highlighted regardless of scroll depth — "About" stayed active indefinitely.
          </p>
          <Callout label="Root cause:">
            The scroll spy used <Code>window.innerHeight * 0.35</Code> as the activation threshold. On a 1920px
            tall monitor, that's 672px — requiring a section's top to reach the upper third of a very tall screen.
            The Journey section sat visibly at ~800–900px from the viewport top and never crossed the threshold.
          </Callout>
          <Callout label="Fix:">
            Raised the threshold to <Code>window.innerHeight * 0.65</Code>. Sections now activate when their top
            enters the lower 35% of whatever viewport is in use, making this adaptive to screen dimensions.
          </Callout>
          <Lesson>
            This is the kind of bug that only surfaces in real user environments. Horizontal monitor testing was
            insufficient. The fix required understanding the relationship between viewport geometry and activation
            thresholds — not just bumping a number.
          </Lesson>
        </DecisionBlock>

        <DecisionBlock number={5} title="AI chat error surfacing">
          <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
            The AI assistant was returning a generic "Sorry, I could not generate a response" message. Rather than
            masking this, I updated the error handling to surface the actual Anthropic API error to the user. This
            revealed the real root cause: depleted API credit balance, not a code bug. The fix was adding credits,
            but the debugging path only existed because I built proper error propagation in the first place.
          </p>
        </DecisionBlock>

        {/* ── Deployment ──────────────────────────────── */}
        <SectionHeading>Deployment and Infrastructure</SectionHeading>
        <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed mb-5">
          Deploying to Vercel exposed two infrastructure issues worth noting as product decisions:
        </p>

        <div className="space-y-5">
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-slate-100 mb-1">
              Package.json integrity
            </p>
            <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
              Several dependencies carried placeholder versions (<Code>"^..."</Code>) from earlier scaffolding —{' '}
              <Code>@anthropic-ai/sdk</Code>, <Code>lucide-react</Code>, <Code>clsx</Code>,{' '}
              <Code>tailwind-merge</Code>. Local development masked this because <Code>node_modules</Code> was
              populated from a different project. Vercel's clean install environment surfaced it immediately.
            </p>
            <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed mt-1">
              <span className="font-semibold text-gray-900 dark:text-slate-100">Resolution: </span>
              Audited actual imports across the codebase, removed four unused packages entirely, pinned the two
              that were needed to their actual latest versions.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-slate-100 mb-1">
              Dead code in TypeScript strict mode
            </p>
            <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
              A leftover <Code>lib/mcp.ts</Code> file (MCP client scaffolding that was never wired into the app)
              caused a TypeScript compile error in Vercel's build pipeline — a type mismatch in{' '}
              <Code>@modelcontextprotocol/sdk</Code> that local dev wasn't catching due to the mismatched{' '}
              <Code>node_modules</Code>. Removed the file and its dependency entirely.
            </p>
          </div>
        </div>

        {/* ── Outcomes ────────────────────────────────── */}
        <SectionHeading>Outcomes</SectionHeading>
        <BulletList items={[
          'Fully deployed portfolio at a public Vercel URL, accessible and optimized across mobile, desktop horizontal, and desktop vertical layouts',
          'AI chat assistant briefed on real experience, certifications, and project context — functional and responsive',
          'Mobile hamburger navigation with scroll-spy active highlighting',
          'Zero build warnings in production; clean dependency tree',
          'End-to-end: concept → deployed product in a single sprint',
        ]} />

        {/* ── Learnings ───────────────────────────────── */}
        <SectionHeading>Learnings and What I'd Do Differently</SectionHeading>

        <p className="text-sm font-semibold text-gray-900 dark:text-slate-100 mb-2">What I'd change</p>
        <BulletList items={[
          "Environment parity from day one. The node_modules mismatch between local and CI/CD was avoidable. I'd enforce a clean install baseline earlier in the process.",
          'Test on vertical monitors during development. The scroll spy threshold bug was entirely a testing coverage gap, not a logic error.',
          'Project content pipeline should have been planned earlier. The "Under Construction" banner on Featured Projects reflects a sequencing issue — the CMS and case study content should have been in-flight concurrently with the site build, not after.',
        ]} />

        <p className="text-sm font-semibold text-gray-900 dark:text-slate-100 mt-6 mb-2">What held up well</p>
        <BulletList items={[
          'The SPA + sub-pages hybrid architecture was the right call. It scales cleanly as content is added.',
          'The AI assistant\'s system prompt design: grounding it in real, specific experience rather than generic instructions made the chat noticeably more useful in testing.',
          'Accessibility decisions (focus management, ARIA roles, keyboard navigation) were built in, not bolted on.',
        ]} />

        {/* Bottom nav */}
        <div className="mt-14 pt-6 border-t border-gray-100 dark:border-slate-800">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-slate-500 hover:text-blue-700 dark:hover:text-blue-400 transition"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Back to projects
          </Link>
        </div>
      </main>

      <footer className="border-t border-gray-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-5xl py-5 text-xs text-gray-400 dark:text-slate-600 text-center">
          Ramien Fleetwood · Digital Product Specialist
        </div>
      </footer>
    </div>
  )
}
