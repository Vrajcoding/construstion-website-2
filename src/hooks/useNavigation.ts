import { useState, useEffect, useCallback } from "react"

export type PageRoute = "home" | "about" | "blog" | "services" | "work" | "contact"

export function useNavigation() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash === "#about") return "about"
      if (hash === "#blog") return "blog"
      if (hash === "#work") return "work"
      if (hash === "#services-page" || hash === "#services") return "services"
      if (hash === "#contact") return "contact"
    }
    return "home"
  })

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === "#about") {
        setCurrentPage("about")
      } else if (hash === "#blog") {
        setCurrentPage("blog")
      } else if (hash === "#work") {
        setCurrentPage("work")
      } else if (hash === "#services-page" || hash === "#services") {
        setCurrentPage("services")
      } else if (hash === "#contact") {
        setCurrentPage("contact")
      } else if (hash === "#home" || hash === "") {
        setCurrentPage("home")
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const navigate = useCallback((page: string) => {
    const lower = page.toLowerCase() as PageRoute
    setCurrentPage(lower)
    if (lower === "about") {
      window.location.hash = "about"
    } else if (lower === "blog") {
      window.location.hash = "blog"
    } else if (lower === "work") {
      window.location.hash = "work"
    } else if (lower === "services") {
      window.location.hash = "services-page"
    } else if (lower === "contact") {
      window.location.hash = "contact"
    } else {
      window.location.hash = "home"
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return {
    currentPage,
    navigate,
  }
}

export default useNavigation
