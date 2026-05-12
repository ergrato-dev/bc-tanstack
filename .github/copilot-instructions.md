# 🤖 Instrucciones para GitHub Copilot

## 📋 Contexto del Bootcamp

Este es un **Bootcamp de TanStack de Cero a Héroe** estructurado para llevar a estudiantes
desde cero hasta un nivel de **TanStack Developer Junior** — capaz de construir
aplicaciones React completas usando el ecosistema TanStack.

### 📊 Datos del Bootcamp

- **Duración**: 24 semanas (~6 meses)
- **Dedicación semanal**: 8 horas
- **Total de horas**: ~192 horas
- **Nivel de entrada**: Conocimiento básico de HTML, CSS y JavaScript
- **Nivel de salida**: TanStack Developer Junior / React Developer Junior
- **Enfoque**: 100% práctico — cada semana combina teoría concisa, ejercicios guiados y proyecto integrador
- **Stack base**: TypeScript 5 + React 19 + Vite 6

---

## 🎯 Objetivos de Aprendizaje

Al finalizar el bootcamp, los estudiantes serán capaces de:

- ✅ Gestionar server state con TanStack Query v5 (cache, mutations, infinite queries, optimistic updates)
- ✅ Construir SPAs y apps SSR con routing completamente type-safe (TanStack Router)
- ✅ Implementar tablas de datos complejas con operaciones server-side (TanStack Table)
- ✅ Manejar formularios complejos con validación síncrona y asíncrona (TanStack Form)
- ✅ Virtualizar listas y grids masivos sin degradación de performance (TanStack Virtual)
- ✅ Desarrollar aplicaciones full-stack con SSR y server functions (TanStack Start)
- ✅ Integrar todo el ecosistema en una arquitectura coherente y mantenible

---

## 📚 Estructura del Bootcamp

### Distribución por Etapas

| Etapa                               | Semanas | Horas | Contenido principal                                     |
| ----------------------------------- | ------- | ----- | ------------------------------------------------------- |
| **0 — Fundamentos Técnicos**        | 1–3     | 24h   | TypeScript, React moderno, Tooling                      |
| **1 — TanStack Query: Fundamentos** | 4–7     | 32h   | `useQuery`, `queryKey`, `useMutation`, cache            |
| **2 — TanStack Query: Avanzado**    | 8–10    | 24h   | Infinite queries, Suspense, optimistic updates, testing |
| **3 — TanStack Router**             | 11–14   | 32h   | Type-safe routing, loaders, auth patterns               |
| **4 — TanStack Table**              | 15–17   | 24h   | Headless tables, sorting, server-side ops               |
| **5 — TanStack Form**               | 18–19   | 16h   | Form state, Zod, async validation                       |
| **6 — TanStack Virtual + Start**    | 20–22   | 24h   | Virtualization, SSR, full-stack                         |
| **7 — Proyecto Final Integrador**   | 23–24   | 16h   | App full-stack con todo el stack                        |

#### Etapa 0: Fundamentos Técnicos (Semanas 1–3)

- **S01**: TypeScript esencial — tipos, interfaces, generics, utility types (`Partial`, `Pick`, `ReturnType`), `satisfies`
- **S02**: React moderno — hooks (`useState`, `useEffect`, `useRef`, `useMemo`, `useCallback`), composición, error boundaries, Context API
- **S03**: Tooling moderno — Vite, pnpm, ESLint + Prettier, Vitest, estructura de proyecto

#### Etapa 1: TanStack Query — Fundamentos (Semanas 4–7)

- **S04**: Server state vs client state, instalación, primer `useQuery`, `QueryClient`, `QueryClientProvider`
- **S05**: `queryKey` factory pattern, `enabled`, dependent queries, `select`, `placeholderData`
- **S06**: `useMutation`, callbacks (`onSuccess`, `onError`, `onSettled`), manejo de errores, `isLoading` vs `isPending`
- **S07**: Cache: `staleTime`, `gcTime`, `invalidateQueries`, `refetchOnWindowFocus`, background refetch, `setQueryData`

#### Etapa 2: TanStack Query — Avanzado (Semanas 8–10)

- **S08**: `useInfiniteQuery`, `getNextPageParam`, scroll infinito, paginación por botón
- **S09**: `prefetchQuery`, parallel queries, `useSuspenseQuery`, error boundaries con Suspense
- **S10**: Optimistic updates, rollback, updates manuales del cache, testing con MSW, TanStack Query DevTools

#### Etapa 3: TanStack Router (Semanas 11–14)

- **S11**: `createRootRoute`, `createRoute`, `RouterProvider`, `<Link>`, `<Outlet>`, navegación programática
- **S12**: Nested routes, layout routes, pathless routes, `<Outlet>` anidados, 404 routes
- **S13**: Route params tipados, search params con Zod, `loader`, `beforeLoad`, route context
- **S14**: Auth guard pattern, `redirect`, lazy loading de rutas, integración con TanStack Query en loaders

#### Etapa 4: TanStack Table (Semanas 15–17)

- **S15**: `useReactTable`, `columnDef`, `getCoreRowModel`, render de headers y cells, tipado TypeScript
- **S16**: `getSortedRowModel`, `getFilteredRowModel`, `getPaginationRowModel`, column filters, global filter
- **S17**: `manualSorting`, `manualFiltering`, `manualPagination`, row selection, column visibility, expandable rows

#### Etapa 5: TanStack Form (Semanas 18–19)

- **S18**: `useForm`, `form.Field`, `validators`, integración con Zod/Valibot, submit handling, estado de campos
- **S19**: Array fields, `form.useFieldArray`, async validation, integración con TanStack Query (submit → mutation)

#### Etapa 6: TanStack Virtual + Start (Semanas 20–22)

- **S20**: `useVirtualizer`, listas verticales/horizontales, grids virtualizados, dynamic item sizes
- **S21**: TanStack Start — SSR, `createServerFn`, streaming, integración Router + Query en el servidor
- **S22**: Full-stack — auth server-side, API patterns, variables de entorno, deployment en Vercel/Fly.io

#### Etapa 7: Proyecto Final Integrador (Semanas 23–24)

- **S23**: Arquitectura e implementación del proyecto (CRUD + tabla paginada + formulario complejo + rutas protegidas)
- **S24**: Code review, optimización de performance, CI/CD, documentación, portfolio

---

## 🗂️ Estructura de Carpetas

Cada semana sigue esta estructura estándar:

```
bootcamp/week-XX-tema_principal/
├── README.md                 # Descripción y objetivos de la semana
├── rubrica-evaluacion.md     # Criterios de evaluación detallados
├── 0-assets/                 # Diagramas SVG (arquitectura, flujo, ciclo de vida)
├── 1-teoria/                 # Material teórico (archivos .md numerados)
├── 2-practicas/              # Ejercicios guiados paso a paso
│   └── ejercicio-XX/
│       ├── README.md         # Instrucciones y pasos
│       ├── starter/
│       │   ├── src/          # Código con secciones comentadas para descomentar
│       │   ├── package.json  # Dependencias exactas (sin rangos ^)
│       │   └── vite.config.ts
│       └── solution/
│           └── src/          # Código completo y funcional
├── 3-proyecto/               # Proyecto semanal integrador
│   ├── README.md
│   └── starter/
│       └── src/              # Esqueleto con TODOs para implementar
├── 4-recursos/               # Recursos adicionales
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/
    └── README.md             # Términos clave de la semana (A–Z)
```

### 📁 Carpetas Raíz

- `assets/`: Recursos visuales globales (logos, headers, banners)
- `docs/`: Documentación general del bootcamp
- `scripts/`: Scripts de automatización y utilidades
- `bootcamp/`: Contenido semanal del bootcamp

### 🗂️ Orden de Creación de Cada Semana

Al desarrollar el contenido de una nueva semana, seguir siempre este orden:

1. `README.md` — Descripción general, objetivos, distribución del tiempo, navegación
2. `rubrica-evaluacion.md` — Tabla de criterios y puntajes
3. `1-teoria/` — Archivos markdown numerados (`01-`, `02-`, …)
4. `0-assets/` — Diagramas SVG vinculados a la teoría
5. `2-practicas/` — Ejercicios con `starter/` + `solution/`
6. `3-proyecto/` — Proyecto integrador semanal
7. `4-recursos/` — Videografía, webgrafía
8. `5-glosario/README.md` — Términos de la semana ordenados A–Z

---

## 🎓 Componentes de Cada Semana

### 1. Teoría (1-teoria/)

- Archivos markdown con explicaciones conceptuales
- Ejemplos TypeScript/React completos y ejecutables
- Referencia a diagrama SVG al inicio (después de objetivos)
- Referencias a documentación oficial de TanStack

#### 📏 Límites de Extensión (NON-NEGOTIABLE)

El público objetivo tiene déficit de atención. Textos extensos generan abandono.

| Restricción                    | Valor                            |
| ------------------------------ | -------------------------------- |
| Líneas por archivo             | Máximo 120                       |
| Objetivos                      | 3–4 ítems                        |
| Secciones numeradas            | 4–6 (`## 1.`, `## 2.`…)          |
| Ejemplos de código por sección | Máximo 2                         |
| Checklist final                | 4 ítems como preguntas concretas |
| Referencias                    | 2–3 links                        |

**Qué NO incluir en teoría:**

- ❌ Tablas de comparación de más de 4 filas
- ❌ Bloques de código de más de 25 líneas
- ❌ Secciones "Herramientas recomendadas" (van en `4-recursos/`)
- ❌ Notas de compatibilidad extensas (una línea `>` es suficiente)
- ❌ Más de 2 ejemplos de código por sección
- ❌ Explicaciones de API completa (enlazar a docs oficiales)

### 2. Prácticas (2-practicas/)

Los ejercicios son tutoriales guiados, NO tareas con TODOs. El estudiante aprende
**descomentando código TypeScript/React** bloque a bloque.

#### Formato de ejercicio starter

```tsx
// ============================================
// PASO 1: Nombre del Concepto
// ============================================

// Explicación breve del concepto
// Descomenta las siguientes líneas:

// import { useQuery } from '@tanstack/react-query'
//
// export function MiComponente() {
//   const { data, isLoading } = useQuery({
//     queryKey: ['items'],
//     queryFn: fetchItems,
//   })
//
//   if (isLoading) return <p>Cargando...</p>
//   return <ul>{data?.map(item => <li key={item.id}>{item.name}</li>)}</ul>
// }
```

#### ❌ NUNCA usar TODOs en ejercicios (eso es para proyectos):

```tsx
// ❌ INCORRECTO — Este formato es para PROYECTOS, no ejercicios
export function MiComponente() {
  // TODO: implementar useQuery aquí
}
```

### 3. Proyecto (3-proyecto/)

A diferencia de los ejercicios, el proyecto SÍ usa `// TODO:` para que el estudiante
implemente desde cero. Las instrucciones deben ser genéricas y adaptables al dominio asignado.

#### 🏛️ Política de Dominios Únicos (Anticopia)

Cada aprendiz recibe un dominio único asignado por el instructor. Esto garantiza
implementaciones originales y previene la copia. Ver `docs/dominios.md`.

> ⚠️ Los dominios marcados `★` en el catálogo están reservados para ejemplos del bootcamp —
> no asignar a aprendices para evitar regalar soluciones.

#### Formato del starter del proyecto

```tsx
// ============================================
// PROYECTO SEMANAL: [Título Genérico]
// Semana XX — [Tema]
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta este esquema a tu dominio asignado (ver docs/dominios.md).
// Ejemplos de adaptación según dominio:
//   Biblioteca    → books, authors, loans, members
//   Clínica vet   → pets, owners, appointments, treatments
//   E-commerce    → products, orders, customers, categories
//   Marina        → boats, berths, owners, services

// TODO: Definir las interfaces de tu dominio
// TODO: Implementar el queryKey factory
// TODO: Implementar las funciones de fetching
// TODO: Implementar los componentes principales
```

### 4. Recursos (4-recursos/)

- `videografia/`: Videos tutoriales recomendados (YouTube, Egghead, etc.)
- `webgrafia/`: Documentación oficial, artículos, blog posts

### 5. Glosario (5-glosario/)

- Términos TanStack/React/TypeScript ordenados alfabéticamente
- Definiciones claras y concisas
- Ejemplos de código cuando aplique

---

## 📝 Convenciones de Código TypeScript/React

### Estilo TypeScript

```tsx
// ✅ BIEN — tipado explícito, query key factory, hooks tipados
interface User {
  id: number;
  name: string;
  email: string;
}

export const userKeys = {
  all: () => ["users"] as const,
  detail: (id: number) => [...userKeys.all(), "detail", id] as const,
};

function useUser(id: number) {
  return useQuery<User, Error>({
    queryKey: userKeys.detail(id),
    queryFn: () => fetchUser(id),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
}

// ❌ MAL — any, magic strings, sin tipos
function useUser(id) {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => fetchUser(id),
  });
}
```

### Reglas de Nomenclatura

| Elemento             | Convención         | Ejemplo                           |
| -------------------- | ------------------ | --------------------------------- |
| Componentes          | PascalCase         | `UserCard`, `ProductList`         |
| Hooks                | `use` + PascalCase | `useUsers`, `useCreateProduct`    |
| Funciones            | camelCase          | `fetchUsers`, `formatDate`        |
| Constantes           | UPPER_SNAKE_CASE   | `STALE_TIME`, `MAX_RETRIES`       |
| Interfaces           | PascalCase         | `User`, `ApiResponse<T>`          |
| Types                | PascalCase         | `UserFilters`, `PaginatedList<T>` |
| Archivos componentes | PascalCase.tsx     | `UserCard.tsx`                    |
| Archivos hooks       | camelCase.ts       | `useUsers.ts`                     |
| Carpetas             | kebab-case         | `user-card/`, `query-keys/`       |

### Query Keys Factory (NON-NEGOTIABLE)

Siempre usar el patrón factory para query keys — nunca magic strings dispersas:

```ts
// ✅ CORRECTO — factory pattern tipado
export const userKeys = {
  all: () => ["users"] as const,
  lists: () => [...userKeys.all(), "list"] as const,
  list: (filters: UserFilters) => [...userKeys.lists(), filters] as const,
  details: () => [...userKeys.all(), "detail"] as const,
  detail: (id: number) => [...userKeys.details(), id] as const,
};

// ❌ INCORRECTO — magic strings dispersas
useQuery({ queryKey: ["users"] });
useQuery({ queryKey: ["users", "list"] });
```

### Estructura de Componentes React

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

### Versiones de Dependencias (NON-NEGOTIABLE)

**SIEMPRE versiones exactas, NUNCA rangos:**

```json
{
  "dependencies": {
    "@tanstack/react-query": "5.62.16",
    "@tanstack/react-router": "1.114.24",
    "react": "19.1.0",
    "react-dom": "19.1.0"
  }
}
```

```json
// ❌ PROHIBIDO — rangos flotantes: builds no reproducibles + riesgo de CVE silencioso
{
  "dependencies": {
    "@tanstack/react-query": "^5.0.0",
    "react": ">=19.0.0"
  }
}
```

---

## 📦 Gestión de Dependencias (NON-NEGOTIABLE)

### Package manager: pnpm — exclusivo y sin excepciones

- ✅ **Siempre `pnpm`** — es el único gestor de paquetes permitido en este proyecto
- ❌ **Nunca `npm`** — ni siquiera para scripts puntuales
- ❌ **Nunca `yarn`** — ni v1 ni v4 (Yarn Berry)
- ❌ **Nunca `bun`** como gestor de dependencias en contexto del bootcamp

```bash
# ✅ CORRECTO
pnpm add @tanstack/react-query@5.62.16
pnpm install
pnpm run dev

# ❌ PROHIBIDO
npm install
yarn add react-query
```

> Si Copilot genera comandos con `npm` o `yarn`, corregirlos a `pnpm` siempre.

### Consultar versión antes de instalar

```bash
# Consultar la versión estable actual antes de fijarla
pnpm info @tanstack/react-query version
pnpm info react version
```

### Auditoría de CVEs — obligatoria antes de cada instalación

Antes de añadir o actualizar cualquier dependencia, ejecutar la auditoría:

```bash
# Auditar el árbol de dependencias actual
pnpm audit --audit-level moderate

# Si se detectan vulnerabilidades, NO instalar hasta resolverlas
# Documentar excepciones justificadas si las hay
```

| Nivel          | Acción                                                          |
| -------------- | --------------------------------------------------------------- |
| `critical`     | Bloquea la instalación — resolver o descartar el paquete        |
| `high`         | Bloquea la instalación — buscar alternativa o versión parcheada |
| `moderate`     | Revisar — instalar solo si no hay alternativa y se documenta    |
| `low` / `info` | Registrar — no bloquea                                          |

> ⚠️ Copilot: cuando generes comandos de instalación, añadir siempre el paso
> `pnpm audit --audit-level moderate` antes del `pnpm add`.

---

## 🌐 Idioma y Nomenclatura

### ⚠️ REGLA CRÍTICA: Inglés Técnico + Español Educativo

**NOMENCLATURA TÉCNICA — SIEMPRE EN INGLÉS:**

- ✅ Nombres de componentes, hooks, funciones, variables
- ✅ Nombres de archivos y carpetas (excepto slugs de semanas)
- ✅ Interfaces, types, enums, props names

**COMENTARIOS Y DOCUMENTACIÓN — SIEMPRE EN ESPAÑOL:**

- ✅ Comentarios en código (`// comentario`)
- ✅ READMEs y documentación
- ✅ Mensajes de error al usuario
- ✅ Explicaciones educativas

```tsx
// ✅ CORRECTO — código en inglés, comentarios en español
// Obtener la lista de usuarios activos con paginación
const { data, isLoading } = useQuery<PaginatedUsers, Error>({
  queryKey: userKeys.list({ active: true, page }),
  queryFn: () => fetchUsers({ active: true, page }),
});
```

---

## 🎨 Recursos Visuales y Estándares de Diseño

### Formato de Assets

- ✅ Preferir SVG para todos los diagramas (arquitectura, flujo de datos, ciclo de vida de queries)
- ❌ NO usar ASCII art para diagramas
- ✅ Usar PNG/JPG solo para screenshots de DevTools o UI

### Tema Visual

- 🌙 Tema dark para todos los assets visuales
- ❌ Sin degradés (gradients) en diseños
- ✅ Paleta de colores por librería:
  - TanStack Query: `#FF4154`
  - TanStack Router: `#3B82F6`
  - TanStack Table: `#10B981`
  - TanStack Form: `#F59E0B`
  - TanStack Virtual: `#8B5CF6`
  - TanStack Start: `#EC4899`
- Fondos: `#0F172A` y `#1E293B`

### Tipografía

- ✅ Fuentes sans-serif exclusivamente
- ✅ Recomendadas: Inter, Roboto, Open Sans, System UI
- ❌ NO usar fuentes serif

---

## 🛠️ Stack Tecnológico

| Tecnología       | Versión | Uso                                  |
| ---------------- | ------- | ------------------------------------ |
| TanStack Query   | 5.x     | Server state management (etapas 1–2) |
| TanStack Router  | 1.x     | Type-safe routing (etapa 3)          |
| TanStack Table   | 8.x     | Headless data tables (etapa 4)       |
| TanStack Form    | 1.x     | Form state management (etapa 5)      |
| TanStack Virtual | 3.x     | Virtualization (etapa 6)             |
| TanStack Start   | 1.x     | Full-stack SSR (etapa 6)             |
| TypeScript       | 5.x     | Type safety en todo el stack         |
| React            | 19.x    | UI layer                             |
| Vite             | 6.x     | Bundler (etapas 0–5)                 |
| Zod              | 3.x     | Schema validation                    |
| MSW              | 2.x     | API mocking en tests                 |
| Vitest           | 3.x     | Testing                              |

---

## 🔐 Mejores Prácticas de Seguridad

- **NUNCA** exponer API keys en código cliente — usar variables de entorno del servidor (`VITE_` solo para valores públicos)
- **NUNCA** confiar en datos del servidor sin validación — usar `zod.parse()` en los límites
- Usar `httpOnly` cookies para tokens de autenticación, nunca `localStorage`
- Sanitizar inputs antes de enviar mutations
- En TanStack Start: las `createServerFn` validan en el servidor, no en el cliente
- NUNCA usar `dangerouslySetInnerHTML` con datos del servidor sin sanitizar
- **Dependencias**: versiones exactas siempre + `pnpm audit --audit-level moderate` antes de cada `pnpm add`
- **Supply-chain**: una versión flotante (`^`) puede inyectar código malicioso en la siguiente instalación

---

## 🏆 Calidad de Código (NON-NEGOTIABLE)

> **La calidad no es una opción — es una obligación. 100% de calidad.**

### Corrección de errores — sin demora

- Todo error se corrige **en el momento en que se detecta**, sin importar la etapa del desarrollo
- Si TypeScript, ESLint o los tests fallan, la tarea no está terminada
- Prohibido usar `@ts-ignore`, `@ts-expect-error` o `eslint-disable` como soluciones permanentes

### Cobertura de tests: mínimo 85%

Lo que se desarrolla se prueba. Sin excepciones.

```bash
# Ejecutar tests con reporte de cobertura
pnpm test:coverage
```

- Cobertura mínima global: **85%** (líneas, ramas y funciones)
- El umbral se configura en `vitest.config.ts` y falla el build si no se alcanza
- Los tests no son opcionales — son parte de la definición de "terminado"

### Definición de "Terminado" (Definition of Done)

Un componente, hook o función está **terminado** cuando supera los cuatro pasos:

| Paso      | Comando                             | Criterio                         |
| --------- | ----------------------------------- | -------------------------------- |
| Tipos     | `pnpm typecheck`                    | Sin errores                      |
| Linter    | `pnpm lint`                         | Sin warnings                     |
| Tests     | `pnpm test:coverage`                | Cobertura ≥ 85% y todos en verde |
| Seguridad | `pnpm audit --audit-level moderate` | Sin critical/high                |

---

## 📊 Evaluación

Cada semana incluye **tres tipos de evidencias**:

1. **Conocimiento 🧠** (30%): Cuestionarios y evaluaciones teóricas
2. **Desempeño 💪** (40%): Ejercicios prácticos ejecutados correctamente
3. **Producto 📦** (30%): Proyecto entregable funcional adaptado al dominio asignado

### Criterios de Aprobación

- Mínimo **70%** en cada tipo de evidencia
- Entrega puntual de proyectos
- Código TypeScript sin errores de tipo (`pnpm typecheck`)
- Linter sin warnings (`pnpm lint`)
- Tests pasando con cobertura ≥ 85% (`pnpm test:coverage`)
- **Implementación coherente con el dominio asignado**
- **Originalidad**: Sin copia de implementaciones de otros aprendices

---

## 🚀 Metodología de Aprendizaje

### Estrategias Didácticas

- **Aprendizaje Basado en Proyectos (ABP)**: Proyectos semanales con casos reales
- **Dominios Únicos**: Cada aprendiz aplica conceptos a su dominio asignado (anticopia)
- **Práctica Deliberada**: Ejercicios de complejidad incremental
- **Code Review**: Revisión de código entre estudiantes
- **Live Coding**: Sesiones en vivo de arquitectura de componentes en tiempo real

### Distribución del Tiempo (8h/semana)

- **Teoría**: 2h
- **Prácticas**: 3.5h
- **Proyecto**: 2.5h

---

## 🤖 Instrucciones para Copilot

### Límites de Respuesta

1. **Divide respuestas largas**
   - ❌ NUNCA generar respuestas que superen los límites de tokens
   - ✅ SIEMPRE dividir contenido extenso en múltiples entregas
   - Para semanas completas: dividir por carpetas (`teoria → practicas → proyecto`)

### Generación de Código TypeScript/React

1. **Usa siempre el estilo definido**
   - Componentes en PascalCase, hooks con prefijo `use`
   - Query keys con factory pattern
   - Versiones exactas en `package.json` (sin `^` ni `~`)
   - Comentarios en español, código en inglés

2. **Tipado obligatorio**
   - ✅ Tipar siempre los genéricos de TanStack Query: `useQuery<Data, Error>()`
   - ✅ Tipar siempre las props con `interface`
   - ✅ Usar `satisfies` para objetos de configuración
   - ❌ NUNCA usar `any` — usar `unknown` con narrowing

3. **Compatibilidad de versiones (crítico)**
   - TanStack Query v5: `isPending` (no `isLoading`) para mutations
   - TanStack Router v1: `createRoute` con `createRootRoute`, no V2 file-based routing por defecto
   - TanStack Form v1: `form.Field` como componente (no HOC de versiones anteriores)
   - TanStack Table v8: `useReactTable` (no `useTable` de v7)

4. **Scripts `package.json` mínimos**

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
     }
   }
   ```

### Creación de Contenido

1. **Estructura clara y progresiva**
   - De lo simple a lo complejo
   - Conceptos construidos sobre conocimientos previos
   - Repetición espaciada de conceptos clave

2. **Ejemplos del mundo real**
   - Casos de uso que un developer encontrará en el trabajo
   - Datos de prueba realistas (nunca `foo`, `bar`, `test1`)
   - Errores comunes que los estudiantes cometerán (y cómo evitarlos)

### Diagramas SVG

- Flujo de datos claro: `queryFn → cache → componente`
- Tema dark: fondo `#0F172A`, cards `#1E293B`, bordes `#334155`
- Mostrar solo los componentes relevantes al tema de la semana

---

## � Convención de Commits

Usamos **Conventional Commits** en inglés con tres partes explícitas: **what · for · impact**.

### Formato

```
type(scope): what — subject line (imperative, ≤ 72 chars, no period)

for — body: motivation and context (wrap at 72 chars)

impact — footer: BREAKING CHANGE: ..., Closes #N, Refs #N
```

### Types

| Type       | Cuándo usarlo                                |
| ---------- | -------------------------------------------- |
| `feat`     | Nuevo contenido, ejercicio, semana           |
| `fix`      | Corrección de código en ejercicio o solución |
| `docs`     | README, teoría, documentación                |
| `chore`    | Configuración, tooling, scripts              |
| `test`     | Añadir o actualizar tests                    |
| `refactor` | Restructurar sin cambiar comportamiento      |
| `ci`       | Pipeline CI/CD                               |
| `perf`     | Mejora de rendimiento                        |

### Scopes

- `week-XX` — semana específica (ej. `week-04`)
- `docs` — documentación general del repo
- `config` — archivos de configuración raíz
- `global` — cambios transversales al repositorio

### Ejemplos

```bash
feat(week-04): add useInfiniteQuery exercise with scroll

for: students need hands-on practice before the weekly project.
Guides them step by step via commented code blocks.

Closes #42
```

```bash
fix(week-07): correct staleTime value in solution

for: previous value (5000ms) was misleading; updated to 5 minutes (300000).
```

```bash
chore(config): add vitest coverage thresholds

for: enforce >= 85% coverage on lines, branches and functions at build time.
```

> Configura el template local con:
> `git config commit.template .gitmessage`

---

## �📚 Referencias Oficiales

- **TanStack Query**: https://tanstack.com/query/latest/docs/framework/react/overview
- **TanStack Router**: https://tanstack.com/router/latest/docs/framework/react/overview
- **TanStack Table**: https://tanstack.com/table/latest/docs/introduction
- **TanStack Form**: https://tanstack.com/form/latest/docs/overview
- **TanStack Virtual**: https://tanstack.com/virtual/latest/docs/introduction
- **TanStack Start**: https://tanstack.com/start/latest/docs/framework/react/overview
- **TypeScript**: https://www.typescriptlang.org/docs/
- **React**: https://react.dev/
- **Vite**: https://vitejs.dev/guide/
- **Zod**: https://zod.dev/
- **MSW**: https://mswjs.io/

---

## 🔗 Enlaces Importantes

- **Repositorio**: https://github.com/ergrato-dev/bc-tanstack
- **Documentación general**: [docs/README.md](docs/README.md)
- **Primera semana**: [bootcamp/week-01-typescript_esencial/README.md](bootcamp/week-01-typescript_esencial/README.md)

---

## ✅ Checklist para Nuevas Semanas

Cuando crees contenido para una nueva semana:

- [ ] Crear estructura de carpetas completa
- [ ] `README.md` con objetivos, estructura y navegación
- [ ] Material teórico en `1-teoria/` (máx. 120 líneas por archivo)
- [ ] Diagrama SVG en `0-assets/` (mínimo 1 por semana)
- [ ] Ejercicios prácticos en `2-practicas/` (mínimo 2 ejercicios)
- [ ] Proyecto integrador en `3-proyecto/`
- [ ] `package.json` con versiones exactas en ejercicios y proyecto (sin `^`, `~`, `*`)
- [ ] Auditoría CVE ejecutada: `pnpm audit --audit-level moderate` (sin vulnerabilidades críticas/high)
- [ ] Recursos adicionales en `4-recursos/`
- [ ] Glosario de términos en `5-glosario/`
- [ ] Rúbrica de evaluación
- [ ] Verificar coherencia con semanas anteriores
- [ ] Revisar progresión de dificultad
- [ ] Probar que el código TypeScript compila sin errores (`pnpm typecheck`)
- [ ] Linter sin warnings (`pnpm lint`)
- [ ] Tests pasando con cobertura ≥ 85% (`pnpm test:coverage`)

---

## 💡 Notas Finales

- **Prioridad**: Claridad sobre brevedad
- **Enfoque**: TanStack práctico sobre teoría abstracta
- **Objetivo**: Preparar developers listos para trabajar con el ecosistema TanStack en proyectos reales
- **Filosofía**: Tipos primero, runtime después — TypeScript no es opcional en este bootcamp

---

_Última actualización: Mayo 2026_
_Versión: 1.0_
