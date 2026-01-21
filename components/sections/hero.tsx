import { Mail, Smartphone, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-primary opacity-10" />
      
      <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
              José Martín Pacheco
            </h1>
            <p className="text-xl text-primary font-semibold">
              Desarrollador Full Stack Java | Spring Boot | React
            </p>
            <p className="text-lg text-muted-foreground">
              Penco, Región del Biobío, Chile
            </p>
          </div>

          <p className="text-lg text-foreground leading-relaxed max-w-lg">
            Resolviendo problemas complejos con código limpio y colaborativo. Especializado en Java, Spring Boot y React con pasión por crear soluciones innovadoras.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/jos%C3%A9-martin-lugo-pacheco-62a455339/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 hover:shadow-lg"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/jlugod1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-all duration-200"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3 pt-4">
            <a
              href="mailto:lugoojosep@gmail.com"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail size={20} className="text-primary" />
              <span>lugoojosep@gmail.com</span>
            </a>
            <a
              href="https://wa.me/56984211936"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-200"
            >
              <Smartphone size={20} className="text-primary" />
              <span>+56 9 8421 1936</span>
            </a>
          </div>
        </div>

       
    {/* Right Side - Professional Photo */}
<div className="hidden md:flex justify-center items-center">
  <div className="relative group">
    <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
      <img
        src="/foto-perfil.jpg"
        alt="José Martín Pacheco - Desarrollador Full Stack"
        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
      />
    </div>
    
    {/* Anillo animado */}
    <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping opacity-20"></div>
  </div>
</div>


        
      </div>
    </section>
  )
}
