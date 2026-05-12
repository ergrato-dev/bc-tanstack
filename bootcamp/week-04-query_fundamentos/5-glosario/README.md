# Glosario — Semana 04: TanStack Query Fundamentos

Términos clave de la semana, ordenados A–Z.

| Término | Definición |
|---------|-----------|
| **background refetch** | Nueva petición al servidor mientras el componente sigue mostrando datos del cache. |
| **cache** | Almacén en memoria que QueryClient mantiene con los datos de todas las queries. |
| **client state** | Estado que vive solo en el navegador: flags de UI, selecciones, formularios. |
| **defaultOptions** | Configuración global del QueryClient aplicada a todas las queries por defecto. |
| **enabled** | Opción de `useQuery` que evita ejecutar la query si su valor es `false`. |
| **gcTime** | Tiempo que los datos permanecen en cache después de que el componente se desmonta. |
| **isFetching** | `true` cuando hay una petición en vuelo (incluso si hay datos en cache). |
| **isPending** | `true` durante la primera carga (sin datos en cache). Reemplaza `isLoading` en v5. |
| **QueryClient** | Instancia central que gestiona el cache, reintentos y sincronización de queries. |
| **QueryClientProvider** | Componente que inyecta el `QueryClient` en el árbol React via Context. |
| **queryFn** | Función asíncrona que devuelve una `Promise` con los datos de la query. |
| **queryKey** | Array que identifica una entrada única en el cache. Debe ser serializable. |
| **ReactQueryDevtools** | Panel flotante para inspeccionar el estado del cache durante el desarrollo. |
| **retry** | Número de reintentos automáticos ante un error de red antes de marcar `isError`. |
| **server state** | Datos que provienen de un servidor externo: asíncronos, compartidos y desactualizables. |
| **stale** | Estado de una query cuyos datos ya superaron el `staleTime` y pueden estar desactualizados. |
| **staleTime** | Tiempo en ms durante el cual los datos se consideran `fresh` y no se refetchean. |
| **useQuery** | Hook principal de TanStack Query para leer datos del servidor con cache automático. |
