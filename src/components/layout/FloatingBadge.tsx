import React, { useState } from "react"

export default function FloatingBadge() {
  const [minimized, setMinimized] = useState(false)

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="fixed bottom-4 right-4 z-40 bg-[#4a3aff] text-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        title="Show Template Info"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 bg-white/95 backdrop-blur-sm border border-[#4a3aff]/30 rounded-2xl shadow-xl p-3.5 max-w-xs flex items-center gap-3 animate-in slide-in-from-bottom-3 duration-300">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4a3aff] to-[#7b61ff] flex items-center justify-center text-white shrink-0 shadow-md">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-neutral-800 truncate">
          Need to customize this template?
        </p>
        <a
          href="https://brixtemplates.com"
          target="_blank"
          rel="noreferrer"
          className="text-xs font-bold text-[#4a3aff] hover:underline inline-flex items-center gap-1"
        >
          <span>Hire our Webflow team</span>
          <svg
            className="w-3 h-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </div>

      <button
        onClick={() => setMinimized(true)}
        className="text-neutral-400 hover:text-neutral-700 p-1"
        aria-label="Minimize badge"
      >
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  )
}
