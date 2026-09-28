import React, { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export interface CartModalProps {
  isOpen: boolean
  onClose: () => void
  onOpenQuote?: () => void
  onGoToShop?: () => void
}

export default function CartModal({
  isOpen,
  onClose,
  onGoToShop,
}: CartModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="cart-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Dialog Box with smooth spring-like scale & slide */}
          <motion.div
            key="cart-dialog"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[460px] sm:max-w-[480px] bg-white shadow-2xl rounded-none flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 sm:py-6 border-b border-[#e7e7e7]">
              <h3 className="font-['Mona_Sans:Bold',sans-serif] font-bold text-xl sm:text-2xl text-[#0e0e0e] tracking-tight">
                Your Cart
              </h3>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={onClose}
                className="p-1.5 text-[#0e0e0e] hover:opacity-60 transition-opacity cursor-pointer"
                aria-label="Close Cart"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Center Content */}
            <div className="px-6 sm:px-8 py-16 sm:py-20 flex flex-col items-center justify-center text-center space-y-6 sm:space-y-7">
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.3 }}
                className="text-base sm:text-lg font-medium text-[#0e0e0e] font-['Mona_Sans:Medium',sans-serif]"
              >
                No items found.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14, duration: 0.3 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  onClose()
                  if (onGoToShop) {
                    onGoToShop()
                  }
                }}
                className="group inline-flex items-center justify-center gap-2.5 bg-[#0e0e0e] hover:bg-[#222222] text-white font-['Mona_Sans:Bold',sans-serif] font-bold text-sm sm:text-base px-8 sm:px-9 py-3.5 sm:py-4 rounded-full transition-all cursor-pointer shadow-md hover:shadow-lg"
              >
                <span>Go to shop</span>
                <svg
                  className="w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform duration-200 group-hover:translate-x-1.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
