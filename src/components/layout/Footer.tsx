import React from "react"
import SocialIcons from "../common/SocialIcons"

export interface FooterProps {
  onOpenQuote?: () => void
  onNavigate?: (page: string) => void
}

export default function Footer({ onOpenQuote, onNavigate }: FooterProps) {
  const handleFooterLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    label: string,
    href: string
  ) => {
    const lower = label.toLowerCase()
    if (lower.includes("about") || lower.includes("team")) {
      e.preventDefault()
      onNavigate?.("about")
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (lower.includes("service")) {
      e.preventDefault()
      onNavigate?.("services")
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (lower.includes("project") || lower.includes("work")) {
      e.preventDefault()
      onNavigate?.("work")
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (lower.includes("contact") || lower.includes("quote")) {
      e.preventDefault()
      onNavigate?.("contact")
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (lower.includes("home")) {
      e.preventDefault()
      onNavigate?.("home")
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }
  const mainPagesCol1 = [
    { label: "HOME (SALES)", href: "#home" },
    { label: "HOME V1", href: "#home" },
    { label: "HOME V2", href: "#home" },
    { label: "HOME V3", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "SERVICES", href: "#services" },
    { label: "SERVICES SINGLE", href: "#services" },
  ]

  const mainPagesCol2 = [
    { label: "BLOG V2", href: "#blog" },
    { label: "BLOG V3", href: "#blog" },
    { label: "BLOG CATEGORY", href: "#blog" },
    { label: "BLOG POST", href: "#blog" },
    { label: "TEAM", href: "#about" },
    { label: "TEAM MEMBER", href: "#about" },
    { label: "PROJECTS", href: "#work" },
  ]

  const mainPagesCol3 = [
    { label: "CONTACT V1", href: "#contact" },
    { label: "CONTACT V2", href: "#contact" },
    { label: "CONTACT V3", href: "#contact" },
    { label: "SHOP", href: "#shop" },
    { label: "SHOP SINGLE", href: "#shop" },
    { label: "REQUEST A QUOTE", href: "#quote" },
    { label: "COMING SOON", href: "#coming-soon" },
  ]

  const utilityPages = [
    { label: "STYLE GUIDE", href: "#styleguide" },
    { label: "START HERE", href: "#starthere" },
    { label: "404 NOT FOUND", href: "#404" },
    { label: "PASSWORD PROTECTED", href: "#password" },
  ]

  return (
    <footer
      id="contact"
      className="bg-[#0e0e0e] text-white relative overflow-hidden"
    >
      {/* 2x2 Decorative Grid Pattern in Top-Right Corner */}
      <div
        className="absolute right-0 top-0 grid grid-cols-2 grid-rows-2 w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] pointer-events-none z-0"
        aria-hidden="true"
      >
        <div className="bg-white border border-white" />
        <div className="border border-transparent" />
        <div className="border border-transparent" />
        <div className="bg-white border border-white" />
      </div>

      <div className="max-w-[1268px] mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Top CTA Banner Row */}
        <div className="pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 sm:gap-10">
          <div className="max-w-[560px]">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-['Mona_Sans:Medium',sans-serif] font-medium text-white leading-[1.18] sm:leading-[52px] tracking-tight">
              Ready to pull the trigger? <br />
              Get a quote today
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <button
              onClick={onOpenQuote}
              className="bg-white text-[#0e0e0e] font-['Mona_Sans:Bold',sans-serif] font-bold text-base sm:text-[18px] px-8 sm:px-10 py-4.5 sm:py-5.5 rounded-[96px] inline-flex items-center gap-2 hover:bg-neutral-200 transition-all cursor-pointer whitespace-nowrap shadow-sm"
            >
              <span>Get a quote</span>
              <span className="text-lg leading-none">→</span>
            </button>

            <button
              onClick={onOpenQuote}
              className="bg-transparent border border-white/40 hover:border-white text-white font-['Mona_Sans:Regular',sans-serif] font-normal text-base sm:text-[18px] px-8 sm:px-10 py-4.5 sm:py-5.5 rounded-[96px] inline-flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
            >
              Contact us
            </button>
          </div>
        </div>

        {/* Main Footer Content with Top Border and Vertical Border */}
        <div className="border-t border-[#2f2f2f] flex flex-col lg:flex-row">
          {/* Left Column: Brand & Socials */}
          <div className="w-full lg:w-[340px] shrink-0 pr-0 lg:pr-10 py-12 lg:py-20 lg:border-r border-[#2f2f2f] flex flex-col justify-start">
            {/* Logo */}
            <a
              href="#home"
              className="inline-flex items-center gap-3 mb-5"
              aria-label="Construcfy Home"
            >
              <div className="w-[34px] h-[34px] relative shrink-0">
                <svg
                  viewBox="0 0 42 43"
                  fill="none"
                  className="w-full h-full block"
                >
                  <rect x="0" y="0.89" width="14" height="14" fill="#FFD43E" />
                  <rect x="28" y="0.89" width="14" height="14" fill="#FFD43E" />
                  <rect x="14" y="14.89" width="14" height="14" fill="#FFD43E" />
                  <rect x="0" y="28.89" width="14" height="14" fill="#FFD43E" />
                  <rect x="28" y="28.89" width="14" height="14" fill="#FFD43E" />
                </svg>
              </div>
              <span className="font-['Mona_Sans:Bold',sans-serif] font-bold text-2xl text-white tracking-tight">
                Construcfy X
              </span>
            </a>

            {/* Description */}
            <p className="text-[#c5c5c5] text-base sm:text-[18px] font-['Mona_Sans:Medium',sans-serif] font-medium leading-[28px] sm:leading-[30px] mb-6 max-w-[280px]">
              Lorem ipsum dolor sit amet consectetur non senectus velit.
            </p>

            {/* Social Icons */}
            <SocialIcons theme="light" size="sm" />
          </div>

          {/* Right Columns: Main Pages & Utility Pages */}
          <div className="flex-1 pl-0 lg:pl-12 py-12 lg:py-20 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
            {/* MAIN PAGES (Span 8 or 9 cols) */}
            <div className="md:col-span-8 lg:col-span-9">
              <h3 className="text-white text-[18px] sm:text-[20px] font-['Mona_Sans:Medium',sans-serif] font-medium tracking-[1.2px] uppercase mb-7">
                MAIN PAGES
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-6">
                {/* Subcol 1 */}
                <div className="space-y-[17px]">
                  {mainPagesCol1.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleFooterLink(e, item.label, item.href)}
                      className="block text-[#c5c5c5] hover:text-white text-[14px] sm:text-[15px] font-['Mona_Sans:Medium',sans-serif] font-medium tracking-[0.96px] uppercase leading-[18px] transition-colors cursor-pointer"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                {/* Subcol 2 */}
                <div className="space-y-[17px]">
                  {mainPagesCol2.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleFooterLink(e, item.label, item.href)}
                      className="block text-[#c5c5c5] hover:text-white text-[14px] sm:text-[15px] font-['Mona_Sans:Medium',sans-serif] font-medium tracking-[0.96px] uppercase leading-[18px] transition-colors cursor-pointer"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                {/* Subcol 3 */}
                <div className="space-y-[17px]">
                  {mainPagesCol3.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleFooterLink(e, item.label, item.href)}
                      className="block text-[#c5c5c5] hover:text-white text-[14px] sm:text-[15px] font-['Mona_Sans:Medium',sans-serif] font-medium tracking-[0.96px] uppercase leading-[18px] transition-colors cursor-pointer"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* UTILITY PAGES (Span 4 or 3 cols) */}
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="text-white text-[18px] sm:text-[20px] font-['Mona_Sans:Medium',sans-serif] font-medium tracking-[1.2px] uppercase mb-7">
                UTILITY PAGES
              </h3>

              <div className="space-y-[17px]">
                {utilityPages.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-[#c5c5c5] hover:text-white text-[14px] sm:text-[15px] font-['Mona_Sans:Medium',sans-serif] font-medium tracking-[0.96px] uppercase leading-[18px] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

