'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Mail, Calendar, Eye, EyeOff, Trash2, Search } from 'lucide-react'

interface ContactMessage {
  id: string
  name: string
  email: string
  message: string
  created_at: string
  read: boolean
}

export default function MessagesAdmin() {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchMessages()
  }, [])

 /* const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setMessages(data || [])
    } catch (error) {
      console.error('Error fetching messages:', error)
    } finally {
      setLoading(false)
    }
  }*/
 const fetchMessages = async () => {
  try {
    console.log('🔄 PASO 1: Iniciando fetchMessages...')
    console.log('📡 URL de Supabase:', process.env.NEXT_PUBLIC_SUPABASE_URL)
    
    console.log('🔄 PASO 2: Haciendo consulta a Supabase...')
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false })

    console.log('🔄 PASO 3: Respuesta recibida de Supabase')
    console.log('📦 Datos recibidos:', data)
    console.log('❌ Errores recibidos:', error)

    if (error) {
      console.error('❌ ERROR en Supabase:', error)
      console.error('🔍 Detalles del error:', {
        message: error.message,
        details: error.details,
        hint: error.hint
      })
      throw error
    }
    
    console.log('✅ ÉXITO: Mensajes obtenidos correctamente')
    console.log('📊 Cantidad de mensajes:', data?.length || 0)
    setMessages(data || [])
    
  } catch (error) {
    console.error('💥 ERROR COMPLETO en fetchMessages:', error)
  } finally {
    console.log('🏁 Fetch completado, cambiando loading a false')
    setLoading(false)
  }
}

  const markAsRead = async (id: string) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ read: true })
        .eq('id', id)

      if (error) throw error
      
      setMessages(messages.map(msg => 
        msg.id === id ? { ...msg, read: true } : msg
      ))
    } catch (error) {
      console.error('Error marking as read:', error)
    }
  }

  const markAsUnread = async (id: string) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ read: false })
        .eq('id', id)

      if (error) throw error
      
      setMessages(messages.map(msg => 
        msg.id === id ? { ...msg, read: false } : msg
      ))
    } catch (error) {
      console.error('Error marking as unread:', error)
    }
  }

  const deleteMessage = async (id: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este mensaje?')) return

    try {
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id)

      if (error) throw error
      
      setMessages(messages.filter(msg => msg.id !== id))
    } catch (error) {
      console.error('Error deleting message:', error)
    }
  }

  const filteredMessages = messages.filter(message =>
    message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.message.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const unreadCount = messages.filter(msg => !msg.read).length

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-foreground">Cargando mensajes...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Panel de Mensajes
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>Total: {messages.length} mensajes</span>
            </div>
            {unreadCount > 0 && (
              <div className="flex items-center gap-2 text-blue-600">
                <Eye size={16} />
                <span>No leídos: {unreadCount}</span>
              </div>
            )}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Buscar en mensajes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Messages List */}
        <div className="space-y-4">
          {filteredMessages.length === 0 ? (
            <div className="text-center py-12">
              <Mail size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-foreground text-lg">
                {searchTerm ? 'No se encontraron mensajes' : 'No hay mensajes aún'}
              </p>
            </div>
          ) : (
            filteredMessages.map((message) => (
              <div
                key={message.id}
                className={`bg-card border rounded-xl p-6 transition-all duration-200 ${
                  message.read 
                    ? 'border-border' 
                    : 'border-blue-500 bg-blue-50/10 shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-foreground text-lg">
                        {message.name}
                      </h3>
                      {!message.read && (
                        <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full font-medium">
                          Nuevo
                        </span>
                      )}
                    </div>
                    <a
                      href={`mailto:${message.email}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      {message.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(message.created_at).toLocaleDateString('es-CL')}
                      </div>
                      <div>
                        {new Date(message.created_at).toLocaleTimeString('es-CL')}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                    {message.message}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  {!message.read ? (
                    <button
                      onClick={() => markAsRead(message.id)}
                      className="flex items-center gap-2 px-3 py-2 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <Eye size={16} />
                      Marcar como leído
                    </button>
                  ) : (
                    <button
                      onClick={() => markAsUnread(message.id)}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-500 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <EyeOff size={16} />
                      Marcar como no leído
                    </button>
                  )}
                  
                  <button
                    onClick={() => deleteMessage(message.id)}
                    className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <Trash2 size={16} />
                    Eliminar
                  </button>

                  <a
                    href={`mailto:${message.email}?subject=Respuesta a tu mensaje&body=Hola ${message.name},`}
                    className="ml-auto px-4 py-2 bg-primary text-primary-foreground text-sm rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Responder
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}