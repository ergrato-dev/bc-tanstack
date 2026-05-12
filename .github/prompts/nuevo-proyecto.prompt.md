---
mode: agent
description: Genera el proyecto integrador semanal para el bootcamp bc-tanstack. El aprendiz implementa desde cero adaptando el esqueleto a su dominio asignado.
---

Crea el proyecto integrador semanal para el bootcamp bc-tanstack.

## Datos del proyecto

- Semana: [COMPLETAR — ej. 07]
- Tema: [COMPLETAR — ej. Cache avanzado y sincronización]
- Librerías involucradas: [COMPLETAR — ej. @tanstack/react-query]
- Conceptos a integrar: [COMPLETAR — ej. staleTime, gcTime, invalidateQueries, setQueryData]
- Ruta destino: `bootcamp/week-<NN>-<slug>/3-proyecto/`

## Archivos a generar

```
3-proyecto/
├── README.md
└── starter/
    ├── src/
    │   ├── main.tsx
    │   ├── App.tsx
    │   ├── types/
    │   │   └── index.ts        (interfaces con TODOs para adaptar al dominio)
    │   ├── api/
    │   │   └── client.ts       (fetch helpers con TODOs)
    │   ├── query-keys/
    │   │   └── index.ts        (factory pattern con TODOs)
    │   └── components/
    │       └── ResourceList.tsx (esqueleto con TODOs)
    ├── package.json
    └── vite.config.ts
```

## Formato del starter del proyecto

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

// TODO: Renombrar Resource por la entidad principal de tu dominio

// TODO: Definir la interfaz de tu entidad principal
interface Resource {
  id: number;
  // TODO: Agregar los campos de tu entidad
}

// TODO: Implementar el queryKey factory para tu dominio
export const resourceKeys = {
  // TODO: all, lists, list, detail
};

// TODO: Implementar la función de fetching
async function fetchResources(): Promise<Resource[]> {
  // TODO: llamar a tu API o usar datos mock
}
```

## README.md del proyecto — secciones obligatorias

1. **Descripción**: qué construirá el aprendiz (genérico, adaptable al dominio)
2. **Bloque de aviso** antes de empezar: recordar consultar `docs/dominios.md`
3. **Requisitos mínimos** (lista de TODOs obligatorios con criterios de aceptación claros)
4. **Requisitos opcionales** (mejoras para aprendices avanzados)
5. **Entregables**: qué debe entregar y en qué formato
6. **Criterios de evaluación**: referencia a `rubrica-evaluacion.md`

## Reglas críticas

- ✅ SIEMPRE usar `// TODO:` en proyectos (a diferencia de los ejercicios)
- Las instrucciones deben ser **genéricas y adaptables** a cualquier dominio
- `package.json` con versiones exactas (sin `^` ni `~`)
- ❌ NUNCA incluir la solución en el starter del proyecto
- El proyecto debe integrar los conceptos de TODA la semana, no solo uno
- El README debe listar entre 3 y 6 requisitos mínimos concretos y evaluables
- Los TODOs deben ser suficientemente descriptivos para que el aprendiz entienda qué implementar
