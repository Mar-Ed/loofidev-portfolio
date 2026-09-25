const capabilities = [
  'Webs que convierten',
  'Sistemas web',
  'Chatbots',
  'ERP & CRM',
  'Automatización',
  'Nube e integraciones',
]

const sectors = ['Servicios', 'Comercio', 'Construcción', 'Educación', 'Operaciones']

export default function Services() {
  return (
    <section id="servicios" className="bg-[#070708] px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1240px] border-y border-white/10">
        <div className="grid lg:grid-cols-12">
          <header className="border-b border-white/10 py-9 lg:col-span-7 lg:border-b-0 lg:border-r lg:p-10">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-cyan-400">03 / Capacidades</p>
            <h2 className="mt-6 max-w-3xl text-3xl font-medium leading-[1.04] tracking-[-0.045em] text-white md:text-5xl">
              Diseño, software y automatización
              <span className="text-cyan-300"> para hacer avanzar tu negocio.</span>
            </h2>
          </header>

          <div className="flex flex-col justify-between py-8 lg:col-span-5 lg:p-10">
            <p className="max-w-md text-sm leading-6 text-zinc-300">
              Diseñamos cada solución alrededor de tu operación, tus clientes y tus objetivos.
            </p>
            <dl className="mt-8 grid grid-cols-3 border-t border-white/10 pt-6">
              <div>
                <dt className="text-2xl font-semibold text-white md:text-3xl">07</dt>
                <dd className="mt-1 text-[9px] uppercase tracking-[0.16em] text-zinc-400">Proyectos</dd>
              </div>
              <div>
                <dt className="text-2xl font-semibold text-white md:text-3xl">06</dt>
                <dd className="mt-1 text-[9px] uppercase tracking-[0.16em] text-zinc-400">Soluciones</dd>
              </div>
              <div>
                <dt className="text-2xl font-semibold text-cyan-300 md:text-3xl">100%</dt>
                <dd className="mt-1 text-[9px] uppercase tracking-[0.16em] text-zinc-400">A medida</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="grid border-t border-white/10 lg:grid-cols-12">
          <div className="grid md:grid-cols-2 lg:col-span-8">
            {capabilities.map((capability, index) => (
              <div
                key={capability}
                className={`flex items-center gap-5 border-white/10 py-5 md:px-7 ${index < capabilities.length - 2 ? 'border-b' : ''} ${index === capabilities.length - 2 ? 'border-b md:border-b-0' : ''} ${index % 2 === 0 ? 'md:border-r' : ''}`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 font-mono text-[9px] text-cyan-300">
                  0{index + 1}
                </span>
                <p className="text-lg font-medium tracking-[-0.025em] text-white md:text-xl">{capability}</p>
              </div>
            ))}
          </div>

          <aside className="relative overflow-hidden bg-[#00f2ff] p-8 text-[#061014] shadow-[0_24px_70px_rgba(0,242,255,0.12)] lg:col-span-4 lg:rounded-tl-[4rem] lg:p-10">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border-[24px] border-white/15" />
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-950/70">Experiencia aplicada</p>
            <h3 className="mt-4 max-w-xs text-2xl font-semibold leading-tight tracking-[-0.035em]">Tecnología adaptada a cada sector.</h3>
            <ul className="mt-7 flex flex-wrap gap-2">
              {sectors.map((sector) => (
                <li key={sector} className="rounded-full border border-cyan-950/20 bg-white/20 px-3 py-1.5 text-xs font-semibold text-cyan-950">
                  {sector}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-xs font-medium text-cyan-950/75">Sin plantillas. Sin soluciones repetidas.</p>
          </aside>
        </div>
      </div>
    </section>
  )
}
