import React from "react"
import SectionTag from "../common/SectionTag"
import Button from "../common/Button"
import { blogPostsData } from "../../data/siteData"

export interface BlogSectionProps {
  onSelectArticle?: (title: string) => void
}

export default function BlogSection({ onSelectArticle }: BlogSectionProps) {
  return (
    <section id="blog" className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
        {/* Centered Section Header */}
        <div className="text-center space-y-6 max-w-2xl mx-auto mb-16 sm:mb-20">
          <SectionTag text="BLOG" className="justify-center" />
          <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.12] sm:leading-[70px]">
            Latest news & articles
          </h2>
        </div>

        {/* 3-Card Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {blogPostsData.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectArticle?.(post.title)}
              className="group cursor-pointer flex flex-col justify-between transition-all"
            >
              {/* Card Body */}
              <div className="flex flex-col">
                {/* Sharp Rectangle Image */}
                <div className="relative w-full h-[260px] sm:h-[300px] lg:h-[340px] overflow-hidden bg-neutral-900 rounded-none mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500 rounded-none"
                  />
                </div>

                {/* Title & Excerpt */}
                <div className="flex flex-col gap-[11px] mb-6">
                  <h3 className="text-2xl sm:text-[24px] font-['Mona_Sans:Semi_Bold',sans-serif] font-semibold text-[#0e0e0e] group-hover:text-neutral-700 leading-[34px] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#646464] text-base sm:text-[18px] font-['Mona_Sans:Medium',sans-serif] font-medium leading-[30px]">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Horizontal Divider Line & Footer */}
              <div className="mt-auto pt-6 border-t border-[#e7e7e7] flex items-center justify-between">
                <div className="flex items-center text-[15px] sm:text-[16px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-[0.96px] uppercase">
                  <span>{post.category || "REMODELING"}</span>
                  <span className="inline-block w-7 h-px bg-[#939393] mx-3" />
                  <span>{post.date}</span>
                </div>

                <div className="text-[#0e0e0e] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Browse All Articles Action */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => onSelectArticle?.("All Articles")}
          >
            Browse all articles
          </Button>
        </div>
      </div>
    </section>
  )
}

