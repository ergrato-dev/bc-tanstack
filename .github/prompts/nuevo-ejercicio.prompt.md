---
mode: agent
description: Genera un ejercicio guiado completo (starter + solution) para una semana del bootcamp bc-tanstack. El alumno aprende descomentando código TypeScript/React bloque a bloque.
---

Crea un ejercicio guiado paso a paso para el bootcamp bc-tanstack.

## Datos del ejercicio

- Semana: [COMPLETAR — ej. 05]
- Número de ejercicio: [COMPLETAR — ej. 02]
- Tema: [COMPLETAR — ej. Query Keys Factory Pattern]
- Librerías TanStack involucradas: [COMPLETAR — ej. @tanstack/react-query]
- Conceptos a practicar: [COMPLETAR — ej. factory pattern, queryKey tipados, dependent queries]
- Ruta destino: `bootcamp/week-<NN>-<slug>/2-practicas/ejercicio-<NN>/`

## Archivos a generar

```
ejercicio-NN/
├── README.md
├── starter/
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   └── components/
│   │       └── NombreComponente.tsx   (código comentado)
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── tsconfig.app.json
└── solution/
    └── src/
        ├── main.tsx
        ├── App.tsx
        └── components/
            └── NombreComponente.tsx   (código completo)
```

## Formato obligatorio del README.md del ejercicio

Para cada paso:

1. Título con el concepto que se practica
2. Explicación breve (2–4 líneas en español)
3. Ejemplo ejecutable en bloque de código TypeScript/TSX
4. Instrucción: "Abre `starter/src/...` y descomenta la sección PASO N"

## Formato obligatorio del starter (código comentado)

```tsx
// ============================================
// PASO 1: Nombre del Concepto
// ============================================

// Explicación breve del concepto
// Descomenta las siguientes líneas:

// import { useQuery } from '@tanstack/react-query'
//
// export const itemKeys = {
//   all: () => ['items'] as const,
//   detail: (id: number) => [...itemKeys.all(), 'detail', id] as const,
// }
//
// export function ItemDetail({ id }: { id: number }) {
//   const { data, isLoading } = useQuery<Item, Error>({
//     queryKey: itemKeys.detail(id),
//     queryFn: () => fetchItem(id),
//   })
//
//   if (isLoading) return <p>Cargando...</p>
//   return <div>{data?.name}</div>
// }
```

## Formato obligatorio del solution (código descomentado)

```tsx
// ============================================
// PASO 1: Nombre del Concepto
// ============================================

import { useQuery } from "@tanstack/react-query";

export const itemKeys = {
  all: () => ["items"] as const,
  detail: (id: number) => [...itemKeys.all(), "detail", id] as const,
};

export function ItemDetail({ id }: { id: number }) {
  const { data, isLoading } = useQuery<Item, Error>({
    queryKey: itemKeys.detail(id),
    queryFn: () => fetchItem(id),
  });

  if (isLoading) return <p>Cargando...</p>;
  return <div>{data?.name}</div>;
}
```

## Reglas críticas

- ❌ NUNCA usar `// TODO:` en ejercicios (eso es para proyectos)
- ✅ SIEMPRE usar código comentado que el alumno descomenta paso a paso
- `package.json` con versiones exactas (sin `^` ni `~`)
- Mínimo 3 pasos, máximo 6 pasos por ejercicio
- Datos de prueba realistas (nunca `foo`, `bar`, `test1`)
- El `main.tsx` del starter debe ser funcional aunque los pasos estén comentados
- El `solution/` debe compilar sin errores TypeScript (`tsc --noEmit`)
- Comentarios explicativos en español, nombres de código en inglés
