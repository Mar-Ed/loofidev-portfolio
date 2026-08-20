'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin)
}

const founders = [
  {
    name: 'Marcelo Bilbao',
    shortName: 'Marcelo',
    role: 'Co-Fundador · UI/UX & Frontend Lead',
    tag: 'UI/UX Engineer',
    bio: 'Especialista en experiencia de usuario, sistemas de diseño e interfaces de alta conversión. Dirige la arquitectura visual y la interactividad.',
    image: '/fotos_dev/foto_marcelo.jpg',
    profileUrl: '/equipo/marcelo',
    accentColor: 'from-cyan-400 to-blue-500',
    tagColor: 'text-cyan-300 border-cyan-400/30 bg-cyan-400/10',
    glowColor: 'bg-cyan-500/15',
    hoverBorder: 'hover:border-cyan-400/40',
  },
  {
    name: 'Adrián Enciso',
    shortName: 'Adrián',
    role: 'Co-Fundador · Full-Stack & Systems Lead',
    tag: 'Full-Stack Engineer',
    bio: 'Experto en sistemas escalables, bases de datos y arquitectura en la nube. Lidera el desarrollo técnico y el rendimiento empresarial.',
    image: '/fotos_dev/adrian_foto.jpg',
    profileUrl: '/equipo/adrian',
    accentColor: 'from-blue-400 to-indigo-500',
    tagColor: 'text-blue-300 border-blue-400/30 bg-blue-400/10',
    glowColor: 'bg-blue-500/15',
    hoverBorder: 'hover:border-blue-400/40',
  }
]

const pillars = [
  { label: 'Arquitectura Escalable', icon: '⚡' },
  { label: 'UI/UX de Alta Conversión', icon: '◇' },
  { label: 'Ingeniería Full-Stack', icon: '↗' },
]

export default function About() {
  const prefersReducedMotion = useReducedMotion()

  const scrollToContact = () => {
    gsap.to(window, { duration: 1.2, scrollTo: { y: '#contacto', offsetY: 72 }, ease: 'power3.inOut' })
  }

  const anim = prefersReducedMotion
    ? { initial: false as const }
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.7, ease: 'easeOut' as const },
      }

  return (
    <section id="nosotros" className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#0a0a0b] px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-cyan-900/15 blur-[140px]" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-900/10 blur-[130px]" aria-hidden />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-[1540px]">
        {/* Main 2-Column Responsive Layout for 1-Screen Viewport Fit */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          
          {/* Left Column: Brand Statement & Core Vision (5 cols) */}
          <motion.div {...anim} className="flex flex-col justify-center lg:col-span-5 xl:col-span-5">
            {/* Engineering Subtitle Badge */}
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/[0.06] px-3.5 py-1.5 text-[10px] font-bold tracking-[0.18em] text-cyan-200 shadow-[0_0_20px_rgba(0,242,255,0.08)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
              </span>
              DIRECCIÓN DE INGENIERÍA · SOBRE NOSOTROS
            </div>

            {/* Impactful Heading */}
            <h2 className="text-3xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-4xl lg:text-[44px] xl:text-[52px]">
              No hacemos plantillas.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-blue-500">
                Diseñamos sistemas.
              </span>
            </h2>

            {/* Concise Value Description */}
            <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base sm:leading-7">
              En <strong className="text-white font-semibold">LOOFIDEV</strong> construimos software y plataformas a medida enfocadas en resolver problemas complejos de negocio, combinando código limpio, alta disponibilidad y diseño estratégico.
            </p>

            {/* Core Capability Chips */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {pillars.map((pillar) => (
                <span
                  key={pillar.label}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm transition-colors hover:border-cyan-400/30 hover:text-white"
                >
                  <span className="text-cyan-400 text-xs">{pillar.icon}</span>
                  {pillar.label}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 px-5 py-3 text-[11px] font-bold tracking-[0.12em] text-white shadow-[0_10px_30px_rgba(0,152,255,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,193,255,0.32)]"
              >
                TRABAJAR CON NOSOTROS
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.02] px-5 py-3 text-[11px] font-bold tracking-[0.12em] text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/[0.05] hover:text-white"
              >
                VER PROYECTOS
              </a>
            </div>
          </motion.div>

          {/* Right Column: Founder Profiles Side-by-Side (7 cols) */}
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-5 lg:col-span-7 xl:col-span-7">
            {founders.map((founder, idx) => (
              <motion.div
                key={founder.name}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.75, delay: idx * 0.15, ease: 'easeOut' }}
                className={`group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-4 sm:p-5 backdrop-blur-xl transition-all duration-300 ${founder.hoverBorder} hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]`}
              >
                {/* Subtle Inner Glow */}
                <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full ${founder.glowColor} blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                <div>
                  {/* Photo with Aspect Ratio */}
                  <div className="relative mb-4 aspect-[16/11] w-full overflow-hidden rounded-xl bg-slate-900/60 border border-white/5">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0b]/90 via-transparent to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-40" />
                    <Image
                      src={founder.image}
                      alt={`Foto de ${founder.name}, ${founder.role}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                      className="object-cover object-top filter grayscale contrast-105 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    />
                    {/* Badge over photo */}
                    <div className="absolute bottom-2.5 left-2.5 z-20">
                      <span className={`inline-block rounded-md border px-2.5 py-1 text-[9px] font-bold tracking-wider uppercase backdrop-blur-md ${founder.tagColor}`}>
                        {founder.tag}
                      </span>
                    </div>
                  </div>

                  {/* Founder Name & Meta */}
                  <h3 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-cyan-300 sm:text-2xl">
                    {founder.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-mono tracking-wider text-slate-400">
                    {founder.role}
                  </p>

                  {/* Bio summary */}
                  <p className="mt-3 text-xs leading-relaxed text-slate-400 line-clamp-3 group-hover:text-slate-300 transition-colors sm:text-[13px]">
                    {founder.bio}
                  </p>
                </div>

                {/* Profile Link Button */}
                <div className="mt-5 pt-3 border-t border-white/[0.08] flex items-center justify-between">
                  <Link
                    href={founder.profileUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 transition-all hover:text-cyan-300 hover:gap-2.5"
                  >
                    <span>Ver trayectoria y certificaciones</span>
                    <span className="text-sm">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
