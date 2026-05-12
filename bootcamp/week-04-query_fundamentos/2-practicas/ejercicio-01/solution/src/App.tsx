import { useQuery } from '@tanstack/react-query'

// Comprobación de que el QueryClient está disponible
function StatusBadge() {
  const { isSuccess } = useQuery({
    queryKey: ['status-check'],
    queryFn: () => Promise.resolve({ ok: true }),
    staleTime: Infinity,
  })

  return (
    <div style={{
      marginTop: '1.5rem',
      padding: '1rem',
      background: '#1E293B',
      borderRadius: '8px',
      borderLeft: `4px solid ${isSuccess ? '#22C55E' : '#F59E0B'}`,
    }}>
      <strong style={{ color: '#F8FAFC' }}>QueryClient:</strong>
      <span style={{ color: isSuccess ? '#22C55E' : '#F59E0B', marginLeft: '0.5rem' }}>
        {isSuccess ? '✓ Configurado correctamente' : 'Cargando…'}
      </span>
    </div>
  )
}

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui', padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: '#FF4154' }}>TanStack Query — Ejercicio 01</h1>
      <p style={{ color: '#64748B' }}>
        QueryClient y DevTools configurados correctamente.
      </p>
      <StatusBadge />
      <p style={{ color: '#64748B', marginTop: '1rem', fontSize: '0.875rem' }}>
        Abre el panel de DevTools (ícono inferior izquierdo) y busca la query{' '}
        <code>status-check</code>.
      </p>
    </div>
  )
}
