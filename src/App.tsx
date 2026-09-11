import React from "react"
import { Navbar, Footer, FloatingBadge } from "./components/layout"
import {
  HomePage,
  AboutPage,
  BlogPage,
  ServicesPage,
  WorkPage,
  ContactPage,
} from "./components/pages"
import { QuoteModal, CartModal, VideoModal } from "./components/modals"
import { useNavigation, useModals } from "./hooks"

export default function App() {
  const { currentPage, navigate } = useNavigation()
  const {
    isQuoteOpen,
    isCartOpen,
    isVideoOpen,
    selectedService,
    cartCount,
    openQuote,
    closeQuote,
    openCart,
    closeCart,
    openVideo,
    closeVideo,
  } = useModals()

  // Determine Navbar theme based on active page route
  const navTheme =
    currentPage === "contact" || currentPage === "blog"
      ? "dark"
      : currentPage === "home" || currentPage === "about"
        ? "yellow"
        : "white"

  return (
    <div className="min-h-screen bg-white text-[#0e0e0e] flex flex-col font-['Mona_Sans:Regular',sans-serif] selection:bg-[#ffd43e] selection:text-[#0e0e0e] overflow-x-clip">
      {/* 1. Header Navigation Bar */}
      <Navbar
        theme={navTheme}
        currentPage={currentPage}
        onNavigate={navigate}
        cartCount={cartCount}
        onOpenCart={openCart}
        onOpenQuote={() => openQuote()}
      />

      {/* 2. Main Page View Route Composition */}
      <main className="flex-1 w-full overflow-x-clip">
        {currentPage === "about" ? (
          <AboutPage
            onOpenQuote={() => openQuote()}
            onNavigate={navigate}
          />
        ) : currentPage === "blog" ? (
          <BlogPage
            onOpenQuote={() => openQuote()}
            onNavigate={navigate}
          />
        ) : currentPage === "contact" ? (
          <ContactPage onOpenQuote={() => openQuote()} />
        ) : currentPage === "services" ? (
          <ServicesPage
            onSelectService={(service) => openQuote(service)}
            onOpenQuote={() => openQuote()}
          />
        ) : currentPage === "work" ? (
          <WorkPage
            onSelectProject={(project) => openQuote(`Project: ${project}`)}
            onOpenQuote={() => openQuote()}
          />
        ) : (
          <HomePage
            onOpenQuote={(service) => openQuote(service)}
            onSelectService={(service) => openQuote(service)}
            onSelectProject={(project) => openQuote(`Project: ${project}`)}
            onBrowseAllProjects={() => navigate("work")}
            onPlayVideo={openVideo}
            onSelectArticle={(article) =>
              openQuote(`Inquiry regarding ${article}`)
            }
          />
        )}
      </main>

      {/* 3. Global Dark Footer */}
      <Footer
        onOpenQuote={() => openQuote()}
        onNavigate={navigate}
      />

      {/* 4. Global Floating Badge */}
      <FloatingBadge />

      {/* 5. Interactive Dialog Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={closeQuote}
        defaultService={selectedService}
      />

      <CartModal
        isOpen={isCartOpen}
        onClose={closeCart}
        onOpenQuote={() => openQuote()}
      />

      <VideoModal isOpen={isVideoOpen} onClose={closeVideo} />
    </div>
  )
}
