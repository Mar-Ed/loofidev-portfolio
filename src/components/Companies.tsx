import Image from "next/image";

type Company = {
  id: number;
  name: string;
  src: string;
  customClass: string;
  filterClass?: string;
  cellClass?: string;
  width?: number;
  height?: number;
};

const companies: Company[] = [
  { 
    id: 1,  
    name: "Albertmath",        
    src: "/logos_empresas/albertmath-normalized.webp",
    customClass: "scale-100",
    filterClass: "grayscale brightness-125 contrast-125 opacity-70",
    width: 1365,
    height: 528,
  },
  { 
    id: 3,  
    name: "CONEIMERA",         
    src: "/logos_empresas/.webp",
    customClass: "scale-100",
  },
  { 
    id: 4,  
    name: "Falcon Towers",     
    src: "/logos_empresas/.webp",
    customClass: "scale-100",
  },
  { 
    id: 5,  
    name: "Top Beauty",        
    src: "/logos_empresas/.webp",
    customClass: "scale-100",
  },
  { 
    id: 6,  
    name: "INSEPROIN",         
    src: "/logos_empresas/inseproin.webp",
    customClass: "scale-110",
  },
  { 
    id: 7,  
    name: "AIUARR",            
    src: "/logos_empresas/.webp",
    customClass: "scale-100",
  },
  { 
    id: 8,  
    name: "JKO Asfaltos",          
    src: "/logos_empresas/logo_oficial.webp",
    customClass: "scale-100",
    filterClass: "grayscale brightness-125 contrast-125 opacity-70",
  },
  { 
    id: 10, 
    name: "Sidercom",          
    src: "/logos_empresas/.webp",
    customClass: "scale-100",
  },
];

export default function Companies() {
  return (
    <section className="bg-black py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">

        <header className="mb-12 text-center md:mb-16">
          <p className="mb-4 font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-cyan-400">Confianza & colaboración</p>
          <h2 className="text-3xl font-medium leading-[1.05] tracking-[-0.05em] text-white md:text-5xl">
            Empresas que{" "}
            <span className="text-cyan-300">nos avalan.</span>
          </h2>
        </header>

        <div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-4">
          {companies.map((company) => (
            <div
              key={company.id}
              className={`group flex h-28 items-center justify-center overflow-hidden border-b border-r border-white/10 bg-black p-5 sm:h-32 md:h-36 md:p-7 hover:bg-white/[0.025] ${company.cellClass ?? ""}`}
            >
              <Image
                src={company.src}
                alt={company.name}
                width={company.width ?? 220}
                height={company.height ?? 100}
                className={`h-12 w-auto max-w-[130px] object-contain transition-[opacity,filter] duration-200 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(0,242,255,0.28)] sm:h-14 sm:max-w-[150px] md:h-16 md:max-w-[170px] ${company.filterClass ?? 'brightness-0 invert opacity-70'} ${company.customClass}`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
