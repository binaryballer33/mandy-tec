"use client"

import { useEffect, useState } from "react"

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const sections = [
      "naics",
      "technical-capabilities",
      "training",
      "capabilities",
      "leadership",
      "services",
      "contact",
    ]

    const observers = sections.map((sectionId) => {
      const element = document.getElementById(sectionId)
      if (!element) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId)
            }
          })
        },
        {
          rootMargin: "-20% 0px -60% 0px", // Trigger when section is 20% from top
          threshold: 0.1,
        },
      )

      observer.observe(element)
      return observer
    })

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect()
      })
    }
  }, [])

  return activeSection
}
