import { useState, useEffect, useRef } from 'react'

export function App() {
  // Estado del contador
  const [count, setCount] = useState<number>(0)
  // Estado del timer
  const [seconds, setSeconds] = useState<number>(0)
  const [running, setRunning] = useState<boolean>(true)
  // useRef almacena el ID del intervalo sin causar re-render
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!running) {
      // Limpiar el intervalo al pausar
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }

    // Iniciar nuevo intervalo — actualización funcional evita stale closure
    intervalRef.current = setInterval(() => setSeconds(s => s + 1), 1000)

    // Limpieza: cancelar antes del próximo efecto o al desmontar
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [running])

  function handleReset() {
    setCount(0)
    setSeconds(0)
    setRunning(true)
  }

  return (
    <main style={{ fontFamily: 'system-ui', padding: '2rem', maxWidth: '400px' }}>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(prev => prev - 1)}>−</button>
      <button onClick={() => setCount(prev => prev + 1)} style={{ marginLeft: '0.5rem' }}>
        +
      </button>

      <hr />

      <h2>Timer: {seconds}s</h2>
      <button onClick={() => setRunning(r => !r)}>
        {running ? 'Pausar' : 'Reanudar'}
      </button>
      <button onClick={handleReset} style={{ marginLeft: '0.5rem' }}>
        Reset
      </button>
    </main>
  )
}
