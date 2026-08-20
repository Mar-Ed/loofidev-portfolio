'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SmoothScroll() {
  useEffect(() => {
    // Only enable on desktop — native scroll is fastest on touch/mobile
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      duration: 1.0,         // Slightly faster than 1.2 = less input lag
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,  // Slightly less multiplier = feels tighter
      touchMultiplier: 1.5,
      infinite: false,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return null
}
