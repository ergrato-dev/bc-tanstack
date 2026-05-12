// ============================================
// EJERCICIO 01 — Contador y Timer
// Semana 02 — React Moderno
// ============================================
//
// Descomenta los bloques en orden: PASO 1 → PASO 4
// Guarda y verifica en el navegador después de cada paso.

// ============================================
// PASO 1: Importar hooks de React
// ============================================

// Descomenta las siguientes líneas:
// import { useState, useEffect, useRef } from 'react'

// ============================================
// PASO 2: Estado del contador con useState
// ============================================

// export function App() {
//   // Estado del contador — valor inicial 0
//   const [count, setCount] = useState<number>(0)
//
//   return (
//     <main style={{ fontFamily: 'system-ui', padding: '2rem', maxWidth: '400px' }}>
//       <h1>Contador: {count}</h1>
//
//       {/* Actualización funcional — el nuevo valor depende del anterior */}
//       <button onClick={() => setCount(prev => prev - 1)}>−</button>
//       <button onClick={() => setCount(prev => prev + 1)}>+</button>
//     </main>
//   )
// }

// ============================================
// PASO 3: Timer con useEffect + cleanup
// ============================================

// export function App() {
//   const [count, setCount] = useState<number>(0)
//   // Estado del timer
//   const [seconds, setSeconds] = useState<number>(0)
//   const [running, setRunning] = useState<boolean>(true)
//
//   useEffect(() => {
//     if (!running) return
//
//     // Iniciar intervalo — actualización funcional para evitar stale closure
//     const id = setInterval(() => setSeconds(s => s + 1), 1000)
//
//     // Limpieza: cancelar el intervalo antes del próximo efecto o al desmontar
//     return () => clearInterval(id)
//   }, [running]) // El efecto se re-ejecuta cuando running cambia
//
//   return (
//     <main style={{ fontFamily: 'system-ui', padding: '2rem', maxWidth: '400px' }}>
//       <h1>Contador: {count}</h1>
//       <button onClick={() => setCount(prev => prev - 1)}>−</button>
//       <button onClick={() => setCount(prev => prev + 1)}>+</button>
//
//       <hr />
//       <h2>Timer: {seconds}s</h2>
//       <button onClick={() => setRunning(r => !r)}>
//         {running ? 'Pausar' : 'Reanudar'}
//       </button>
//     </main>
//   )
// }

// ============================================
// PASO 4: Almacenar intervalId en useRef + Reset
// ============================================

// export function App() {
//   const [count, setCount] = useState<number>(0)
//   const [seconds, setSeconds] = useState<number>(0)
//   const [running, setRunning] = useState<boolean>(true)
//   // useRef para guardar el ID sin causar re-render
//   const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
//
//   useEffect(() => {
//     if (!running) {
//       // Limpiar el intervalo actual al pausar
//       if (intervalRef.current) clearInterval(intervalRef.current)
//       return
//     }
//
//     intervalRef.current = setInterval(() => setSeconds(s => s + 1), 1000)
//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current)
//     }
//   }, [running])
//
//   function handleReset() {
//     setCount(0)
//     setSeconds(0)
//     setRunning(true)
//   }
//
//   return (
//     <main style={{ fontFamily: 'system-ui', padding: '2rem', maxWidth: '400px' }}>
//       <h1>Contador: {count}</h1>
//       <button onClick={() => setCount(prev => prev - 1)}>−</button>
//       <button onClick={() => setCount(prev => prev + 1)}>+</button>
//
//       <hr />
//       <h2>Timer: {seconds}s</h2>
//       <button onClick={() => setRunning(r => !r)}>
//         {running ? 'Pausar' : 'Reanudar'}
//       </button>
//       <button onClick={handleReset} style={{ marginLeft: '0.5rem' }}>
//         Reset
//       </button>
//     </main>
//   )
// }

// ----------------------------------------
// Exportación temporal para que el archivo compile
// Reemplaza esto cuando descomentes el componente
export function App() {
  return <p>Descomenta los bloques en orden (PASO 1 → PASO 4)</p>
}
