import React from "react"
import {
  BlogHeroSection,
  BlogCategoriesSection,
  BlogNewsletterSection,
  BlogLatestPostsSection,
} from "../sections/blog"

export interface BlogPageProps {
  onOpenQuote?: () => void
  onNavigate?: (page: string) => void
}

export default function BlogPage({ onNavigate }: BlogPageProps) {
  const handleCategoryClick = (category: string) => {
    const el = document.getElementById("latest-posts")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="bg-white min-h-screen text-[#0e0e0e] selection:bg-[#ffd43e] selection:text-[#0e0e0e]">
      {/* 1. Hero & Featured Articles ("Articles & resources") */}
      <BlogHeroSection />

      {/* 2. Articles by Category (3-Column Lineart Grid) */}
      <BlogCategoriesSection onCategoryClick={handleCategoryClick} />

      {/* 3. Subscribe to our Newsletter (Yellow Card with Overhanging Typewriter) */}
      <BlogNewsletterSection />

      {/* 4. Latest Posts with Category Filter Tabs */}
      <div id="latest-posts">
        <BlogLatestPostsSection />
      </div>
    </div>
  )
}
