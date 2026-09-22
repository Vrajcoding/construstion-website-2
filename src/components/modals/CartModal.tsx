import React from "react"
import Button from "../common/Button"

export interface CartModalProps {
  isOpen: boolean
  onClose: () => void
  onOpenQuote?: () => void
}

export default function CartModal({
  isOpen,
  onClose,
  onOpenQuote,
}: CartModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-0 sm:pl-6">
        <div className="w-full sm:w-[420px] max-w-full bg-white shadow-2xl flex flex-col justify-between p-6 sm:p-8 animate-in slide-in-from-right duration-300">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffd43e]" />
                <h3 className="font-['Mona_Sans:Bold',sans-serif] font-bold text-xl uppercase tracking-wider text-[#0e0e0e]">
                  Your Cart
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition-colors"
                aria-label="Close Cart"
              >
                <svg
                  className="w-4 h-4"
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
              </button>
            </div>

            {/* Empty State */}
            <div className="py-20 text-center space-y-4">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto text-neutral-400">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-[#0e0e0e]">
                Your cart is currently empty
              </h4>
              <p className="text-sm text-neutral-500 max-w-xs mx-auto">
                Looking for contracting packages or consultations? Request a
                personalized quote today.
              </p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="space-y-3 pt-6 border-t border-neutral-100">
            <Button
              variant="primary"
              size="lg"
              showArrow
              className="w-full"
              onClick={() => {
                onClose()
                onOpenQuote?.()
              }}
            >
              Request a Quote
            </Button>
            <Button
              variant="outline"
              size="md"
              className="w-full"
              onClick={onClose}
            >
              Continue Browsing
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
