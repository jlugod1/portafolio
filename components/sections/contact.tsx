'use client'

import { useState } from 'react'
import { Send, Mail, Phone, MapPin, Loader2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      console.log('Enviando mensaje a Supabase...', formData)

      const { error: supabaseError } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ])

      if (supabaseError) {
        console.error('Error de Supabase:', supabaseError)
        throw new Error('Error al enviar el mensaje. Intenta nuevamente.')
      }

      // Éxito - mensaje guardado en Supabase
      console.log('Mensaje guardado en Supabase exitosamente')
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      
    } catch (err: any) {
      console.error('Error completo:', err)
      setError(err.message || 'Error al enviar el mensaje')
    } finally {
      setLoading(false)
      setTimeout(() => {
        setSubmitted(false)
        setError(null)
      }, 5000)
    }
  }

  return (
    <section id="contact" className="py-20 border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-balance mb-12">Contacto</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Hablemos</h3>
              <p className="text-foreground leading-relaxed mb-8">
                Estoy disponible para nuevas oportunidades, colaboraciones y proyectos interesantes. No dudes en contactarme.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:lugoojosep@gmail.com"
                className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary hover:bg-background transition-all duration-300"
              >
                <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">lugoojosep@gmail.com</p>
                </div>
              </a>

              <a
                href="https://wa.me/56984211936"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary hover:bg-background transition-all duration-300"
              >
                <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground">WhatsApp</h4>
                  <p className="text-muted-foreground">+56 9 8421 1936</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground">Ubicación</h4>
                  <p className="text-muted-foreground">Penco, Región del Biobío, Chile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 disabled:opacity-50"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 disabled:opacity-50"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 resize-none disabled:opacity-50"
                  placeholder="Tu mensaje aquí..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensaje
                  </>
                )}
              </button>

              {submitted && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-600 text-center font-semibold">
                  ¡Mensaje enviado exitosamente! Te contactaré pronto.
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-600 text-center font-semibold">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}