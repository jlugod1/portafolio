'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function TestPage() {
  const [result, setResult] = useState<string>('Probando...')

  useEffect(() => {
    const testSupabase = async () => {
      try {
        console.log('🧪 INICIANDO PRUEBA DE SUPABASE...')
        
        // Paso 1: Verificar variables de entorno
        console.log('🔍 Verificando variables de entorno:')
        console.log('   URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Presente' : '❌ Faltante')
        console.log('   KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Presente' : '❌ Faltante')
        
        // Paso 2: Intentar consultar mensajes
        console.log('📡 Intentando consultar la tabla contact_messages...')
        const { data, error } = await supabase
          .from('contact_messages')
          .select('*')
          .limit(5)

        if (error) {
          console.error('❌ ERROR en la consulta:', error)
          setResult(`ERROR: ${error.message}`)
          return
        }

        console.log('✅ CONSULTA EXITOSA')
        console.log('📊 Mensajes encontrados:', data)
        setResult(`✅ ÉXITO: Se encontraron ${data.length} mensajes`)

      } catch (error: any) {
        console.error('💥 ERROR GENERAL:', error)
        setResult(`💥 ERROR: ${error.message}`)
      }
    }

    testSupabase()
  }, [])

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-4">Prueba de Conexión Supabase</h1>
      <div className="bg-card p-6 rounded-lg border border-border">
        <p className="text-lg">{result}</p>
        <p className="text-sm text-muted-foreground mt-2">
          Revisa la consola del navegador (F12) para ver los logs detallados.
        </p>
      </div>
    </div>
  )
}
