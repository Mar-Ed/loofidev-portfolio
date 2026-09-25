import Image from 'next/image'

type Project = {
  number: string
  year: string
  sector: string
  title: string
  description: string
  image: string
  imageAlt: string
  technologies: string[]
  href?: string
  accent: string
}

const projects: Project[] = [
  {
    number: '01',
    year: '2024',
    sector: 'Gastronomía & experiencia',
    title: 'La Panizzeria',
    description: 'Plataforma gastronómica de alto rendimiento diseñada para convertir una propuesta culinaria en una experiencia digital rápida, clara y memorable.',
    image: '/proyectos/panizzeria_imagen.jpeg',
    imageAlt: 'Sitio web de La Panizzeria',
    technologies: ['Astro', 'MySQL', 'AWS RDS'],
    href: 'https://panizzeria-astro.vercel.app/',
    accent: 'text-orange-300',
  },
  {
    number: '02',
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
    number: '03',
    year: '2026',
    sector: 'Inteligencia comercial',
    title: 'Multi-Tenant BI & CRM',
    description: 'Plataforma empresarial que centraliza leads, integra operaciones multiempresa y convierte grandes volúmenes de datos en indicadores accionables de ROAS y CPA.',
    image: '/proyectos/crm_imagen.jpeg',
    imageAlt: 'Panel de inteligencia comercial y CRM',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    accent: 'text-blue-300',
  },
  {
    number: '04',
    year: '2026',
    sector: 'Telecomunicaciones & activos',
    title: 'Gestor de Torres',
    description: 'Sistema operativo para el control de infraestructura de telecomunicaciones, con seguimiento de activos, reportes ejecutivos y geolocalización centralizada.',
    image: '/proyectos/telecomunicaciones_imagen.jpeg',
    imageAlt: 'Sistema de reportes de torres de telecomunicaciones',
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
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    href: 'https://jko-asfaltos.vercel.app/',
    accent: 'text-cyan-300',
  },
  {
    number: '06',
    year: '2026',
    sector: 'Operaciones & automatización',
    title: 'Top Beauty Box System',
    description: 'Suite administrativa que conecta caja, citas, asesoras, clientes, marketing y reportes en una sola operación con trazabilidad de principio a fin.',
    image: '/proyectos/top_beauty_caja.png',
    imageAlt: 'Sistema de caja y gestión de Top Beauty',
    technologies: ['Next.js', 'MySQL', 'Prisma ORM', 'AWS'],
    accent: 'text-sky-300',
  },
  {
    number: '07',
    year: '2026',
    sector: 'IA conversacional',
    title: 'WhatsApp AI Chatbot',
    description: 'Asistente conectado con Meta Cloud API que automatiza reservas, consultas de servicios y sincronización operativa sin perder continuidad en la atención.',
    image: '/proyectos/chatbot_meta_1.png',
    imageAlt: 'Flujo automatizado del chatbot de WhatsApp',
    technologies: ['Node.js', 'TypeScript', 'Meta API', 'Google Sheets'],
    accent: 'text-green-300',
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
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
          {projects.map((project) => (
            <article key={project.number} className="group flex flex-col gap-4">

              {/* Imagen compacta */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#101014]">
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Ver proyecto ${project.title}`} className="absolute inset-0 z-10" />
                ) : null}
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* Overlay suave */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                {/* Badge número / año */}
                <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  {project.number} / {project.year}
                </span>
                {/* Badge estado si es privado */}
                {!project.href && (
                  <span className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 backdrop-blur-sm">
                    Privado
                  </span>
                )}
              </div>

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
