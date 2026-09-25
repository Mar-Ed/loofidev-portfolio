'use client'

import { useState } from 'react'

const mockTestimonials = [
  {
    name: 'Valeria Mendoza',
    role: 'Directora comercial',
    company: 'Nexo Consultores',
    quote: 'El nuevo sistema ordenó nuestro proceso comercial y nos permitió responder más rápido. Ahora el equipo tiene claridad sobre cada oportunidad y puede enfocarse en cerrar ventas.',
    result: '+42%',
    resultLabel: 'oportunidades atendidas',
    poster: '/proyectos/crm_imagen.jpeg',
    video: '/videos/hero-background.mp4',
  },
  {
    name: 'Diego Salazar',
    role: 'Gerente de operaciones',
    company: 'Andina Proyectos',
    quote: 'Pasamos de trabajar con información dispersa a controlar toda la operación desde un mismo lugar. Los reportes son claros y las decisiones toman mucho menos tiempo.',
    result: '-38%',
    resultLabel: 'tiempo en tareas manuales',
    poster: '/proyectos/telecomunicaciones_imagen.jpeg',
    video: '/videos/hero-background.mp4',
  },
  {
    name: 'Lucía Campos',
    role: 'Fundadora',
    company: 'Aura Studio',
    quote: 'El chatbot mejoró la experiencia desde el primer contacto. Nuestros clientes pueden consultar y reservar sin esperar, mientras el equipo recibe toda la información organizada.',
    result: '24/7',
    resultLabel: 'atención automatizada',
    poster: '/proyectos/top_beauty_chatbot.png',
    video: '/videos/hero-background.mp4',
  },
]

function VideoIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="14" height="14" rx="2" /><path d="m17 10 4-2v8l-4-2v-4Z" />
    </svg>
  )
}

function QuoteIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.2 17H3l3.1-5.3A4.8 4.8 0 0 1 10.3 9H11v4H8.5L7.2 17Zm10 0H13l3.1-5.3A4.8 4.8 0 0 1 20.3 9h.7v4h-2.5L17.2 17Z" />
    </svg>
  )
}

export default function Testimonials() {
  const [mode, setMode] = useState<'video' | 'text'>('video')

  return (
    <section id="testimonios" className="flex min-h-screen items-center overflow-hidden bg-black px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-[1080px]">
        <header className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">02 / Testimonios</p>
          <h2 className="mt-5 text-4xl font-medium leading-[1.02] tracking-[-0.05em] text-white md:text-5xl">
            Historias de clientes
            <span className="block text-cyan-300">que crecieron.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-300 md:text-base">
            Una misma historia, dos formas de conocerla.
          </p>

          <div className="mx-auto mt-6 inline-grid grid-cols-2 rounded-full border border-white/15 bg-white/[0.04] p-1" role="group" aria-label="Formato de testimonios">
            <button
              type="button"
              aria-pressed={mode === 'video'}
              onClick={() => setMode('video')}
              className={`flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold ${mode === 'video' ? 'bg-cyan-300 text-[#061014]' : 'text-zinc-300'}`}
            >
              <VideoIcon /> Ver videos
            </button>
            <button
              type="button"
              aria-pressed={mode === 'text'}
              onClick={() => setMode('text')}
              className={`flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold ${mode === 'text' ? 'bg-cyan-300 text-[#061014]' : 'text-zinc-300'}`}
            >
              <QuoteIcon /> Leer reseñas
            </button>
          </div>

          <p className="mt-3 font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-amber-300/80">
            Contenido demostrativo · pendiente de testimonios finales
          </p>
        </header>

        <div className="mt-9 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mt-10 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {mockTestimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`relative aspect-[9/13] min-w-[78vw] snap-center overflow-hidden rounded-[1.65rem] border sm:min-w-[54vw] md:h-[clamp(340px,45vh,430px)] md:min-w-0 md:aspect-auto ${mode === 'video' ? 'border-white/15 bg-[#111216]' : 'border-cyan-200/20 bg-[#eefcff]'}`}
            >
              {mode === 'video' ? (
                <>
                  <video
                    controls
                    playsInline
                    preload="none"
                    poster={testimonial.poster}
                    className="absolute inset-0 h-full w-full object-cover"
                    aria-label={`Video testimonial de ${testimonial.name}`}
                  >
                    <source src={testimonial.video} type="video/mp4" />
                  </video>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent px-6 pb-16 pt-24">
                    <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300">Historia 0{index + 1}</p>
                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-white">{testimonial.name}</h3>
                    <p className="mt-1 text-xs text-zinc-300">{testimonial.role} · {testimonial.company}</p>
                  </div>
                </>
              ) : (
                <div className="flex h-full flex-col p-7 text-[#071014] md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-800">Historia 0{index + 1}</p>
                      <p className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-cyan-700">{testimonial.result}</p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-950/65">{testimonial.resultLabel}</p>
                    </div>
                    <span aria-hidden="true" className="font-serif text-6xl leading-none text-cyan-600/35">“</span>
                  </div>

                  <blockquote className="my-auto py-8 text-base leading-7 text-zinc-800">
                    “{testimonial.quote}”
                  </blockquote>

                  <footer className="border-t border-black/15 pt-5">
                    <p className="text-base font-bold text-black">{testimonial.name}</p>
                    <p className="mt-1 text-xs text-zinc-600">{testimonial.role}</p>
                    <p className="mt-0.5 text-xs font-semibold text-cyan-800">{testimonial.company}</p>
                  </footer>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="h-px w-10 bg-white/20" />
          {mockTestimonials.map((testimonial, index) => (
            <span key={testimonial.name} className={`rounded-full ${index === 0 ? 'h-2 w-5 bg-cyan-300' : 'h-2 w-2 bg-white/30'}`} />
          ))}
          <span className="h-px w-10 bg-white/20" />
        </div>
      </div>
    </section>
  )
}
