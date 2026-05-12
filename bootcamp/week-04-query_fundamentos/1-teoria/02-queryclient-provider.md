# QueryClient y QueryClientProvider

## Objetivos

- Crear y configurar un `QueryClient` con `defaultOptions`.
- Envolver la aplicación con `QueryClientProvider`.
- Usar TanStack Query DevTools para inspeccionar el cache.

## Diagrama

![Flujo de datos TanStack Query](../0-assets/01-query-data-flow.svg)

## 1. QueryClient: el corazón del sistema

`QueryClient` es la instancia que gestiona el **cache global** de todas las queries.
Se crea una sola vez fuera del árbol de componentes para evitar recreaciones.

```ts
// src/main.tsx — crear fuera del componente
import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutos antes de marcar datos como stale
      retry: 1,                 // 1 reintento ante error de red
    },
  },
})
```

## 2. QueryClientProvider

`QueryClientProvider` inyecta el `queryClient` en el árbol React mediante Context.
Todos los hooks de TanStack Query lo leen de ahí.

```tsx
// src/main.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 5, retry: 1 } },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
)
```

## 3. DevTools

`ReactQueryDevtools` añade un panel flotante que muestra:

- Queries activas, inactivas y en background.
- Estado de cada query: `fresh`, `stale`, `fetching`, `paused`, `inactive`.
- Datos del cache e historial de errores.

> Solo se renderiza en desarrollo: `import.meta.env.DEV` es `true` en Vite dev server.

## 4. Acceder al cliente programáticamente

```ts
import { useQueryClient } from '@tanstack/react-query'

function RefreshButton() {
  const queryClient = useQueryClient()
  return (
    <button onClick={() => queryClient.invalidateQueries({ queryKey: ['items'] })}>
      Actualizar
    </button>
  )
}
```

## Checklist

- [ ] ¿Creé el `QueryClient` fuera del árbol de componentes?
- [ ] ¿Envolví `<App />` con `<QueryClientProvider client={queryClient}>`?
- [ ] ¿Veo el panel de DevTools al abrir la app en desarrollo?
- [ ] ¿Sé qué significa que una query esté en estado `stale`?

## Referencias

- [QueryClient API](https://tanstack.com/query/latest/docs/reference/QueryClient)
- [QueryClientProvider](https://tanstack.com/query/latest/docs/framework/react/reference/QueryClientProvider)
