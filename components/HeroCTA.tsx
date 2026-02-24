'use client'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function HeroCTA() {
  return (
    <div className="fade-in-up delay-400 flex items-center gap-3 flex-wrap">
      <button
        onClick={() => scrollTo('projects')}
        className="bg-blue-700 text-white px-5 py-2.5 rounded-lg hover:bg-blue-800 transition text-sm font-semibold"
      >
        View Projects →
      </button>
      <button
        onClick={() => scrollTo('about')}
        className="text-sm text-gray-500 dark:text-slate-500 hover:text-gray-800 dark:hover:text-slate-300 transition px-1 underline-offset-2 hover:underline"
      >
        About me
      </button>
    </div>
  )
}
