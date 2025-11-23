'use client'

import { useState } from 'react'

interface AuthGuardProps {
  children: React.ReactNode
}

// CAMBIA ESTA CONTRASEña por una segura
///const ADMIN_PASSWORD = 'admin123'
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD
if (!ADMIN_PASSWORD) {
  throw new Error('NEXT_PUBLIC_ADMIN_PASSWORD no está configurada')
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
    } else {
      alert('Contraseña incorrecta')
    }
    setPassword('')
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="bg-card p-8 rounded-xl border border-border max-w-md w-full">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Acceso Admin
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Ingresa la contraseña"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Acceder
            </button>
          </form>
        </div>
      </div>
    )
  }

  return <>{children}</>
}