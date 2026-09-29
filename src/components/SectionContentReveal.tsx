'use client'

import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

type SectionContentRevealProps = {
  children: ReactNode
  className?: string
}

export default function SectionContentReveal({ children, className = '' }: SectionContentRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const context = gsap.context(() => {
      const elements = Array.from(
        containerRef.current?.querySelectorAll<HTMLElement>('[data-content-reveal]') ?? [],
      )

      if (elements.length === 0) return

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(elements, { opacity: 1, y: 0, scale: 1 })
        return
      }

      const isMobile = window.matchMedia('(max-width: 767px)').matches

      elements.forEach((element, index) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: isMobile ? 22 : 42,
            scale: isMobile ? 1 : 0.975,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: isMobile ? 0.65 : 0.95,
            delay: (index % 3) * 0.07,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: isMobile ? 'top 94%' : 'top 88%',
              end: 'bottom 10%',
              toggleActions: 'restart reset restart reset',
            },
          },
        )
      })
    }, containerRef)

    return () => context.revert()
  }, [])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
