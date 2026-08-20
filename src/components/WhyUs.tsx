'use client'

import { motion } from 'framer-motion'
import React from 'react'

const features = [
  {
    title: "Enfoque de Ingeniería",
    description: "No usamos plantillas genéricas. Aplicamos un rigor técnico desde el diseño de la base de datos hasta el despliegue final para garantizar calidad.",
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    )
  },
  {
    title: "Tecnología de Vanguardia",
    description: "Trabajamos con los stacks tecnológicos más demandados y eficientes del mercado, asegurando que tu producto sea rápido, moderno y mantenible.",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Atención Personalizada",
    description: "Como cofundadores, Marcelo y Adrian se involucran directamente en cada proyecto, garantizando una comunicación transparente y resultados excepcionales.",
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  }
]

export default function WhyUs() {
  const [isDesktop, setIsDesktop] = React.useState(true)

  React.useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  return (
    <section className="py-32 px-4 md:px-8 bg-[#0a0a0b] relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 relative">
          
          {/* Sticky Left Column */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={isDesktop ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
                whileInView={isDesktop ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, margin: "-100px" }}
                transition={isDesktop ? { duration: 1, ease: [0.16, 1, 0.3, 1] } : { duration: 0 }}
              >
                <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-gray-500 mb-8">Nuestra Diferencia</h2>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] text-white mb-8">
                  No somos<br />
                  una fábrica<br />
                  <span className="text-gray-600">de código.</span>
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed max-w-sm">
                  Nos distanciamos del desarrollo convencional enfocado en volumen. Nuestra prioridad es el rigor técnico, la escalabilidad y el impacto real en tu negocio.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Scrolling Right Column (Typographic List) */}
          <div className="lg:col-span-7 flex flex-col pt-12 lg:pt-0">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={isDesktop ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
                whileInView={isDesktop ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, margin: "-100px" }}
                transition={isDesktop ? { duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] } : undefined}
                className="group border-t border-white/10 py-16 first:border-t-0 lg:first:pt-0"
              >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                  <div className="w-2 h-2 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(0,242,255,0.8)] transition-all duration-500 mt-3" />
                  <div className="flex-1">
                    <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-500 tracking-tight">
                      {feature.title}
                    </h4>
                    <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
