'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { PointerEvent } from 'react'

type Project = {
  number: string
  year: string
  sector: string
  title: string
  description: string
  image: string
  imageAlt: string
  gallery?: string[]
  secondaryImage?: string
  secondaryImageAlt?: string
  showFullImage?: boolean
  technologies: string[]
  href?: string
  accent: string
}

const projects: Project[] = [
  {
    number: '09',
    year: '2024',
    sector: 'Gastronomía & experiencia',
    title: 'La Panizzeria',
    description: 'Plataforma gastronómica de alto rendimiento diseñada para convertir una propuesta culinaria en una experiencia digital rápida, clara y memorable.',
    image: '/proyectos/panizzeria_imagen.jpeg',
    imageAlt: 'Sitio web de La Panizzeria',
    showFullImage: true,
    technologies: ['Astro', 'MySQL', 'AWS RDS'],
    href: 'https://panizzeria-astro.vercel.app/',
    accent: 'text-orange-300',
  },
  {
    number: '10',
    year: '2025',
    sector: 'Educación & eventos',
    title: 'CONEIMERA 2025',
    description: 'Ecosistema oficial para un congreso nacional de ingeniería, preparado para comunicar el programa, organizar la experiencia y responder ante alta concurrencia.',
    image: '/proyectos/coneimera_imagen.jpeg',
    imageAlt: 'Plataforma oficial de CONEIMERA 2025',
    technologies: ['Astro', 'Svelte', 'Tailwind CSS'],
    href: 'https://coneimera.vercel.app/',
    accent: 'text-emerald-300',
  },
  {
    number: '06',
    year: '2026',
    sector: 'Inteligencia comercial',
    title: 'Multi-Tenant BI & CRM',
    description: 'Plataforma empresarial que centraliza leads, integra operaciones multiempresa y convierte grandes volúmenes de datos en indicadores accionables de ROAS y CPA.',
    image: '/proyectos/crm_imagen.jpeg',
    imageAlt: 'Panel de inteligencia comercial y CRM',
    showFullImage: true,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    accent: 'text-blue-300',
  },
  {
    number: '11',
    year: '2026',
    sector: 'Telecomunicaciones & activos',
    title: 'Gestor de Torres',
    description: 'Sistema operativo para el control de infraestructura de telecomunicaciones, con seguimiento de activos, reportes ejecutivos y geolocalización centralizada.',
    image: '/proyectos/telecomunicaciones_imagen.jpeg',
    imageAlt: 'Sistema de reportes de torres de telecomunicaciones',
    showFullImage: true,
    technologies: ['React 18', 'Node.js', 'MySQL', 'Drizzle ORM'],
    accent: 'text-violet-300',
  },
  {
    number: '05',
    year: '2026',
    sector: 'Infraestructura & logística',
    title: 'JKO Asfaltos',
    description: 'Presencia digital de alto impacto para una operación logística especializada, con una arquitectura visual premium y una experiencia enfocada en generar confianza comercial.',
    image: '/proyectos/asfalto_imagen.jpeg',
    imageAlt: 'Landing page corporativa de JKO Asfaltos',
    showFullImage: true,
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    href: 'https://www.jkoasfaltos.com/',
    accent: 'text-cyan-300',
  },
  {
    number: '07',
    year: '2026',
    sector: 'Operaciones & automatización',
    title: 'Top Beauty Box System',
    description: 'Suite administrativa que conecta caja, citas, asesoras, clientes, marketing y reportes en una sola operación con trazabilidad de principio a fin.',
    image: '/proyectos/top_beauty_caja.png',
    imageAlt: 'Sistema de caja y gestión de Top Beauty',
    gallery: [
      '/proyectos/top_beauty_caja.png',
      '/proyectos/top_beauty_asesoras.webp',
      '/proyectos/top_beauty_clientes.webp',
      '/proyectos/top_beauty_imagen.webp',
      '/proyectos/top_beauty_marketing.webp',
      '/proyectos/top_beauty_reportes.webp',
    ],
    showFullImage: true,
    technologies: ['Next.js', 'MySQL', 'Prisma ORM', 'AWS'],
    accent: 'text-sky-300',
  },
  {
    number: '08',
    year: '2026',
    sector: 'IA conversacional',
    title: 'WhatsApp AI Chatbot',
    description: 'Asistente conectado con Meta Cloud API que automatiza reservas, consultas de servicios y sincronización operativa sin perder continuidad en la atención.',
    image: '/proyectos/chatbot_meta_1.png',
    imageAlt: 'Flujo automatizado del chatbot de WhatsApp',
    gallery: [
      '/proyectos/chatbot_meta_1.png',
      '/proyectos/chatbot_meta_2.webp',
      '/proyectos/chatbot_meta_3.webp',
      '/proyectos/chatbot_meta_4.webp',
    ],
    technologies: ['Node.js', 'TypeScript', 'Meta API', 'Google Sheets'],
    accent: 'text-green-300',
  },
  {
    number: '04',
    year: '2026',
    sector: 'Gastronomía & pedidos',
    title: 'Cafetería El Molino',
    description: 'Experiencia digital para descubrir la carta, explorar especialidades y convertir pedidos en conversaciones directas por WhatsApp con una navegación ágil y visual.',
    image: '/proyectos/EL_MOLINO.jpeg',
    imageAlt: 'Carta digital de Cafetería El Molino',
    technologies: ['Diseño UX/UI', 'Desarrollo web', 'WhatsApp'],
    href: 'https://www.cafeteriaelmolino.es/',
    accent: 'text-orange-300',
  },
  {
    number: '02',
    year: '2026',
    sector: 'Ingeniería & manufactura',
    title: 'Grupo GENOLG',
    description: 'Sitio corporativo orientado a comunicar capacidades metalmecánicas, acreditaciones y experiencia industrial con una estructura clara para generar confianza comercial.',
    image: '/proyectos/GRUPO_GENOLG.jpeg',
    imageAlt: 'Sitio corporativo de Grupo GENOLG',
    technologies: ['Estrategia digital', 'Diseño responsive', 'SEO técnico'],
    href: 'https://www.grupo-genolg.com/',
    accent: 'text-amber-300',
  },
  {
    number: '03',
    year: '2026',
    sector: 'Industria & operaciones',
    title: 'INSEPROIN',
    description: 'Plataforma corporativa que presenta servicios, trayectoria e indicadores operativos con una narrativa técnica enfocada en seguridad, experiencia y capacidad de ejecución.',
    image: '/proyectos/INSEPROIN.jpeg',
    imageAlt: 'Plataforma corporativa de INSEPROIN',
    technologies: ['Arquitectura web', 'UX/UI', 'Optimización'],
    href: 'https://inseproin-web.vercel.app/',
    accent: 'text-red-300',
  },
  {
    number: '01',
    year: '2026',
    sector: 'Educación & producto digital',
    title: 'Albert Math Academy',
    description: 'Ecosistema educativo que combina una presencia pública de alto impacto con una plataforma privada para entrenamiento, biblioteca, progreso y comunidad olímpica.',
    image: '/proyectos/ALBERT_MATH_LANDING.jpeg',
    imageAlt: 'Landing page de Albert Math Academy',
    secondaryImage: '/proyectos/ALBERTH_MATH_INTRANET.jpeg',
    secondaryImageAlt: 'Plataforma interna de Albert Math Academy',
    technologies: ['Producto digital', 'Plataforma educativa', 'UX/UI'],
    href: 'https://www.albertmathacademy.com/',
    accent: 'text-orange-300',
  },
]

const orderedProjects = [...projects].sort(
  (firstProject, secondProject) => Number(firstProject.number) - Number(secondProject.number),
)

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  )
}

function moveVisitCursor(event: PointerEvent<HTMLDivElement>) {
  const bounds = event.currentTarget.getBoundingClientRect()
  const cursor = event.currentTarget.querySelector<HTMLElement>('[data-visit-cursor]')

  if (!cursor) return

  cursor.style.left = `${event.clientX - bounds.left}px`
  cursor.style.top = `${event.clientY - bounds.top}px`
}

function ProjectMedia({ project }: { project: Project }) {
  const frames = project.gallery ?? [project.image]
  const [activeFrame, setActiveFrame] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!isHovering || frames.length < 2) return

    const interval = window.setInterval(() => {
      setActiveFrame((currentFrame) => (currentFrame + 1) % frames.length)
    }, 1000)

    return () => window.clearInterval(interval)
  }, [isHovering, frames.length])

  const stopGallery = () => {
    setIsHovering(false)
    setActiveFrame(0)
  }

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={stopGallery}
      onPointerMove={project.href ? moveVisitCursor : undefined}
      className="group/media relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#101014]"
    >
      {project.href ? (
        <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Visitar proyecto ${project.title}`} className="absolute inset-0 z-30 cursor-pointer" />
      ) : null}

      {frames.map((frame, frameIndex) => (
        <Image
          key={frame}
          src={frame}
          alt={frameIndex === 0 ? project.imageAlt : `${project.imageAlt}, vista ${frameIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className={`${project.showFullImage ? 'object-contain object-center group-hover:scale-[1.018]' : 'object-cover object-top group-hover:scale-[1.03]'} ${frameIndex === activeFrame ? 'opacity-100' : 'opacity-0'} transition-[opacity,transform] duration-500 ease-out`}
        />
      ))}

      {project.secondaryImage && (
        <div className="pointer-events-none absolute bottom-4 right-4 z-20 aspect-[16/10] w-[42%] overflow-hidden rounded-lg border border-white/20 bg-[#071022] shadow-[-12px_-12px_36px_rgba(0,0,0,0.45)]">
          <Image
            src={project.secondaryImage}
            alt={project.secondaryImageAlt ?? ''}
            fill
            sizes="(max-width: 768px) 42vw, 250px"
            className="object-cover object-top"
          />
          <span className="absolute bottom-2 left-2 rounded-full border border-white/10 bg-black/70 px-2 py-1 font-mono text-[7px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
            Plataforma
          </span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {project.href && (
        <span
          data-visit-cursor
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-40 hidden -translate-x-1/2 -translate-y-1/2 scale-75 items-center gap-2 rounded-full border border-white/25 bg-black/80 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white opacity-0 shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-md transition-[opacity,transform] duration-200 group-hover/media:scale-100 group-hover/media:opacity-100 md:inline-flex"
        >
          Visitar <ArrowIcon />
        </span>
      )}

      <span className="absolute left-4 top-4 z-20 rounded-full bg-black/60 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
        {project.number}
      </span>

      {!project.href && (
        <span className="absolute right-4 top-4 z-20 rounded-full bg-black/60 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 backdrop-blur-sm">
          Privado
        </span>
      )}

      {frames.length > 1 && (
        <div className="pointer-events-none absolute bottom-4 left-4 z-20 flex gap-1.5 opacity-0 transition-opacity duration-300 group-hover/media:opacity-100" aria-hidden="true">
          {frames.map((frame, frameIndex) => (
            <span key={frame} className={`h-1 rounded-full transition-all duration-300 ${frameIndex === activeFrame ? 'w-5 bg-cyan-300' : 'w-1 bg-white/45'}`} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="proyectos" className="bg-black py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-8">

        {/* Header */}
        <header className="mb-16 md:mb-24 text-center">
          <p className="mb-6 font-mono text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
            Proyectos seleccionados — LOOFIDEV
          </p>
          <h2 className="mx-auto max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.05em] text-white md:text-5xl">
            Productos digitales que hacen visible el valor real de tu negocio.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Estrategia, diseño e ingeniería aplicados a plataformas que deben verse bien, funcionar mejor y sostener operaciones reales.
          </p>
        </header>

        {/* Grid de proyectos: 2 columnas, imágenes más compactas */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-16">
          {orderedProjects.map((project) => (
            <article key={project.number} className="group flex flex-col gap-4">

              {/* Imagen compacta */}
              <ProjectMedia project={project} />

              {/* Info debajo de la imagen */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.03em] text-white md:text-2xl">
                    {project.title}
                  </h3>
                  <p className={`mt-1 text-xs font-medium ${project.accent}`}>
                    {project.sector} · {project.technologies.slice(0, 2).join(' / ')}
                  </p>
                </div>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex shrink-0 items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 transition-colors hover:text-white"
                    aria-label={`Abrir ${project.title}`}
                  >
                    Ver <ArrowIcon />
                  </a>
                )}
              </div>
              <p className="text-sm leading-6 text-zinc-400">
                {project.description}
              </p>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
