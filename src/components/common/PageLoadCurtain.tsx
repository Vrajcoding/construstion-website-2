import React, { useState, useEffect } from "react"
import StaircaseAnimation from "./StaircaseAnimation"

export interface PageLoadCurtainProps {
  onComplete?: () => void
  duration?: number
  delay?: number
}

export default function PageLoadCurtain({
  onComplete,
}: PageLoadCurtainProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  return (
    <StaircaseAnimation
      isCurtain={true}
      useGrid={true}
      showReplay={false}
      onComplete={() => {
        setIsVisible(false)
        onComplete?.()
      }}
    />
  )
}
