'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollToPlugin)

const VALUE_WORDS = ['convierte', 'destaca', 'crece', 'escala']

type TypeCycleOptions = { typingSpeed?: number; deletingSpeed?: number; holdFor?: number }

function useTypeCycle(items: string[], options: TypeCycleOptions = {}) {
  const { typingSpeed = 145, deletingSpeed = 70, holdFor = 2800 } = options
  const [text, setText] = useState('')
  const index = useRef(0)
  const phase = useRef<'typing' | 'holding' | 'deleting'>('typing')

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      const current = items[index.current]
      if (phase.current === 'typing') {
        setText((previous) => {
          const next = current.slice(0, previous.length + 1)
          if (next === current) phase.current = 'holding'
          return next
        })
        timer = setTimeout(tick, (phase.current as string) === 'holding' ? holdFor : typingSpeed)
        return
      }
      if (phase.current === 'holding') {
        phase.current = 'deleting'
        timer = setTimeout(tick, deletingSpeed)
        return
      }
      setText((previous) => {
        const next = previous.slice(0, -1)
        if (!next) {
          index.current = (index.current + 1) % items.length
          phase.current = 'typing'
        }
        return next
      })
      timer = setTimeout(tick, deletingSpeed)
    }
    timer = setTimeout(tick, 500)
    return () => clearTimeout(timer)
  }, [deletingSpeed, holdFor, items, typingSpeed])

  return text
}

function Typewriter({ words }: { words: string[] }) {
  const prefersReducedMotion = useReducedMotion()
  const text = useTypeCycle(words)
  return (
    <span className="inline-block min-w-[9.1ch] whitespace-nowrap">
      <span className="hero-word-gradient">{prefersReducedMotion ? words[0] : text}{!prefersReducedMotion && <span className="hero-cursor" aria-hidden />}</span>
      <span className="text-white">.</span>
    </span>
  )
}

const featureItems = [
  { icon: '↯', title: 'Rápido', description: 'Sitios que cargan volando', tone: 'text-lime-300' },
  { icon: '◇', title: 'Seguro', description: 'Código limpio y protegido', tone: 'text-cyan-300' },
  { icon: '↗', title: 'Estrategia', description: 'Pensado para convertir', tone: 'text-blue-300' },
]

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const scrollTo = useCallback((target: string) => {
    gsap.to(window, { duration: 1.25, scrollTo: { y: target, offsetY: 72 }, ease: 'power3.inOut' })
  }, [])
  const reveal = prefersReducedMotion ? { initial: false as const } : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } }

  return (
    <section id="inicio" className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#030a14] px-6 pb-10 pt-28 sm:px-10 lg:px-12 lg:pb-12 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_48%,rgba(0,104,176,0.2),transparent_28%),radial-gradient(circle_at_10%_70%,rgba(12,70,112,0.15),transparent_32%),linear-gradient(115deg,#030a14_0%,#051020_54%,#020810_100%)]" />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-[0.2]" aria-hidden />
      <div className="pointer-events-none absolute -right-48 top-20 h-[680px] w-[680px] rounded-full border border-cyan-300/[0.035]" aria-hidden />

      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-12">
        <motion.div {...reveal} transition={{ duration: 0.75, ease: 'easeOut' }} className="relative z-20 w-full max-w-[680px]">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-cyan-300/20 bg-cyan-400/[0.055] px-4 py-2.5 text-[10px] font-bold tracking-[0.18em] text-cyan-200/90 shadow-[0_0_24px_rgba(0,193,255,0.06)]">
            <span className="relative flex h-1.5 w-1.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" /><span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" /></span>
            ESTUDIO DIGITAL · LIMA, PERÚ
          </div>

          <h1 className="max-w-[720px] text-[clamp(2.75rem,5.2vw,5.75rem)] font-bold leading-[0.96] tracking-[-0.06em] text-white">
            Diseñamos lo<br className="hidden sm:block" /> digital para que<br className="hidden sm:block" /> tu negocio <Typewriter words={VALUE_WORDS} />
          </h1>

          <p className="mt-8 max-w-[600px] text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">Páginas web, e-commerce y sistemas a medida con una estrategia clara: verse bien, cargar rápido y generar resultados.</p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <button onClick={() => scrollTo('#contacto')} className="group inline-flex items-center gap-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 px-6 py-4 text-[11px] font-bold tracking-[0.13em] text-white shadow-[0_14px_38px_rgba(0,152,255,0.24)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(0,193,255,0.34)]">HABLEMOS DE TU PROYECTO<span className="text-xl leading-none transition-transform duration-300 group-hover:translate-x-1">→</span></button>
            <button onClick={() => scrollTo('#proyectos')} className="rounded-xl border border-white/15 bg-white/[0.02] px-6 py-4 text-[11px] font-bold tracking-[0.13em] text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.06]">VER PROYECTOS</button>
          </div>

          <div className="mt-12 flex flex-wrap items-stretch gap-0 border-t border-white/[0.1] pt-6 sm:mt-14">
            {featureItems.map((item, index) => (
              <div key={item.title} className={`flex items-center gap-3 pr-5 sm:pr-8 ${index > 0 ? 'border-l border-white/[0.1] pl-5 sm:pl-8' : ''}`}>
                <span className={`text-2xl leading-none ${item.tone}`}>{item.icon}</span>
                <div><p className="text-sm font-semibold text-slate-200">{item.title}</p><p className="mt-0.5 whitespace-nowrap text-[10px] text-slate-500">{item.description}</p></div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94, x: 20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
          className="relative flex min-h-[380px] sm:min-h-[480px] lg:min-h-[580px] xl:min-h-[640px] w-full items-center justify-center"
        >
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/15 blur-[100px] sm:h-[450px] sm:w-[450px]" aria-hidden />
          
          {/* Outer Orbit Line */}
          <div className="hero-orbit pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.08] sm:h-[480px] sm:w-[480px]" aria-hidden />

          {/* Planet / Orbit Illustration */}
          <Image
            src="/seccion/hero-orbit.png"
            alt="Arquitectura digital orbital de Loofi Dev"
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px"
            className="hero-art pointer-events-none absolute left-1/2 top-1/2 z-10 w-[95%] max-w-[560px] sm:max-w-[640px] lg:max-w-[700px] xl:max-w-[760px] -translate-x-1/2 -translate-y-1/2 object-contain select-none"
          />
        </motion.div>
      </div>
    </section>
  )
}
