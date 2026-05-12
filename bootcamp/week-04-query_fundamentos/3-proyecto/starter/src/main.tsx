// TODO: Configurar QueryClient con defaultOptions (staleTime, retry)
// TODO: Envolver <App /> con <QueryClientProvider client={queryClient}>
// TODO: Añadir <ReactQueryDevtools initialIsOpen={false} /> dentro del Provider
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
