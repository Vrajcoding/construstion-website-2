import React from "react"
import SectionTag from "../common/SectionTag"
import Button from "../common/Button"
import ProjectCard from "../common/ProjectCard"
import { projectsData } from "../../data/siteData"

export interface ProjectsSectionProps {
  onSelectProject?: (title: string) => void
  onBrowseAll?: () => void
  onOpenQuote?: () => void
}

export default function ProjectsSection({
  onSelectProject,
  onBrowseAll,
}: ProjectsSectionProps) {
  const featured = projectsData[0]
  const project2 = projectsData[1]
  const project3 = projectsData[2]

  return (
    <section
      id="work"
      className="bg-white py-16 sm:py-24 lg:py-32 overflow-x-clip"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Staggered Portfolio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left Column: Header + Card 1 + Description & Button */}
          <div className="flex flex-col">
            {/* Section Header */}
            <div className="space-y-4 mb-8 sm:mb-12">
              <SectionTag text="RECENT WORK" />
              <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.12] sm:leading-[70px]">
                Take a look at our <br className="hidden sm:inline" />
                most recent project
              </h2>
            </div>

            {/* Project Card 1 (Building construction in Los Angeles, CA) */}
            <ProjectCard
              project={featured}
              onClick={() => onSelectProject?.(featured.title)}
              aspectHeight="h-[460px] sm:h-[540px]"
            />

            {/* Description & Button below Card 1 */}
            <div className="mt-8 sm:mt-10 space-y-8 max-w-xl">
              <p className="text-[#646464] text-base sm:text-[18px] leading-[28px] sm:leading-[30px] font-['Mona_Sans:Medium',sans-serif]">
                {featured.description}
              </p>
              <div>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    if (onBrowseAll) {
                      onBrowseAll()
                    } else {
                      onSelectProject?.("All Projects")
                    }
                  }}
                >
                  Browse portfolio
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Full-Height Stacked Cards */}
          <div className="flex flex-col gap-10">
            {/* Project Card 2 (Kitchen remodeling in Hollywood Hills, CA) */}
            <ProjectCard
              project={project2}
              onClick={() => onSelectProject?.(project2.title)}
              aspectHeight="h-[460px] sm:h-[540px]"
            />

            {/* Project Card 3 (Interior remodeling in Malibu Beach, CA) */}
            <ProjectCard
              project={project3}
              onClick={() => onSelectProject?.(project3.title)}
              aspectHeight="h-[460px] sm:h-[540px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

