// ============================================
// PASO 2: Crear QueryClient
// ============================================

// QueryClient es el corazón del sistema de cache de TanStack Query.
// Se crea UNA SOLA VEZ fuera del árbol de componentes.
//
// Descomenta las siguientes líneas:

// import { QueryClient } from '@tanstack/react-query'
//
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 1000 * 60 * 5, // 5 minutos
//       retry: 1,
//     },
//   },
// })

// ============================================
// PASO 3: QueryClientProvider
// ============================================

// QueryClientProvider inyecta el queryClient en todo el árbol React.
// Envuelve el componente raíz con él.
//
// Descomenta las siguientes líneas y reemplaza el render existente:

// import { QueryClientProvider } from '@tanstack/react-query'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App'
//
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <App />
//     </QueryClientProvider>
//   </StrictMode>,
// )

// ============================================
// PASO 4: ReactQueryDevtools
// ============================================

// DevTools añade un panel flotante para inspeccionar el cache.
// Solo se muestra en desarrollo (Vite no lo incluye en el build final).
//
// Descomenta la importación y añade <ReactQueryDevtools /> dentro del Provider:

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
//
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <App />
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   </StrictMode>,
// )

// --- Código de arranque (no borrar) ---
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
