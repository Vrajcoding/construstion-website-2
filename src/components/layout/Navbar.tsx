import React, { useState, useRef, useEffect } from "react"
import Logo from "../common/Logo"
import { navLeftItems, navRightItems, megaMenuData } from "../../data/siteData"

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
  const [mobilePagesAccordionOpen, setMobilePagesAccordionOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const isDark = theme === "dark"
  const isWhite = theme === "white"

  const headerBg = isDark
    ? "bg-[#0e0e0e] text-white border-none shadow-none"
    : isWhite
      ? "bg-white text-[#0e0e0e] border-none shadow-none"
      : "bg-[#ffd43e] text-[#0e0e0e]"

  const navTextColor = isDark ? "text-white" : "text-[#0e0e0e]"
  const activeUnderline = isDark ? "bg-[#ffd43e]" : "bg-[#0e0e0e]"

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
    href: string
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
    link: { label: string; href: string; route?: string; isQuote?: boolean }
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
    <header className={`${headerBg} w-full relative z-40 transition-colors`}>
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between py-6 sm:py-7 lg:py-8 min-h-[96px] sm:min-h-[108px]">
          {/* Desktop Left Navigation Links */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLeftItems.map((item) => {
              const isActive =
                item.label.toLowerCase() === currentPage.toLowerCase()
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.label, item.href)}
                  className={`font-['Mona_Sans:Medium',sans-serif] font-medium text-[16px] tracking-[0.96px] ${navTextColor} hover:opacity-75 transition-opacity uppercase relative py-1.5 ${isActive ? "font-bold" : ""
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2px] ${activeUnderline}`}
                    />
                  )}
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
          <nav className="hidden lg:flex items-center gap-10">
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
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${pagesDropdownOpen ? "rotate-180" : ""
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

                    {/* Mega Menu Dropdown */}
                    {pagesDropdownOpen && (
                      <div
                        className="absolute top-full -right-48 lg:-right-60 xl:-right-72 mt-3 w-[880px] lg:w-[940px] xl:w-[980px] max-w-[calc(100vw-32px)] bg-white text-[#0e0e0e] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] p-8 sm:p-10 lg:p-12 z-50 animate-in fade-in slide-in-from-top-2 duration-150 rounded-none border border-black/5 cursor-default select-none"
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
                                    onClick={(e) => handleMegaMenuClick(e, link)}
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
                                    onClick={(e) => handleMegaMenuClick(e, link)}
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
                                    onClick={(e) => handleMegaMenuClick(e, link)}
                                    className={`font-['Mona_Sans:Medium',sans-serif] text-[14px] sm:text-[15px] tracking-[0.8px] text-[#0e0e0e] hover:text-[#ffd43e] transition-colors uppercase cursor-pointer text-left ${link.isBold ? "font-bold" : "font-medium"
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
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.label, item.href)}
                  className={`font-['Mona_Sans:Medium',sans-serif] font-medium text-[16px] tracking-[0.96px] ${navTextColor} hover:opacity-75 transition-opacity uppercase relative py-1 ${isActive ? "font-bold" : ""
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2px] ${activeUnderline}`}
                    />
                  )}
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

          {/* Mobile Menu & Cart Controls */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={onOpenCart}
              className={`flex items-center gap-1 text-sm font-semibold px-3 py-1.5 rounded-full ${isDark ? "bg-white/10 text-white" : "bg-black/5 text-[#0e0e0e]"
                }`}
            >
              <span>CART</span>
              <span>({cartCount})</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none cursor-pointer ${isDark
                  ? "text-white hover:bg-white/10"
                  : "text-[#0e0e0e] hover:bg-black/5"
                }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden py-4 border-t flex flex-col gap-3 animate-in fade-in duration-200 ${isDark ? "border-white/10" : "border-black/10"
              }`}
          >
            {navLeftItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  setMobileMenuOpen(false)
                  handleLinkClick(e, item.label, item.href)
                }}
                className={`px-2 py-2 text-base font-semibold tracking-wider rounded-lg uppercase ${isDark
                    ? "text-white hover:bg-white/10"
                    : "text-[#0e0e0e] hover:bg-black/5"
                  }`}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Pages Accordion */}
            <div className="border-t border-black/10 dark:border-white/10 pt-2">
              <button
                onClick={() => setMobilePagesAccordionOpen(!mobilePagesAccordionOpen)}
                className={`w-full flex items-center justify-between px-2 py-2 text-base font-semibold tracking-wider rounded-lg uppercase ${isDark
                    ? "text-white hover:bg-white/10"
                    : "text-[#0e0e0e] hover:bg-black/5"
                  }`}
              >
                <span>PAGES</span>
                <svg
                  className={`w-4 h-4 transition-transform ${mobilePagesAccordionOpen ? "rotate-180" : ""
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {mobilePagesAccordionOpen && (
                <div className="pl-4 pr-2 py-2 flex flex-col gap-2 bg-black/5 dark:bg-white/5 rounded-lg mt-1">
                  <span className="text-xs font-bold text-neutral-500 uppercase mt-1">
                    MAIN PAGES
                  </span>
                  {[
                    ...megaMenuData.mainPages.column1,
                    ...megaMenuData.mainPages.column2,
                    ...megaMenuData.mainPages.column3,
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleMegaMenuClick(e, link)}
                      className="py-1 text-sm font-medium hover:text-[#ffd43e] uppercase"
                    >
                      {link.label}
                    </a>
                  ))}

                  <span className="text-xs font-bold text-neutral-500 uppercase mt-3">
                    UTILITY PAGES
                  </span>
                  {megaMenuData.utilityPages.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleMegaMenuClick(e, link)}
                      className="py-1 text-sm font-medium hover:text-[#ffd43e] uppercase"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {navRightItems
              .filter((item) => !item.hasDropdown)
              .map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false)
                    handleLinkClick(e, item.label, item.href)
                  }}
                  className={`px-2 py-2 text-base font-semibold tracking-wider rounded-lg uppercase ${isDark
                      ? "text-white hover:bg-white/10"
                      : "text-[#0e0e0e] hover:bg-black/5"
                    }`}
                >
                  {item.label}
                </a>
              ))}

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenQuote?.()
                }}
                className="w-full py-3 bg-[#ffd43e] text-[#0e0e0e] font-bold rounded-full text-center cursor-pointer"
              >
                Get a quote ↗
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

