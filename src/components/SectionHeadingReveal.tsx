'use client'

import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

type SectionHeadingRevealProps = {
  children: ReactNode
  className?: string
}

export default function SectionHeadingReveal({ children, className = '' }: SectionHeadingRevealProps) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const context = gsap.context(() => {
      const elements = Array.from(
        containerRef.current?.querySelectorAll<HTMLElement>('[data-section-reveal]') ?? [],
      )

      if (elements.length === 0) return

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(elements, { opacity: 1, y: 0 })
        return
      }

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 84%',
          end: 'bottom 12%',
          toggleActions: 'restart reset restart reset',
        },
      }).fromTo(
        elements,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        },
      )
    }, containerRef)

    return () => context.revert()
  }, [])

  return (
    <header ref={containerRef} className={className}>
      {children}
    </header>
  )
}
