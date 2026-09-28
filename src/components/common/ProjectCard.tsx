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
  aspectHeight = "w-full max-w-[400px] h-[400px] md:max-w-none md:h-auto md:aspect-square mx-auto",
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className={`card-image-wrap group cursor-pointer relative ${aspectHeight} bg-[#0e0e0e] rounded-none shadow-md transition-all duration-300 ${className}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover grayscale contrast-105 rounded-none"
      />
      <div className="card-image-shadow" />


      {/* Dark Gradient Overlay with Text (z-10 ensures text stays in front of hover shadow and rotating image) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 sm:p-7 lg:p-10 flex flex-col justify-end pointer-events-none">
        <h3 className="text-xl sm:text-2xl lg:text-[26px] xl:text-[28px] font-['Mona_Sans:Semi_Bold',sans-serif] font-semibold text-white leading-snug sm:leading-[36px] mb-3 sm:mb-4 group-hover:text-[#ffd43e] transition-colors">
          {project.title}
        </h3>
        <div className="border-b border-white/60 pb-3 sm:pb-4 mb-3 sm:mb-4" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#ffd43e] shrink-0" />
            <span className="text-white text-sm sm:text-base lg:text-[18px] font-['Mona_Sans:Medium',sans-serif]">
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
