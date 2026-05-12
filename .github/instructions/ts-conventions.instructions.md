---
applyTo: "**/*.{ts,tsx}"
---

# Convenciones TypeScript/React — bc-tanstack Bootcamp

## Estilo obligatorio

- TypeScript estricto — `strict: true` en `tsconfig.json`
- NUNCA usar `any` — usar `unknown` con narrowing o tipos específicos
- Interfaces para props de componentes, `type` para uniones y tipos complejos
- Siempre tipar genéricos de TanStack: `useQuery<Data, Error>()`, `useMutation<Data, Error, Variables>()`
- Comentarios en español, código (nombres, variables, props) en inglés

## Query Keys Factory (NON-NEGOTIABLE)

```ts
// ✅ SIEMPRE usar factory pattern
export const entityKeys = {
  all: () => ["entity"] as const,
  lists: () => [...entityKeys.all(), "list"] as const,
  list: (filters: Filters) => [...entityKeys.lists(), filters] as const,
  details: () => [...entityKeys.all(), "detail"] as const,
  detail: (id: number) => [...entityKeys.details(), id] as const,
};

// ❌ NUNCA magic strings directas
useQuery({ queryKey: ["entity", id] });
```

## Nomenclatura

| Elemento              | Convención         | Ejemplo                           |
| --------------------- | ------------------ | --------------------------------- |
| Componentes           | PascalCase         | `UserCard`, `ProductList`         |
| Hooks                 | `use` + PascalCase | `useUsers`, `useCreateProduct`    |
| Funciones utilitarias | camelCase          | `fetchUsers`, `formatDate`        |
| Constantes            | UPPER_SNAKE_CASE   | `STALE_TIME`, `MAX_RETRIES`       |
| Interfaces            | PascalCase         | `User`, `ApiResponse<T>`          |
| Types                 | PascalCase         | `UserFilters`, `PaginatedList<T>` |
| Archivos componentes  | PascalCase.tsx     | `UserCard.tsx`                    |
| Archivos hooks        | camelCase.ts       | `useUsers.ts`                     |
| Carpetas              | kebab-case         | `user-card/`, `query-keys/`       |

## Estructura de componentes React

```tsx
// 1. Imports (externos → internos → relativos)
import { useQuery } from "@tanstack/react-query";
import { userKeys } from "@/query-keys/userKeys";
import { fetchUser } from "@/api/users";

// 2. Interface de props
interface Props {
  userId: number;
  onSelect?: (user: User) => void;
}

// 3. Componente exportado
export function UserDetail({ userId, onSelect }: Props) {
  // 4. Hooks: estado local → queries → mutations → callbacks → efectos
  const {
    data: user,
    isLoading,
    error,
  } = useQuery<User, Error>({
    queryKey: userKeys.detail(userId),
    queryFn: () => fetchUser(userId),
  });

  // 5. Early returns (loading → error → empty)
  if (isLoading) return <Skeleton />;
  if (error) return <ErrorMessage error={error} />;
  if (!user) return null;

  // 6. Render principal
  return <div onClick={() => onSelect?.(user)}>{user.name}</div>;
}
```

## Compatibilidad de versiones (crítico)

- TanStack Query v5: `isPending` (no `isLoading`) para mutations
- TanStack Router v1: `createRoute` + `createRootRoute`, no file-based routing por defecto
- TanStack Form v1: `form.Field` como componente (no HOC de versiones anteriores)
- TanStack Table v8: `useReactTable` (no `useTable` de v7)

## Gestión de dependencias (NON-NEGOTIABLE)

**Package manager: siempre `pnpm`, nunca `npm` ni `yarn`.**

```bash
# ✅ Consultar versión antes de instalar
pnpm info @tanstack/react-query version

# ✅ Auditar CVEs antes de añadir una dependencia
pnpm audit --audit-level moderate

# ✅ Instalar con versión exacta
pnpm add @tanstack/react-query@5.62.16
```

**`package.json` — versiones exactas, nunca rangos:**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit",
    "lint": "eslint . --max-warnings 0",
    "test": "vitest",
    "test:coverage": "vitest run --coverage"
  },
  "dependencies": {
    "@tanstack/react-query": "5.62.16",
    "react": "19.1.0",
    "react-dom": "19.1.0"
  }
}
```

Nunca usar `^`, `~`, `>=`, `*` ni `latest`. Una versión flotante puede instalar
un paquete con CVE sin advertencia en la siguiente ejecución de `pnpm install`.

## Calidad (NON-NEGOTIABLE)

La calidad no es una opción — es una obligación. 100% de calidad.

- Todo error se corrige **en el momento en que se detecta**, sin importar la etapa
- Prohibido `@ts-ignore`, `@ts-expect-error` o `eslint-disable` como soluciones permanentes
- Lo que se desarrolla se prueba: cobertura mínima **≥ 85%** (líneas, ramas y funciones)

**Definition of Done** — un componente/hook está terminado cuando:

```bash
pnpm typecheck        # sin errores de tipos
pnpm lint             # sin warnings de ESLint
pnpm test:coverage    # todos en verde, cobertura ≥ 85%
pnpm audit --audit-level moderate  # sin critical/high
```

## Seguridad

- NUNCA usar `dangerouslySetInnerHTML` con datos del servidor sin sanitizar
- NUNCA exponer secretos con prefijo `VITE_` (solo para valores públicos)
- Validar datos de servidor con `zod.parse()` en los límites de la app

## Proyectos (3-proyecto/) vs Ejercicios (2-practicas/)

- **Ejercicios**: código comentado que el alumno descomenta bloque a bloque
- **Proyectos**: `// TODO:` para que el alumno implemente desde cero
