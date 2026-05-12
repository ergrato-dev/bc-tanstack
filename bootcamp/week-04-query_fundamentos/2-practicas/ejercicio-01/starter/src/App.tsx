// ============================================
// PASO 1: Verificar el entorno
// ============================================

// Este componente muestra que la app está lista para usar TanStack Query.
// No necesitas modificar este archivo.

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui', padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: '#FF4154' }}>TanStack Query — Ejercicio 01</h1>
      <p style={{ color: '#64748B' }}>
        Sigue los pasos en <code>src/main.tsx</code> para configurar el QueryClient.
      </p>
      <p style={{ color: '#64748B' }}>
        Cuando termines, verás el ícono de DevTools en la esquina inferior izquierda.
      </p>
      <div style={{
        marginTop: '1.5rem',
        padding: '1rem',
        background: '#1E293B',
        borderRadius: '8px',
        borderLeft: '4px solid #FF4154',
      }}>
        <strong style={{ color: '#F8FAFC' }}>Estado:</strong>
        <span style={{ color: '#94A3B8', marginLeft: '0.5rem' }}>
          Completando pasos…
        </span>
      </div>
    </div>
  )
}
