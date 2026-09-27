const capabilities = [
  { title: 'Webs que convierten', detail: 'Velocidad y conversión' },
  { title: 'Sistemas web', detail: 'Operación centralizada' },
  { title: 'Chatbots', detail: 'Atención automatizada' },
  { title: 'ERP & CRM', detail: 'Información conectada' },
  { title: 'Automatización', detail: 'Procesos eficientes' },
  { title: 'Nube e integraciones', detail: 'Infraestructura escalable' },
]

const sectors = ['Servicios', 'Comercio', 'Construcción', 'Educación', 'Operaciones']

export default function Services() {
  return (
    <section id="servicios" className="bg-black px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1200px] border-y border-white/10 py-10 md:py-12">
        <header className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-cyan-300">
              Capacidades
            </p>
            <h2 className="mt-6 max-w-[800px] text-[2.15rem] font-medium uppercase leading-[0.98] tracking-[-0.055em] text-white md:text-[3.35rem]">
              Diseñamos tecnología que se ve bien
              <span className="block text-cyan-300">y hace avanzar tu negocio.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <p className="max-w-sm text-sm leading-6 text-zinc-400">
              Estrategia, diseño e ingeniería para construir soluciones digitales claras, rápidas y preparadas para crecer.
            </p>
          </div>
        </header>

        <dl className="mt-12 grid grid-cols-3 gap-5 md:mt-14 md:max-w-[920px] md:gap-10">
          <div>
            <dt className="text-4xl font-light tracking-[-0.06em] text-white md:text-6xl">11</dt>
            <dd className="mt-2 font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-500 md:text-[9px]">Proyectos</dd>
          </div>
          <div>
            <dt className="text-4xl font-light tracking-[-0.06em] text-white md:text-6xl">06</dt>
            <dd className="mt-2 font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-500 md:text-[9px]">Capacidades</dd>
          </div>
          <div>
            <dt className="text-4xl font-light tracking-[-0.06em] text-cyan-300 md:text-6xl">100%</dt>
            <dd className="mt-2 font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-500 md:text-[9px]">A medida</dd>
          </div>
        </dl>

        <div className="mt-16 grid gap-12 md:mt-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-5 font-mono text-[8px] uppercase tracking-[0.22em] text-zinc-600">Lo que construimos</p>
            <ul className="grid gap-x-12 sm:grid-cols-2">
              {capabilities.map((capability, index) => (
                <li key={capability.title} className="group flex items-end justify-between gap-5 border-b border-white/10 py-3.5">
                  <div>
                    <p className="text-lg font-medium tracking-[-0.035em] text-zinc-100 transition-colors group-hover:text-cyan-300 md:text-xl">
                      {capability.title}
                    </p>
                    <p className="mt-1 text-[10px] text-zinc-600">{capability.detail}</p>
                  </div>
                  <span className="pb-1 font-mono text-[8px] tracking-[0.18em] text-cyan-300/60">0{index + 1}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="relative overflow-hidden rounded-[1.5rem] border border-cyan-200/10 bg-[linear-gradient(145deg,#083344_0%,#0e7490_100%)] p-7 shadow-[0_22px_60px_rgba(8,145,178,0.12)] lg:col-span-4 lg:ml-auto lg:w-full lg:max-w-[340px] md:p-8">
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border-[22px] border-white/[0.06]" />
            <p className="relative font-mono text-[8px] font-bold uppercase tracking-[0.22em] text-cyan-100/70">
              Experiencia aplicada
            </p>
            <h3 className="relative mt-4 max-w-[250px] text-2xl font-medium leading-tight tracking-[-0.04em] text-white">
              Tecnología adaptada a cada sector.
            </h3>
            <ul className="relative mt-7 flex flex-wrap gap-2">
              {sectors.map((sector) => (
                <li key={sector} className="rounded-full border border-white/15 bg-black/10 px-3 py-1.5 text-[11px] font-medium text-cyan-50">
                  {sector}
                </li>
              ))}
            </ul>
            <p className="relative mt-8 text-xs text-cyan-50/70">Sin plantillas. Sin soluciones repetidas.</p>
          </aside>
        </div>
      </div>
    </section>
  )
}
