import React from "react";

const mockCompanies = [
  { id: 1, name: "Universidad Nacional de Ucayali", label: "UNU" },
  { id: 2, name: "UPC", label: "UPC" },
  { id: 3, name: "Universidad Continental", label: "Continental" },
  { id: 4, name: "Universidad Católica San Pablo", label: "UCSP" },
  { id: 5, name: "UCV", label: "UCV" },
  { id: 6, name: "Pontificia Universidad", label: "PUCP" },
];

export default function Companies() {
  return (
    <section className="bg-black py-24 md:py-32 border-y border-white/[0.03]">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8">
        
        <header className="mx-auto max-w-4xl text-center mb-16 md:mb-20">
          <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.05em] text-white md:text-5xl">
            Empresas que <span className="text-cyan-300 block sm:inline">nos avalan.</span>
          </h2>
        </header>
        
        {/* Contenedor principal de la animación con desvanecimiento premium */}
        <div className="relative flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_15%,_black_85%,transparent_100%)]">
          
          {/* Grupo 1 */}
          <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-8 pr-8 sm:gap-12 sm:pr-12 will-change-transform">
            {mockCompanies.map((company) => (
              <div
                key={company.id}
                className="group relative flex h-24 w-60 sm:h-28 sm:w-72 shrink-0 items-center justify-center rounded-2xl border border-white/[0.04] bg-[#0a0a0c] px-6 text-center transition-all duration-700 hover:border-cyan-500/20 hover:bg-[#111216] hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.1)] overflow-hidden cursor-default"
              >
                {/* Glow interno sutil */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                
                <div className="relative z-10 flex flex-col items-center gap-2.5 sm:gap-3">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.05] transition-transform duration-700 group-hover:scale-110 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                    <span className="font-mono text-sm sm:text-base font-bold text-zinc-500 transition-colors duration-700 group-hover:text-cyan-300">
                      {company.label.substring(0, 2)}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium tracking-wide text-zinc-500 transition-colors duration-700 group-hover:text-zinc-200">
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Grupo 2 (Duplicado exacto para el bucle infinito) */}
          <div
            aria-hidden="true"
            className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-8 pr-8 sm:gap-12 sm:pr-12 will-change-transform"
          >
            {mockCompanies.map((company) => (
              <div
                key={`dup-${company.id}`}
                className="group relative flex h-24 w-60 sm:h-28 sm:w-72 shrink-0 items-center justify-center rounded-2xl border border-white/[0.04] bg-[#0a0a0c] px-6 text-center transition-all duration-700 hover:border-cyan-500/20 hover:bg-[#111216] hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.1)] overflow-hidden cursor-default"
              >
                {/* Glow interno sutil */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                
                <div className="relative z-10 flex flex-col items-center gap-2.5 sm:gap-3">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.05] transition-transform duration-700 group-hover:scale-110 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                    <span className="font-mono text-sm sm:text-base font-bold text-zinc-500 transition-colors duration-700 group-hover:text-cyan-300">
                      {company.label.substring(0, 2)}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium tracking-wide text-zinc-500 transition-colors duration-700 group-hover:text-zinc-200">
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
