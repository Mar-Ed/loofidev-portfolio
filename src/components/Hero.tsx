'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const textRefs = useRef<(HTMLParagraphElement | HTMLDivElement | null)[]>([])

  useEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
          end: 'bottom 15%',
          toggleActions: 'restart reset restart reset',
        },
      })

      if (visualRef.current) {
        timeline.fromTo(
          visualRef.current,
          { opacity: 0, x: 40, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out' },
        )
      }

      if (eyebrowRef.current) {
        timeline.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.8',
        )
      }

      if (titleRef.current) {
        timeline.fromTo(
          titleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.65',
        )
      }

      if (textRefs.current.length > 0) {
        timeline.fromTo(
          textRefs.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' },
          '-=0.5',
        )
      }
    }, heroRef)

    return () => context.revert()
  }, [])

  const addToTextRefs = (element: HTMLParagraphElement | HTMLDivElement | null) => {
    if (element && !textRefs.current.includes(element)) {
      textRefs.current.push(element)
    }
  }

  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ block: 'start' })
  }

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0b] pt-20 px-4 md:px-8"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(0,242,255,0.12),transparent_38%),radial-gradient(circle_at_80%_65%,rgba(59,130,246,0.12),transparent_35%),#0a0a0b]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/40 via-transparent to-[#0a0a0b]/80" />
      </div>

      {/* Background Glowing Orbs */}
      <div className="absolute top-1/3 left-[20%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/20 blur-[150px] rounded-[100%] pointer-events-none z-[2]" />
      <div className="absolute top-2/3 right-[10%] w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-[100%] pointer-events-none z-[2]" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 px-8">
        <div className="flex-1 text-center lg:text-left mt-8 lg:mt-0 max-w-[600px]">
          <div ref={eyebrowRef} className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Desarrollo digital de alto rendimiento
          </div>

          <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-[88px] font-medium tracking-[-0.045em] mb-8 leading-[1.04] text-white">
            Diseñamos tecnología<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">que convierte.</span>
          </h1>

          <p ref={addToTextRefs} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl font-medium leading-relaxed lg:border-l-2 lg:border-cyan-500/30 lg:pl-8 mx-auto lg:mx-0">
            Creamos <strong className="text-white font-bold">páginas web de alto rendimiento</strong>, <strong className="text-white font-bold">sistemas web completos</strong> y <strong className="text-white font-bold">chatbots</strong> que transforman visitas y conversaciones en clientes.
          </p>

          <div ref={addToTextRefs} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollTo('#contacto')}
              className="relative overflow-hidden group btn-primary px-8 py-4 rounded-2xl font-bold text-black uppercase tracking-widest text-sm shadow-[0_0_40px_rgba(0,242,255,0.4)] hover:shadow-[0_0_60px_rgba(0,242,255,0.6)] transition-all cursor-pointer"
            >
              <span className="relative z-10">Hablemos de tu proyecto</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollTo('#proyectos')}
              className="px-8 py-4 rounded-2xl border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-900/10 transition-all font-bold uppercase tracking-widest text-sm backdrop-blur-md cursor-pointer"
            >
              Ver proyectos
            </button>
          </div>
        </div>

        {/* Static Architect Element */}
        <div ref={visualRef} className="flex-1 w-full flex justify-center relative">
          <div className="relative w-full max-w-[460px]">
            {/* Super Glow background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 blur-[80px] z-0" />

            <div className="relative z-10 bg-[#0a0a0b]/40 backdrop-blur-3xl border border-white/10 p-8 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
              {/* Window Controls */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  <div className="w-4 h-4 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                  <div className="w-4 h-4 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                </div>
                <div className="font-mono text-xs font-bold text-gray-300 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                  runtime.config.ts
                </div>
              </div>

              <div className="font-mono text-sm text-cyan-400 mb-2">import <span className="text-white">{`{ Core, Data }`}</span> from <span className="text-blue-400">&apos;@loofidev/system&apos;</span>;</div>
              <div className="font-mono text-sm text-gray-400 mb-8">{"// Inicializando arquitectura empresarial"}</div>

              {/* Fake IDE Output */}
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <span className="text-gray-300 font-semibold">Infraestructura DB</span>
                  <span className="text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-lg border border-emerald-400/20 shadow-[0_0_15px_rgba(52,211,153,0.15)]">ESTABLE</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <span className="text-gray-300 font-semibold">Latencia Global</span>
                  <span className="text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded-lg border border-blue-400/20 shadow-[0_0_15px_rgba(96,165,250,0.15)]">{"< 20ms"}</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-2xl border border-cyan-500/40 bg-cyan-500/10 scale-[1.02] transform transition-all shadow-[0_0_30px_rgba(0,242,255,0.15)]">
                  <span className="text-cyan-100 font-bold">Arquitectura LOOFIDEV</span>
                  <span className="text-cyan-400 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,242,255,1)]" />
                    DESPLEGADA
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Logo */}
            <div className="absolute -bottom-8 -right-4 md:-bottom-12 md:-right-12 w-32 h-32 md:w-40 md:h-40 bg-[#0a0a0b]/40 border border-white/20 rounded-[2rem] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-20 backdrop-blur-md">
              <Image
                src="/logo_loofidev_2.webp"
                alt="Logotipo de Loofi Dev - Agencia de Desarrollo Web y Software Premium"
                width={160}
                height={160}
                className="w-full h-full object-contain rounded-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
