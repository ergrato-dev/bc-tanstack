# Server State vs Client State

## Objetivos

- Definir qué es server state y por qué difiere del client state.
- Identificar los problemas que resuelve TanStack Query.
- Instalar `@tanstack/react-query` v5 en un proyecto Vite.

## Diagrama

![Flujo de datos TanStack Query](../0-assets/01-query-data-flow.svg)

## 1. ¿Qué es client state?

El **client state** es el estado que vive únicamente en el navegador:
UI flags (`isOpen`, `activeTab`), selecciones del usuario, valores de formularios.

```ts
// Cliente puro — React lo gestiona bien con useState
const [isMenuOpen, setIsMenuOpen] = useState(false)
const [selectedTab, setSelectedTab] = useState<'list' | 'map'>('list')
```

## 2. ¿Qué es server state?

El **server state** es data que viene de un servidor externo. Tiene tres propiedades únicas:

| Propiedad | Descripción |
|-----------|-------------|
| Asíncrono | Requiere `fetch`, `axios` u otro cliente HTTP |
| Compartido | Varios usuarios pueden verlo simultáneamente |
| Desactualizable | Puede cambiar en el servidor sin que el cliente lo sepa |

```ts
// Antes de TanStack Query — gestión manual en useEffect
const [users, setUsers] = useState<User[]>([])
const [isLoading, setIsLoading] = useState(true)
useEffect(() => {
  fetch('/api/users')
    .then(r => r.json())
    .then(data => { setUsers(data); setIsLoading(false) })
}, [])
```

## 3. Problemas que resuelve TanStack Query

Gestionar server state manualmente en `useEffect` genera:

- **Código duplicado**: cada componente repite el mismo patrón fetch + loading + error.
- **Sin cache**: dos componentes distintos hacen dos peticiones idénticas.
- **Sin stale-check**: no sabes cuándo los datos quedaron desactualizados.
- **Race conditions**: peticiones en vuelo pueden llegar en orden inesperado.

TanStack Query centraliza todo en un `QueryClient` con cache, reintentos y
sincronización automática.

## 4. Instalación

```bash
pnpm audit --audit-level moderate
pnpm add @tanstack/react-query@5.100.10 @tanstack/react-query-devtools@5.100.10
```

Verificar en `package.json` que **no hay** prefijos `^` ni `~`.

## Checklist

- [ ] ¿Puedo nombrar dos diferencias entre server state y client state?
- [ ] ¿Entiendo por qué `useEffect` solo no escala para server state?
- [ ] ¿Instalé `@tanstack/react-query` con versión exacta?
- [ ] ¿Ejecuté `pnpm audit` antes de instalar?

## Referencias

- [TanStack Query — Overview](https://tanstack.com/query/latest/docs/framework/react/overview)
- [TanStack Query — Motivation](https://tanstack.com/query/latest/docs/framework/react/guides/does-this-replace-client-state)
