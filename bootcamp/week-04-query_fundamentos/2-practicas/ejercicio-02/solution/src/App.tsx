import { useState } from 'react'
import { PostList } from '@/components/PostList'
import { PostDetail } from '@/components/PostDetail'

export default function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <div style={{
      fontFamily: 'system-ui',
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      background: '#0F172A',
      minHeight: '100vh',
    }}>
      <h1 style={{ color: '#FF4154', marginBottom: '1.5rem' }}>
        TanStack Query — Ejercicio 02
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '1.5rem' }}>
        <div>
          <h2 style={{ color: '#94A3B8', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 0.75rem' }}>
            Lista de posts
          </h2>
          <PostList onSelect={setSelectedId} selectedId={selectedId} />
        </div>
        <div>
          <h2 style={{ color: '#94A3B8', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 0.75rem' }}>
            Detalle
          </h2>
          {selectedId
            ? <PostDetail postId={selectedId} />
            : <p style={{ color: '#475569' }}>Selecciona un post para ver el detalle.</p>
          }
        </div>
      </div>
    </div>
  )
}
