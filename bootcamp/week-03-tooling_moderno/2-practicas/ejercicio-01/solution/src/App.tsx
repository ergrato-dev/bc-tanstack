import { useState } from 'react'

// Componente de indicador de estado del pipeline
function StatusItem({ label, ok }: { label: string; ok: boolean }) {
  return (
    <li style={{ color: ok ? '#22C55E' : '#EF4444', marginBottom: '0.5rem' }}>
      {ok ? '✓' : '✗'} {label}
    </li>
  )
}

function PipelineStatus() {
  const [checked, setChecked] = useState(false)
  return (
    <div style={{ marginTop: '1rem', fontFamily: 'monospace' }}>
      <button
        onClick={() => setChecked(true)}
        style={{
          padding: '0.5rem 1rem',
          background: '#1E293B',
          color: '#F1F5F9',
          border: '1px solid #334155',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Marcar pipeline como verificado
      </button>
      {checked && (
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
          <StatusItem label="pnpm typecheck" ok={true} />
          <StatusItem label="pnpm lint" ok={true} />
          <StatusItem label="pnpm format:check" ok={true} />
          <StatusItem label="pnpm build" ok={true} />
        </ul>
      )}
    </div>
  )
}

export function App() {
  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'system-ui',
        background: '#0F172A',
        color: '#F1F5F9',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ color: '#93C5FD' }}>Ejercicio 01 — Tooling Moderno</h1>
      <p style={{ color: '#64748B' }}>Semana 03: Vite · ESLint · Prettier</p>
      <PipelineStatus />
    </div>
  )
}
