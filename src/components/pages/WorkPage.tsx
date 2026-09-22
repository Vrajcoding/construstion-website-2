import React from "react"
import { motion } from "framer-motion"
import SectionTag from "../common/SectionTag"
import ProjectCard from "../common/ProjectCard"
import { projectsData } from "../../data/siteData"

export interface WorkPageProps {
  onSelectProject?: (title: string) => void
  onOpenQuote?: () => void
}

export default function WorkPage({ onSelectProject }: WorkPageProps) {
  return (
    <div className="bg-white min-h-screen py-14 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row with Title and Description */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-10 sm:pb-12 border-b border-[#e7e7e7] mb-10 sm:mb-14 w-full">
          {/* Left side: Category tag + Headline */}
          <div className="space-y-4 shrink-0">
            <div className="flex items-center justify-start">
              <SectionTag text="RECENT WORK" />
            </div>
            <h1 className="text-4xl lg:text-[82px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08] lg:leading-[1.04] text-left">
              <span className="block whitespace-nowrap">Take a look at our</span>
              <span className="block whitespace-nowrap">latest projects</span>
            </h1>
          </div>

          {/* Right side: Descriptive Paragraph */}
          <div className="max-w-[520px] lg:pb-3 shrink-0">
            <p className="text-[#0E0E0E] text-base sm:text-lg font-['Mona_Sans:Medium',sans-serif] font-medium leading-[26px] sm:leading-[30px] text-left">
              <span className="lg:block">Lorem ipsum dolor sit amet consectetur senectus velit</span>{" "}
              <span className="lg:block">faucibus quisque at ut vitae platea justo nec mattis.</span>
            </p>
          </div>
        </div>

        {/* 2-Column Projects Portfolio Grid with Smooth Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: (index % 2) * 0.12,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              <ProjectCard
                project={project}
                onClick={() => onSelectProject?.(project.title)}
                aspectHeight="w-full max-w-[400px] h-[400px] md:max-w-none md:h-auto md:aspect-square mx-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
