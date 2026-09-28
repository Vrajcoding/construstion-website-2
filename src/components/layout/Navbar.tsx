import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "../common/Logo"
import Button from "../common/Button"
import { navLeftItems, navRightItems, megaMenuData } from "../../data/siteData"
import { MegaMenuLink } from "../../types"

export interface NavbarProps {
  theme?: "yellow" | "white" | "dark"
  currentPage?: string
  onNavigate?: (page: string) => void
  cartCount?: number
  onOpenCart?: () => void
  onOpenQuote?: () => void
}

export default function Navbar({
  theme = "yellow",
  currentPage = "home",
  onNavigate,
  cartCount = 0,
  onOpenCart,
  onOpenQuote,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false)
  const [mobilePagesAccordionOpen, setMobilePagesAccordionOpen] =
    useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const isDark = theme === "dark"
  const isWhite = theme === "white"

  const headerBg = isDark
    ? "bg-[#0e0e0e] text-white border-none shadow-none"
    : isWhite
      ? "bg-white text-[#0e0e0e] border-none shadow-none"
      : "bg-[#ffd43e] text-[#0e0e0e] border-none shadow-none"

  const navTextColor = isDark ? "text-white" : "text-[#0e0e0e]"

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setPagesDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    label: string,
    href: string,
  ) => {
    const lower = label.toLowerCase()
    if (
      lower === "work" ||
      lower === "home" ||
      lower === "services" ||
      lower === "contact" ||
      lower === "about" ||
      lower === "blog"
    ) {
      e.preventDefault()
      onNavigate?.(lower)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (onNavigate && currentPage !== "home" && href.startsWith("#")) {
      e.preventDefault()
      onNavigate("home")
      setTimeout(() => {
        const id = href.replace("#", "")
        const el = document.getElementById(id)
        el?.scrollIntoView({ behavior: "smooth" })
      }, 50)
    }
  }

  const handleMegaMenuClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: MegaMenuLink,
  ) => {
    e.preventDefault()
    setPagesDropdownOpen(false)
    setMobileMenuOpen(false)

    if (link.isQuote) {
      onOpenQuote?.()
      return
    }

    if (link.route) {
      onNavigate?.(link.route)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <header className={`${headerBg} w-full relative z-40 transition-colors border-none shadow-none`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5 sm:py-6 lg:py-8 min-h-[84px] sm:min-h-[96px]">
          {/* Desktop Left Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10">
            {navLeftItems.map((item) => {
              const isActive =
                item.label.toLowerCase() === currentPage.toLowerCase()
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.label, item.href)}
                  className={`font-['Mona_Sans:Medium',sans-serif] font-medium text-[16px] tracking-[0.96px] ${navTextColor} hover:opacity-75 transition-opacity uppercase relative py-1.5 border-none ${
                    isActive ? "font-bold" : ""
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* Centered Geometric Logo */}
          <div className="flex items-center justify-center">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                onNavigate?.("home")
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              aria-label="Construcfy Home"
            >
              <Logo
                theme={isDark ? "yellow" : "dark"}
                showText={false}
                size="md"
              />
            </a>
          </div>

          {/* Desktop Right Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10">
            {navRightItems.map((item) => {
              const isActive =
                item.label.toLowerCase() === currentPage.toLowerCase()

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setPagesDropdownOpen(true)}
                    onMouseLeave={() => setPagesDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 font-['Mona_Sans:Medium',sans-serif] font-medium text-[16px] tracking-[0.96px] ${navTextColor} hover:opacity-75 transition-opacity uppercase cursor-pointer py-1.5`}
                      onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                      aria-expanded={pagesDropdownOpen}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          pagesDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Mega Menu Dropdown with Smooth Animation */}
                    <AnimatePresence>
                      {pagesDropdownOpen && (
                        <motion.div
                          key="desktop-mega-menu"
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full right-0 mt-3 w-[820px] max-w-[calc(100vw-32px)] bg-white text-[#0e0e0e] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] p-6 sm:p-8 lg:p-10 z-50 rounded-none border-none cursor-default select-none"
                        >
                        <div className="grid grid-cols-12 gap-8 lg:gap-12">
                          {/* MAIN PAGES (3 Columns - 9 cols) */}
                          <div className="col-span-12 lg:col-span-9">
                            <h3 className="font-['Mona_Sans:Medium',sans-serif] font-bold text-[18px] sm:text-[19px] tracking-[1.2px] text-[#0e0e0e] uppercase mb-7 sm:mb-8">
                              MAIN PAGES
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                              {/* Column 1 */}
                              <div className="flex flex-col space-y-3.5">
                                {megaMenuData.mainPages.column1.map((link) => (
                                  <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) =>
                                      handleMegaMenuClick(e, link)
                                    }
                                    className="font-['Mona_Sans:Medium',sans-serif] text-[14px] sm:text-[15px] font-medium tracking-[0.8px] text-[#0e0e0e] hover:text-[#ffd43e] transition-colors uppercase cursor-pointer text-left"
                                  >
                                    {link.label}
                                  </a>
                                ))}
                              </div>

                              {/* Column 2 */}
                              <div className="flex flex-col space-y-3.5">
                                {megaMenuData.mainPages.column2.map((link) => (
                                  <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) =>
                                      handleMegaMenuClick(e, link)
                                    }
                                    className="font-['Mona_Sans:Medium',sans-serif] text-[14px] sm:text-[15px] font-medium tracking-[0.8px] text-[#0e0e0e] hover:text-[#ffd43e] transition-colors uppercase cursor-pointer text-left"
                                  >
                                    {link.label}
                                  </a>
                                ))}
                              </div>

                              {/* Column 3 */}
                              <div className="flex flex-col space-y-3.5">
                                {megaMenuData.mainPages.column3.map((link) => (
                                  <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) =>
                                      handleMegaMenuClick(e, link)
                                    }
                                    className={`font-['Mona_Sans:Medium',sans-serif] text-[14px] sm:text-[15px] tracking-[0.8px] text-[#0e0e0e] hover:text-[#ffd43e] transition-colors uppercase cursor-pointer text-left ${
                                      link.isBold ? "font-bold" : "font-medium"
                                    }`}
                                  >
                                    {link.label}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* UTILITY PAGES (1 Column - 3 cols) */}
                          <div className="col-span-12 lg:col-span-3">
                            <h3 className="font-['Mona_Sans:Medium',sans-serif] font-bold text-[18px] sm:text-[19px] tracking-[1.2px] text-[#0e0e0e] uppercase mb-7 sm:mb-8">
                              UTILITY PAGES
                            </h3>

                            <div className="flex flex-col space-y-3.5">
                              {megaMenuData.utilityPages.map((link) => (
                                <a
                                  key={link.label}
                                  href={link.href}
                                  onClick={(e) => handleMegaMenuClick(e, link)}
                                  className="font-['Mona_Sans:Medium',sans-serif] text-[14px] sm:text-[15px] font-medium tracking-[0.8px] text-[#0e0e0e] hover:text-[#ffd43e] transition-colors uppercase cursor-pointer text-left"
                                >
                                  {link.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.label, item.href)}
                  className={`font-['Mona_Sans:Medium',sans-serif] font-medium text-[16px] tracking-[0.96px] ${navTextColor} hover:opacity-75 transition-opacity uppercase relative py-1 border-none ${
                    isActive ? "font-bold" : ""
                  }`}
                >
                  {item.label}
                </a>
              )
            })}

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className={`flex items-center gap-1 font-['Mona_Sans:Medium',sans-serif] font-medium text-[16px] tracking-[0.96px] ${navTextColor} hover:opacity-75 transition-opacity uppercase cursor-pointer`}
              aria-label="Open Shopping Cart"
            >
              <span>CART</span>
              <span>({cartCount})</span>
            </button>
          </nav>

          {/* Mobile Menu & Cart Controls - Clean Text & Animated 2-Line Hamburger */}
          <div className="flex items-center gap-5 lg:hidden">
            <motion.button
              whileTap={{ scale: 0.94 }}
              whileHover={{ opacity: 0.75 }}
              onClick={onOpenCart}
              className={`font-['Mona_Sans:Medium',sans-serif] font-medium text-[15px] sm:text-[16px] tracking-[0.96px] ${navTextColor} transition-opacity uppercase cursor-pointer select-none`}
              aria-label="Open Shopping Cart"
            >
              CART({cartCount})
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-all duration-200 hover:opacity-80 focus:outline-none cursor-pointer ${navTextColor} flex items-center justify-center rounded-full`}
              aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            >
              <div className="w-6 h-5 relative flex items-center justify-center">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4.5 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-5 h-[2px] ${isDark ? "bg-white" : "bg-[#0e0e0e]"} absolute rounded-full`}
                  style={{ transformOrigin: "center" }}
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4.5 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-5 h-[2px] ${isDark ? "bg-white" : "bg-[#0e0e0e]"} absolute rounded-full`}
                  style={{ transformOrigin: "center" }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Dim Backdrop that smoothly fades in behind the dropdown in same window without intersecting header */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-30 lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Dropdown - Ultra-smooth glide directly beneath navbar with zero borders */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-nav-dropdown"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 z-40 bg-white text-[#0e0e0e] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] border-none overflow-hidden lg:hidden"
          >
            <div className="px-6 py-6 pb-8 flex flex-col space-y-4 max-h-[calc(100dvh-100px)] overflow-y-auto">
              <a
                href="#home"
                onClick={(e) => {
                  setMobileMenuOpen(false)
                  handleLinkClick(e, "HOME", "#home")
                }}
                className="font-['Mona_Sans:Medium',sans-serif] font-medium text-[16px] tracking-[0.08em] text-[#0e0e0e] hover:text-[#ffd43e] uppercase transition-colors py-1.5 flex items-center justify-between border-none"
              >
                <span>HOME</span>
                {currentPage.toLowerCase() === "home" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffd43e]" />
                )}
              </a>

              <a
                href="#about"
                onClick={(e) => {
                  setMobileMenuOpen(false)
                  handleLinkClick(e, "ABOUT", "#about")
                }}
                className="font-['Mona_Sans:Medium',sans-serif] font-medium text-[16px] tracking-[0.08em] text-[#0e0e0e] hover:text-[#ffd43e] uppercase transition-colors py-1.5 flex items-center justify-between border-none"
              >
                <span>ABOUT</span>
                {currentPage.toLowerCase() === "about" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffd43e]" />
                )}
              </a>

              <a
                href="#blog"
                onClick={(e) => {
                  setMobileMenuOpen(false)
                  handleLinkClick(e, "BLOG", "#blog")
                }}
                className="font-['Mona_Sans:Medium',sans-serif] font-medium text-[16px] tracking-[0.08em] text-[#0e0e0e] hover:text-[#ffd43e] uppercase transition-colors py-1.5 flex items-center justify-between border-none"
              >
                <span>BLOG</span>
                {currentPage.toLowerCase() === "blog" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffd43e]" />
                )}
              </a>

              {/* PAGES ∨ with Full Mega Menu Details on Mobile */}
              <div>
                <button
                  onClick={() =>
                    setMobilePagesAccordionOpen(!mobilePagesAccordionOpen)
                  }
                  className="w-full flex items-center justify-between font-['Mona_Sans:Medium',sans-serif] font-medium text-[16px] tracking-[0.08em] text-[#0e0e0e] hover:text-[#ffd43e] uppercase transition-colors cursor-pointer text-left py-1.5 border-none"
                >
                  <span className="flex items-center gap-1.5">
                    <span>PAGES</span>
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        mobilePagesAccordionOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {mobilePagesAccordionOpen && (
                    <motion.div
                      key="mobile-pages-dropdown"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 pt-2 pb-2 flex flex-col space-y-6">
                        {/* MAIN PAGES (All 3 Columns matching Large Display) */}
                        <div className="space-y-3">
                          <div className="font-['Mona_Sans:Bold',sans-serif] font-bold text-[14px] sm:text-[15px] tracking-[1.2px] text-[#0e0e0e] uppercase">
                            MAIN PAGES
                          </div>
                          <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 pl-1">
                            {[
                              ...megaMenuData.mainPages.column1,
                              ...megaMenuData.mainPages.column2,
                              ...megaMenuData.mainPages.column3,
                            ].map((link, idx) => (
                              <a
                                key={`${link.label}-${idx}`}
                                href={link.href}
                                onClick={(e) => handleMegaMenuClick(e, link)}
                                className={`font-['Mona_Sans:Medium',sans-serif] text-[13px] tracking-[0.4px] text-[#555555] hover:text-[#0e0e0e] uppercase transition-colors py-0.5 border-none ${
                                  link.isBold ? "font-bold text-[#0e0e0e]" : ""
                                }`}
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* UTILITY PAGES (Matching Large Display) */}
                        <div className="space-y-3 pt-2">
                          <div className="font-['Mona_Sans:Bold',sans-serif] font-bold text-[14px] sm:text-[15px] tracking-[1.2px] text-[#0e0e0e] uppercase">
                            UTILITY PAGES
                          </div>
                          <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 pl-1">
                            {megaMenuData.utilityPages.map((link) => (
                              <a
                                key={link.label}
                                href={link.href}
                                onClick={(e) => handleMegaMenuClick(e, link)}
                                className="font-['Mona_Sans:Medium',sans-serif] text-[13px] tracking-[0.4px] text-[#555555] hover:text-[#0e0e0e] uppercase transition-colors py-0.5 border-none"
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#services"
                onClick={(e) => {
                  setMobileMenuOpen(false)
                  handleLinkClick(e, "SERVICES", "#services")
                }}
                className="font-['Mona_Sans:Medium',sans-serif] font-medium text-[16px] tracking-[0.08em] text-[#0e0e0e] hover:text-[#ffd43e] uppercase transition-colors py-1.5 flex items-center justify-between border-none"
              >
                <span>SERVICES</span>
                {currentPage.toLowerCase() === "services" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffd43e]" />
                )}
              </a>

              <a
                href="#work"
                onClick={(e) => {
                  setMobileMenuOpen(false)
                  handleLinkClick(e, "WORK", "#work")
                }}
                className="font-['Mona_Sans:Medium',sans-serif] font-medium text-[16px] tracking-[0.08em] text-[#0e0e0e] hover:text-[#ffd43e] uppercase transition-colors py-1.5 flex items-center justify-between border-none"
              >
                <span>WORK</span>
                {currentPage.toLowerCase() === "work" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffd43e]" />
                )}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
