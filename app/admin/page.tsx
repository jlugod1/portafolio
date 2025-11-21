import MessagesAdmin from '@/components/admin/messages-admin'
import AuthGuard from '@/components/admin/auth-guard'

export default function AdminPage() {
  return (
    <AuthGuard>
      <MessagesAdmin />
    </AuthGuard>
  )
}