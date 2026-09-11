import React from "react"
import { ProjectItem } from "../../types"

export interface ProjectCardProps {
  project: ProjectItem
  onClick?: () => void
  className?: string
  aspectHeight?: string
}

export default function ProjectCard({
  project,
  onClick,
  className = "",
  aspectHeight = "h-[460px] sm:h-[540px]",
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer relative w-full ${aspectHeight} overflow-hidden bg-neutral-900 rounded-none shadow-md transition-all duration-300 ${className}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-700 rounded-none"
      />

      {/* Dark Gradient Overlay with Text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 sm:p-10 flex flex-col justify-end">
        <h3 className="text-2xl sm:text-[28px] font-['Mona_Sans:Semi_Bold',sans-serif] font-semibold text-white leading-[34px] sm:leading-[40px] mb-4 group-hover:text-[#ffd43e] transition-colors">
          {project.title}
        </h3>
        <div className="border-b border-white/20 pb-4 mb-4" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#ffd43e] shrink-0" />
            <span className="text-white text-base sm:text-[18px] font-['Mona_Sans:Medium',sans-serif]">
              {project.category}
            </span>
          </div>
          <div className="text-white group-hover:text-[#ffd43e] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
