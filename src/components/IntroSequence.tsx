'use client'

import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface IntroProps {
  onComplete: () => void
}

export default function IntroSequence({ onComplete }: IntroProps) {
  const [phase, setPhase] = useState(0)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    // Check if user prefers reduced motion or has seen the intro
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasSeen = sessionStorage.getItem('hasSeenIntro')

    if (hasSeen || prefersReducedMotion) {
      setTimeout(() => {
        setShowIntro(false)
        onComplete()
        window.dispatchEvent(new Event('introComplete'))
      }, 50)
      return
    }

    sessionStorage.setItem('hasSeenIntro', 'true')
    
    // Cinematic Timeline
    const timers = [
      setTimeout(() => setPhase(1), 50),     // FASE 01: Digital Void (Dots)
      setTimeout(() => setPhase(2), 350),    // FASE 02: System Init (Code)
      setTimeout(() => setPhase(3), 800),    // FASE 03: Building (Lines/Boxes)
      setTimeout(() => setPhase(4), 1200),   // FASE 04: Product (UI)
      setTimeout(() => setPhase(5), 1700),   // FASE 05: LOOFI DEV (Logo)
      setTimeout(() => setPhase(6), 2100),   // FASE 06: Transition out
      setTimeout(() => {
        setShowIntro(false)
        onComplete()
        window.dispatchEvent(new Event('introComplete'))
      }, 2700)
    ]

    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  if (!showIntro) return null

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 6 ? 0 : 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="absolute inset-0 z-50 flex items-center justify-center bg-[#050810] overflow-hidden pointer-events-none"
    >
      {/* Shared Background elements to make transition seamless */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
      </div>

      <AnimatePresence>
        
        {/* FASE 1 & 2: Dots & Code */}
        {(phase === 1 || phase === 2) && (
          <motion.div 
            key="phase1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Dots */}
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1 }} className="absolute w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_10px_#00f2ff] top-[40%] left-[45%]" />
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.15 }} className="absolute w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6] top-[60%] left-[55%]" />
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="absolute w-1 h-1 bg-purple-500 rounded-full top-[45%] left-[58%]" />
            
            {/* Lines connecting dots */}
            <svg className="absolute inset-0 w-full h-full">
               <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: 0.2 }} x1="45%" y1="40%" x2="55%" y2="60%" stroke="#00f2ff" strokeWidth="0.5" strokeOpacity="0.5" />
               <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: 0.25 }} x1="55%" y1="60%" x2="58%" y2="45%" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.5" />
               <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: 0.1 }} x1="45%" y1="40%" x2="58%" y2="45%" stroke="#a855f7" strokeWidth="0.5" strokeOpacity="0.3" />
            </svg>

            {/* Code Snippets (Phase 2) */}
            {phase === 2 && (
              <>
                <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute top-[35%] left-[40%] text-cyan-400 font-mono text-[10px]">
                  &lt;interface /&gt;
                </motion.span>
                <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="absolute top-[65%] left-[50%] text-green-400 font-mono text-[10px]">
                  {'{'} system: online {'}'}
                </motion.span>
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.2 }} className="absolute top-[48%] left-[48%] text-white font-mono text-sm">
                  _
                </motion.span>
              </>
            )}
          </motion.div>
        )}

        {/* FASE 3 & 4: Building & Product */}
        {(phase === 3 || phase === 4) && (
          <motion.div 
            key="phase3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.4 }}
            className="relative flex flex-col items-center justify-center w-64 h-40 border border-cyan-500/20 rounded-lg bg-[#050810]/50 backdrop-blur-md overflow-hidden"
          >
            {/* Inner building lines */}
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.3 }} className="absolute top-4 left-4 right-4 h-[1px] bg-white/10 origin-left" />
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.3, delay: 0.1 }} className="absolute top-8 left-4 w-12 h-12 border border-white/5 rounded origin-top" />
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.3, delay: 0.2 }} className="absolute top-8 left-20 right-4 h-4 bg-white/5 rounded origin-left" />
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.3, delay: 0.3 }} className="absolute top-16 left-20 right-12 h-4 bg-white/5 rounded origin-left" />

            {/* Product Highlights (Phase 4) */}
            {phase === 4 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-8 left-4 w-12 h-12 border border-cyan-400/50 shadow-[0_0_15px_rgba(0,242,255,0.4)] rounded" />
                <div className="absolute top-8 left-20 w-8 h-4 bg-cyan-400/80 shadow-[0_0_10px_rgba(0,242,255,0.6)] rounded" />
              </motion.div>
            )}
          </motion.div>
        )}

        {/* FASE 5 & 6: LOOFI DEV Logo */}
        {(phase === 5 || phase === 6) && (
          <motion.div 
            key="phase5"
            initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
            animate={
              phase === 5 
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : { opacity: 0, scale: 0.8, y: -100, filter: "blur(5px)" } // Transition out (simulating move to navbar)
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex flex-col items-center justify-center"
          >
            <div className="relative">
               <motion.div 
                 initial={{ opacity: 0, scale: 0 }} 
                 animate={{ opacity: phase === 5 ? 0.3 : 0, scale: phase === 5 ? 1.5 : 0 }} 
                 transition={{ duration: 0.4 }}
                 className="absolute inset-0 bg-cyan-400 blur-[50px] rounded-full" 
               />
               <Image 
                 src="/logo_oficial.jpeg" 
                 alt="LOOFIDEV Logo" 
                 width={90} 
                 height={90} 
                 className="relative z-10 rounded-2xl shadow-[0_0_40px_rgba(0,242,255,0.4)] border border-white/10" 
               />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
