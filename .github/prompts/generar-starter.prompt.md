---
mode: agent
description: Genera el setup base de Vite + React + TypeScript (package.json, vite.config.ts, tsconfig, main.tsx) para un ejercicio o proyecto del bootcamp bc-tanstack.
---

Genera el setup base de un proyecto Vite + React + TypeScript para el bootcamp bc-tanstack.

## Parámetros

- Tipo: [COMPLETAR — ejercicio | proyecto]
- Semana: [COMPLETAR — ej. 05]
- Librerías TanStack a incluir: [COMPLETAR — ej. @tanstack/react-query, @tanstack/react-query-devtools]
- Incluir Zod: [COMPLETAR — sí | no]
- Incluir MSW: [COMPLETAR — sí | no]
- Incluir Vitest: [COMPLETAR — sí | no]

## Archivos a generar

- `package.json` — dependencias exactas, scripts completos
- `vite.config.ts` — configuración con alias `@/` apuntando a `./src`
- `tsconfig.json` — referencia a `tsconfig.app.json`
- `tsconfig.app.json` — strict mode activado, path alias `@/*`
- `src/main.tsx` — punto de entrada con providers (QueryClientProvider si aplica)
- `src/App.tsx` — componente raíz vacío listo para el ejercicio/proyecto
- `.gitignore` — estándar para proyectos Vite/Node

## Versiones a usar

Antes de escribir el `package.json`, consulta las versiones estables actuales
con `pnpm info <paquete> version` para cada dependencia. Registra las versiones
encontradas y úsalas como versiones exactas.

Paquetes base siempre presentes:

- `react`, `react-dom`
- `typescript`, `vite`, `@vitejs/plugin-react`
- `@types/react`, `@types/react-dom`

## Reglas críticas

- ❌ NUNCA usar `^`, `~`, `>=`, `*` ni `latest` en versiones
- ✅ Scripts mínimos en `package.json`:
  ```json
  {
    "scripts": {
      "dev": "vite",
      "build": "tsc -b && vite build",
      "preview": "vite preview",
      "typecheck": "tsc --noEmit",
      "test": "vitest"
    }
  }
  ```
  Omitir `test` solo si no se incluye Vitest.
- ✅ `strict: true` en `tsconfig.app.json`
- ✅ Separar `dependencies` y `devDependencies` correctamente:
  - `dependencies`: React, librerías TanStack de runtime, Zod
  - `devDependencies`: TypeScript, Vite, tipos, Vitest, MSW
- ✅ Alias `@/` en `vite.config.ts`:
  ```ts
  resolve: { alias: { '@': path.resolve(__dirname, './src') } }
  ```
- ✅ `src/main.tsx` debe compilar sin errores desde el primer momento
- ✅ Si se incluye TanStack Query, el `main.tsx` debe inicializar `QueryClient`
  y envolver la app en `<QueryClientProvider>`
- ✅ Si se incluye `@tanstack/react-query-devtools`, añadirlo en `main.tsx`
  solo en desarrollo (`import.meta.env.DEV`)
