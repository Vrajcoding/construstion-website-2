import React from "react"
import SectionTag from "../common/SectionTag"
import ProjectCard from "../common/ProjectCard"
import { projectsData } from "../../data/siteData"

export interface WorkPageProps {
  onSelectProject?: (title: string) => void
  onOpenQuote?: () => void
}

export default function WorkPage({ onSelectProject }: WorkPageProps) {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Hero Section */}
      <section className="pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header row with Title and Description */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-[#e7e7e7]">
            {/* Left side: Category tag + Headline */}
            <div className="space-y-4 max-w-3xl">
              <SectionTag text="RECENT WORK" />
              <h1 className="text-4xl sm:text-6xl lg:text-[82px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08] lg:leading-[88px]">
                Take a look at our <br className="hidden sm:inline" />
                latest projects
              </h1>
            </div>

            {/* Right side: Descriptive Paragraph */}
            <div className="max-w-[440px] lg:pb-3">
              <p className="text-[#646464] text-[18px] font-['Mona_Sans:Regular',sans-serif] leading-[30px]">
                Lorem ipsum dolor sit amet consectetur senectus velit faucibus
                quisque at ut vitae platea justo nec mattis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2-Column Projects Portfolio Grid */}
      <section className="pb-24 sm:pb-32 lg:pb-36">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => onSelectProject?.(project.title)}
                aspectHeight="h-[460px] sm:h-[540px]"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

