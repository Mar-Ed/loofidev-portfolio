'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin)
}

const secondaryServices = [
  {
    num: '02',
    title: 'Desarrollo Web Full-Stack & E-Commerce',
    summary: 'Plataformas interactivas y tiendas online de alto rendimiento construidas con React, Next.js, Node.js y Spring Boot.',
    focus: 'React · Next.js · Node.js · APIs'
  },
  {
    num: '03',
    title: 'Landing Pages de Alto Rendimiento',
    summary: 'Interfaces ultra rápidas con velocidad de carga menor a 0.8s y optimización SEO orientadas estrictamente a captar y convertir.',
    focus: 'Conversión · SEO Técnico · < 0.8s'
  },
  {
    num: '04',
    title: 'Infraestructura Cloud & Bases de Datos',
    summary: 'Arquitecturas relacionales robustas, microservicios seguros y despliegues en la nube con alta disponibilidad y protección de datos.',
    focus: 'AWS · PostgreSQL · Microservicios'
  }
]

export default function Services() {
  const prefersReducedMotion = useReducedMotion()

  const scrollToContact = () => {
    gsap.to(window, { duration: 1.2, scrollTo: { y: '#contacto', offsetY: 72 }, ease: 'power3.inOut' })
  }

  const anim = prefersReducedMotion
    ? { initial: false as const }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.7, ease: 'easeOut' as const },
      }

  return (
    <section id="servicios" className="relative isolate flex min-h-screen items-center bg-[#07090e] px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24 border-t border-white/[0.08]">
      {/* Very subtle ambient background gradient */}
      <div className="pointer-events-none absolute right-1/4 top-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-950/15 blur-[160px]" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-[1540px]">
        {/* Main Asymmetric Editorial Grid */}
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          
          {/* Left Column: Editorial Lead & Proposition (5 cols) */}
          <motion.div {...anim} className="flex flex-col justify-between h-full lg:col-span-5">
            <div>
              {/* Category Marker */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-6 bg-cyan-400" />
                <span className="font-mono text-xs font-semibold tracking-[0.22em] uppercase text-zinc-400">
                  Capacidades & Soluciones
                </span>
              </div>

              {/* Editorial Title */}
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[46px] xl:text-[54px] leading-[1.02]">
                Arquitectura digital<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-blue-400 font-light">
                  de vanguardia.
                </span>
              </h2>

              {/* Manifesto Text */}
              <p className="mt-6 text-base leading-relaxed text-zinc-300 sm:text-lg sm:leading-8 max-w-lg">
                No ensamblamos plantillas genéricas. Desarrollamos software y plataformas a medida diseñadas para resolver cuellos de botella operativos, escalar con tu negocio y maximizar tus ingresos.
              </p>

              {/* Operational Values */}
              <div className="mt-8 space-y-3.5 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-cyan-400 mt-0.5">01</span>
                  <p className="text-sm text-zinc-400"><strong className="text-zinc-200 font-medium">Código propietario:</strong> Control total de tu tecnología sin depender de plataformas de terceros.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-cyan-400 mt-0.5">02</span>
                  <p className="text-sm text-zinc-400"><strong className="text-zinc-200 font-medium">Rendimiento garantizado:</strong> Sitios y sistemas rápidos, seguros y mantenibles a largo plazo.</p>
                </div>
              </div>
            </div>

            {/* Direct Consultation Link */}
            <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-4">
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-xs font-bold tracking-[0.14em] uppercase text-black transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(0,242,255,0.25)]"
              >
                <span>Consultar viabilidad de proyecto</span>
                <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Hierarchical Capability Architecture (7 cols) */}
          <motion.div
            {...anim}
            transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' as const }}
            className="flex flex-col lg:col-span-7"
          >
            {/* Flagship Hero Service: Sistemas ERP & CRM */}
            <div className="relative border border-white/[0.12] bg-white/[0.02] rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider">
                  01 / CAPACIDAD PRINCIPAL
                </span>
                <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                  Arquitectura Empresarial
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Sistemas de Gestión & Operaciones (ERP / CRM)
              </h3>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-300">
                Centralizamos la operativa de tu empresa en una única plataforma a medida: control de inventarios, finanzas, facturación, logística y pipelines comerciales para automatizar procesos manuales y eliminar errores.
              </p>

              {/* Core Features Specs */}
              <div className="mt-6 grid sm:grid-cols-2 gap-3 pt-5 border-t border-white/10 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>Automatización de logística y almacén</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>Gestión de leads y fidelización CRM</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>Paneles de control y reportes en tiempo real</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>Integraciones API y facturación electrónica</span>
                </div>
              </div>
            </div>

            {/* Secondary Capabilities List with Hairline Dividers */}
            <div className="mt-4 space-y-0">
              {secondaryServices.map((service) => (
                <div
                  key={service.num}
                  className="group relative border-b border-white/10 py-5 px-3 transition-colors duration-200 hover:bg-white/[0.015]"
                >
                  <div className="grid sm:grid-cols-12 gap-2 sm:gap-6 items-baseline">
                    {/* Index & Title (5 cols) */}
                    <div className="sm:col-span-5 flex items-baseline gap-3">
                      <span className="font-mono text-xs font-semibold text-zinc-500 group-hover:text-cyan-400 transition-colors">
                        {service.num}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-zinc-100 group-hover:text-white transition-colors">
                        {service.title}
                      </h4>
                    </div>

                    {/* Summary & Focus (7 cols) */}
                    <div className="sm:col-span-7">
                      <p className="text-xs sm:text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                        {service.summary}
                      </p>
                      <div className="mt-1.5 font-mono text-[11px] text-zinc-500 tracking-wider">
                        {service.focus}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}


