import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-secondary/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">JMP</h3>
            <p className="text-secondary-foreground/80">
              Desarrollador Full Stack especializado en soluciones innovadoras.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              {[
                { label: 'Sobre mí', href: '#about' },
                { label: 'Proyectos', href: '#projects' },
                { label: 'Contacto', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors duration-200 inline-flex items-center gap-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociales</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, label: 'GitHub', href: 'https://github.com' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: Mail, label: 'Email', href: 'mailto:lugoojosep@gmail.com' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-secondary-foreground/80">
            © {currentYear} José Martín Pacheco. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-secondary-foreground/80">
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Privacidad
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
