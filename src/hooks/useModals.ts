import { useState, useCallback } from "react"

export function useModals() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("General contracting")
  const [cartCount, setCartCount] = useState(0)

  const openQuote = useCallback((_serviceName?: string) => {
    // Quote modal popup disabled per user request
    setIsQuoteOpen(false)
  }, [])

  const closeQuote = useCallback(() => {
    setIsQuoteOpen(false)
  }, [])

  const openCart = useCallback(() => {
    setIsCartOpen(true)
  }, [])

  const closeCart = useCallback(() => {
    setIsCartOpen(false)
  }, [])

  const openVideo = useCallback(() => {
    setIsVideoOpen(true)
  }, [])

  const closeVideo = useCallback(() => {
    setIsVideoOpen(false)
  }, [])

  return {
    isQuoteOpen,
    isCartOpen,
    isVideoOpen,
    selectedService,
    cartCount,
    setCartCount,
    openQuote,
    closeQuote,
    openCart,
    closeCart,
    openVideo,
    closeVideo,
  }
}

export default useModals
