import React, { useState } from "react"
import { blogPostsData } from "../../../data/siteData"

export default function BlogLatestPostsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL")

  const categories = ["ALL", "REMODELING", "DESIGN", "CONSTRUCTION"]

  const filteredPosts =
    activeCategory === "ALL"
      ? blogPostsData
      : blogPostsData.filter(
        (post) =>
          post.category?.toUpperCase() === activeCategory.toUpperCase()
      )

  return (
    <section className="bg-white py-20 sm:py-28 lg:py-[160px]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Title on Left, Filter Tabs on Right */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-10 sm:pb-14 border-b border-[#e7e7e7]">
          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-['Mona_Sans:Medium',sans-serif] font-medium text-[#0e0e0e] tracking-tight leading-[1.08]">
            Latest posts
          </h2>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-6 sm:gap-10 overflow-x-auto pb-2 select-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[15px] sm:text-[16px] font-['Mona_Sans:Medium',sans-serif] tracking-[1px] uppercase transition-all cursor-pointer whitespace-nowrap relative py-1 ${isActive
                      ? "text-[#0e0e0e] font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#0e0e0e]"
                      : "text-[#888888] hover:text-[#0e0e0e] font-medium"
                    }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* 3-Column Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-12 sm:mt-16">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="group flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Post Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-900 shadow-md">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-[26px] font-['Mona_Sans:Medium',sans-serif] font-bold text-[#0e0e0e] mt-6 mb-3 group-hover:text-neutral-700 transition-colors leading-[1.25]">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#646464] text-[16px] font-['Mona_Sans:Regular',sans-serif] leading-[26px]">
                  {post.excerpt}
                </p>
              </div>

              {/* Footer Meta Row: Category & Date with Arrow */}
              <div className="pt-6 mt-6 border-t border-[#e7e7e7] flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 text-[13px] sm:text-[14px] font-['Mona_Sans:Medium',sans-serif] font-bold tracking-[1px] uppercase text-[#0e0e0e]">
                  <span>{post.category}</span>
                  <span className="w-5 h-[1.5px] bg-[#0e0e0e]/40 rounded-full" />
                  <span className="font-['Mona_Sans:Regular',sans-serif] font-normal text-[#646464]">
                    {post.date}
                  </span>
                </div>

                <span className="text-[#0e0e0e] text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
