'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin)
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)

    const hash = window.location.hash
    if (hash && pathname === '/') {
      setTimeout(() => {
        gsap.to(window, {
          duration: 1.5,
          scrollTo: hash,
          ease: "power4.inOut"
        })
      }, 500)
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const targetId = href.split('#')[1]
    
    if (pathname === '/' && targetId) {
      e.preventDefault()
      const element = document.getElementById(targetId)
      if (element) {
        gsap.to(window, {
          duration: 1.5,
          scrollTo: {
            y: element,
            offsetY: 80
          },
          ease: "power4.inOut"
        })
        setIsOpen(false)
      }
    }
  }

  const navLinks = [
    { name: 'INICIO', href: '/#inicio', active: true },
    { name: 'SERVICIOS', href: '/#servicios' },
    { name: 'PROYECTOS', href: '/#proyectos' },
    { name: 'NOSOTROS', href: '/#nosotros' },
    { name: 'CONTACTO', href: '/#contacto' },
  ]

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-x-0 top-0 z-[100] px-4 pt-5 md:px-8 lg:px-10"
    >
      <div className={`mx-auto flex max-w-[1740px] items-center justify-between rounded-[22px] border px-5 py-3.5 transition-all duration-500 md:px-9 md:py-4 ${scrolled ? 'border-cyan-200/15 bg-[#06111e]/95 shadow-[0_18px_50px_rgba(0,0,0,0.32)] backdrop-blur-2xl' : 'border-white/[0.1] bg-[#06111e]/65 backdrop-blur-xl'}`}>
        {/* Logo Section */}
        <Link 
          href="/#inicio" 
          onClick={(e) => scrollToSection(e, "/#inicio")}
          className="flex items-center gap-3 group"
        >
          <div className="relative p-1 rounded-full border border-white/10 bg-[#0A111D] group-hover:border-cyan-500/50 transition-colors">
            <Image 
              src="/logo_oficial.jpeg" 
              alt="LOOFIDEV Logo Oficial" 
              width={32} 
              height={32} 
              className="w-7 h-7 md:w-8 md:h-8 object-cover rounded-full mix-blend-screen opacity-90"
            />
          </div>
          <span className="text-[17px] font-bold tracking-tight text-white hidden sm:block">
            LOOFI<span className="text-cyan-400 font-medium">DEV</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 text-[11px] font-medium text-gray-400 items-center ml-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="relative group py-2 flex items-center gap-2"
            >
              {/* Active Dot */}
              <span className={`w-1.5 h-1.5 rounded-full transition-colors ${link.active ? 'bg-cyan-400 shadow-[0_0_8px_rgba(0,242,255,0.8)]' : 'bg-transparent group-hover:bg-gray-600'}`} />
              <span className={`transition-colors tracking-widest ${link.active ? 'text-white' : 'hover:text-gray-200'}`}>
                {link.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* CTA Button / GitHub */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://github.com/loofidev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 hover:bg-white/[0.02] rounded-lg transition-colors group"
          >
            <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            <span className="text-gray-400 group-hover:text-white transition-colors text-[10px] font-medium tracking-widest uppercase">
              GITHUB
            </span>
          </a>
          <Link href="/#contacto" onClick={(e) => scrollToSection(e, "/#contacto")} className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 px-5 py-3 text-[11px] font-bold tracking-wide text-white shadow-[0_8px_24px_rgba(0,152,255,0.2)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,193,255,0.3)]">
            HABLEMOS
            <span className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-300 hover:text-cyan-400 transition-colors z-[110]"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-[1.5px] bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-[1.5px] bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-[1.5px] bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#040C16]/95 backdrop-blur-2xl border-b border-white/10 lg:hidden"
          >
            <div className="flex flex-col px-4 py-8 gap-6 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  onClick={(e) => {
                    scrollToSection(e, link.href)
                    setIsOpen(false)
                  }}
                  className={`text-lg font-bold tracking-widest uppercase flex items-center gap-3 ${link.active ? 'text-white' : 'text-gray-400'}`}
                >
                  {link.active && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,242,255,0.8)]" />}
                  {link.name}
                </Link>
              ))}
              <a
                href="https://github.com/loofidev"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 px-8 py-3 rounded-lg border border-white/10 text-gray-300 text-[13px] tracking-widest font-bold"
              >
                GITHUB
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
