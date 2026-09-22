import React from "react"
import { motion } from "framer-motion"
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
      className="bg-white py-14 sm:py-20 lg:py-28 overflow-x-clip"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Staggered Portfolio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Column: Header + Card 1 + Description & Button */}
          <div className="flex flex-col lg:pt-12 sm:pt-6">
            {/* Section Header */}
            <div className="space-y-4 mb-6 sm:mb-10">
              <SectionTag text="RECENT WORK" />
              <h2 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08] sm:leading-[1.12]">
                Take a look at our <br className="hidden sm:inline" />
                most recent project
              </h2>
            </div>

            {/* Project Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <ProjectCard
                project={featured}
                onClick={() => onSelectProject?.(featured.title)}
                aspectHeight="w-full max-w-[400px] h-[400px] md:max-w-none md:h-auto md:aspect-square mx-auto"
              />
            </motion.div>

            {/* Description & Button below Card 1 */}
            <div className="mt-6 sm:mt-10 space-y-6 max-w-xl">
              <p className="text-[#646464] text-base sm:text-lg leading-relaxed sm:leading-[30px] font-['Mona_Sans:Medium',sans-serif] line-clamp-3">
                {featured.description}
              </p>
              <div>
                <Button
                  variant="outline"
                  size="lg"
                  fullWidthMobile
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

          {/* Right Column: Square Stacked Cards with Scroll Animation */}
          <div className="flex flex-col gap-10 lg:gap-14">
            {/* Project Card 2 (Square image) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <ProjectCard
                project={project2}
                onClick={() => onSelectProject?.(project2.title)}
                aspectHeight="w-full max-w-[400px] h-[400px] md:max-w-none md:h-auto md:aspect-square mx-auto"
              />
            </motion.div>

            {/* Project Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <ProjectCard
                project={project3}
                onClick={() => onSelectProject?.(project3.title)}
                aspectHeight="w-full max-w-[400px] h-[400px] md:max-w-none md:h-auto md:aspect-square mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
