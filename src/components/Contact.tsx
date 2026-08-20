'use client'

import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // URL de Google Apps Script para el registro en Google Sheets
  const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbz91VAECj1UXd875RvG71BTLdLFvb5y4cxdFK3G8S1Qi8J0fAWTSrZLerdEyN_dtjgy9g/exec"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Configuración de WhatsApp
    const fone = '51970338010'
    const text = encodeURIComponent(
      `🏛️ *Nueva Consulta de Estrategia - LOOFIDEV*\n\n` +
      `👤 *Nombre:* ${formData.nombre}\n` +
      `📧 *Correo:* ${formData.email}\n` +
      `📝 *Proyecto:* ${formData.mensaje}`
    )
    
    const whatsappUrl = `https://wa.me/${fone}?text=${text}`
    
    try {
      // 1. Guardar en Google Sheets
      if (GOOGLE_SHEETS_URL) {
        await fetch(GOOGLE_SHEETS_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
      }
      
      // 2. Feedback visual y redirección
      setShowSuccess(true)
      setTimeout(() => {
        window.open(whatsappUrl, '_blank')
        setShowSuccess(false)
        setIsSubmitting(false)
        // Reset form
        setFormData({ nombre: '', email: '', mensaje: '' })
      }, 800)
    } catch (error) {
      console.error("Error al guardar la consulta:", error)
      setIsSubmitting(false)
      // Redirigir de todos modos para no perder la venta
      window.open(whatsappUrl, '_blank')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contacto" className="py-32 px-4 md:px-8 relative overflow-hidden bg-[#0a0a0b] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Typographic Header */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tighter leading-[0.95] text-white mb-8">
                Iniciemos<br />
                un proyecto.
              </h2>
              <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-md">
                Si buscas elevar la infraestructura tecnológica de tu empresa, nuestro equipo directivo está listo para escuchar tus objetivos.
              </p>
            </div>
            
            <div className="hidden lg:block mt-32">
              <span className="text-sm font-mono tracking-widest text-gray-600 uppercase block mb-4">Directorio</span>
              <a href="mailto:hola@loofidev.com" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">hola@loofidev.com</a>
            </div>
          </div>
          
          {/* Editorial Form (No card) */}
          <form className="flex flex-col gap-12 mt-8 lg:mt-0" onSubmit={handleSubmit}>
            <div className="group">
              <label className="block text-xs font-mono font-bold text-gray-500 mb-4 uppercase tracking-widest group-focus-within:text-cyan-400 transition-colors">01. Nombre completo</label>
              <input 
                type="text" 
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej. Alexander Pierce" 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-2xl md:text-3xl text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-400 transition-all font-medium rounded-none"
                required
              />
            </div>
            
            <div className="group">
              <label className="block text-xs font-mono font-bold text-gray-500 mb-4 uppercase tracking-widest group-focus-within:text-cyan-400 transition-colors">02. Correo Corporativo</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@empresa.com" 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-2xl md:text-3xl text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-400 transition-all font-medium rounded-none"
                required
              />
            </div>
            
            <div className="group">
              <label className="block text-xs font-mono font-bold text-gray-500 mb-4 uppercase tracking-widest group-focus-within:text-cyan-400 transition-colors">03. Descripción del Proyecto</label>
              <textarea 
                rows={2} 
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tus objetivos de optimización..." 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-2xl md:text-3xl text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-400 transition-all font-medium rounded-none resize-none"
                required
              />
            </div>

            <div className="pt-8">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-auto px-12 py-6 bg-white text-black font-bold text-lg hover:bg-cyan-400 transition-colors duration-300 disabled:opacity-50 flex items-center justify-center gap-4"
              >
                {isSubmitting ? 'Procesando...' : 'Enviar Solicitud'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              {showSuccess && (
                <p className="text-cyan-400 mt-6 font-medium text-lg">Redirigiendo a WhatsApp...</p>
              )}
            </div>
          </form>
          
          <div className="lg:hidden mt-16 pt-16 border-t border-white/10">
            <span className="text-sm font-mono tracking-widest text-gray-600 uppercase block mb-4">Directorio</span>
            <a href="mailto:hola@loofidev.com" className="text-xl font-bold text-white">hola@loofidev.com</a>
          </div>

        </div>
      </div>
    </section>
  )
}
