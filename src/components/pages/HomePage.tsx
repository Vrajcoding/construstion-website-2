import React from "react"
import {
  HeroSection,
  StatsSection,
  AboutSection,
  ServicesSection,
  VideoSection,
  CtaBannerSection,
  ProjectsSection,
  TestimonialsSection,
  BlogSection,
} from "../sections"

export interface HomePageProps {
  onOpenQuote?: (serviceName?: string) => void
  onSelectService?: (service: string) => void
  onSelectProject?: (project: string) => void
  onBrowseAllProjects?: () => void
  onPlayVideo?: () => void
  onSelectArticle?: (article: string) => void
}

export default function HomePage({
  onOpenQuote,
  onSelectService,
  onSelectProject,
  onBrowseAllProjects,
  onPlayVideo,
  onSelectArticle,
}: HomePageProps) {
  return (
    <>
      {/* 1. Hero Banner with Overlapping Headline & Extending Photo */}
      <HeroSection onOpenQuote={onOpenQuote} />

      {/* 2. Key Metric Statistics */}
      <StatsSection />

      {/* 3. About Us & Reliable Team */}
      <AboutSection onOpenQuote={onOpenQuote} />

      {/* 4. Comprehensive Services */}
      <ServicesSection
        onOpenQuote={onOpenQuote}
        onSelectService={onSelectService}
      />

      {/* 5. Video & Quality Showcase + Partner Logos */}
      <VideoSection onPlayVideo={onPlayVideo} onOpenQuote={onOpenQuote} />

      {/* 6. Mid-Page Yellow CTA Promo Banner */}
      <CtaBannerSection onOpenQuote={onOpenQuote} />

      {/* 7. Recent Projects Portfolio */}
      <ProjectsSection
        onSelectProject={onSelectProject}
        onBrowseAll={onBrowseAllProjects}
        onOpenQuote={onOpenQuote}
      />

      {/* 8. Client Testimonials */}
      <TestimonialsSection />

      {/* 9. Latest Blog News & Articles */}
      <BlogSection onSelectArticle={onSelectArticle} />
    </>
  )
}
