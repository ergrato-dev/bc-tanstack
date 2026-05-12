---
mode: agent
description: Genera el scaffold completo de una nueva semana del bootcamp bc-tanstack (estructura de carpetas, README, rúbrica, teoría, ejercicio base y proyecto base).
---

Crea la estructura completa de una nueva semana para el bootcamp bc-tanstack.

## Datos de la semana

- Número de semana: [COMPLETAR — ej. 04]
- Slug del tema: [COMPLETAR — ej. tanstack_query_primeros_pasos]
- Título legible: [COMPLETAR — ej. TanStack Query — Primeros Pasos]
- Etapa: [COMPLETAR — ej. 1 — TanStack Query: Fundamentos]
- Conceptos principales: [COMPLETAR — ej. useQuery, QueryClient, server state vs client state]
- Librerías TanStack involucradas: [COMPLETAR — ej. @tanstack/react-query]
- Semana anterior (número y slug): [COMPLETAR — ej. 03 — tooling_moderno]
- Semana siguiente (número y slug): [COMPLETAR — ej. 05 — query_keys_y_dependencias]

## Ruta destino

`bootcamp/week-<NN>-<slug>/`

## Árbol de archivos a generar

```
bootcamp/week-NN-slug/
├── README.md
├── rubrica-evaluacion.md
├── 0-assets/
│   └── .gitkeep
├── 1-teoria/
│   ├── 01-concepto-principal.md
│   └── 02-concepto-secundario.md
├── 2-practicas/
│   └── ejercicio-01/
│       ├── README.md
│       ├── starter/
│       │   ├── src/
│       │   │   ├── main.tsx
│       │   │   └── App.tsx
│       │   ├── package.json
│       │   ├── vite.config.ts
│       │   ├── tsconfig.json
│       │   └── tsconfig.app.json
│       └── solution/
│           └── src/
│               ├── main.tsx
│               └── App.tsx
├── 3-proyecto/
│   ├── README.md
│   └── starter/
│       ├── src/
│       │   ├── main.tsx
│       │   └── App.tsx
│       ├── package.json
│       └── vite.config.ts
├── 4-recursos/
│   ├── videografia/README.md
│   └── webgrafia/README.md
└── 5-glosario/
    └── README.md
```

## README.md de la semana — secciones obligatorias

1. Header con badge de semana, etapa y horas (8h)
2. Descripción breve (2–3 líneas)
3. Objetivos de aprendizaje (3–4 ítems con verbos de acción)
4. Distribución del tiempo: Teoría 2h / Prácticas 3.5h / Proyecto 2.5h
5. Contenido (tabla con links a subcarpetas)
6. Prerequisitos (link a semana anterior)
7. Navegación: `← Semana anterior | Semana siguiente →`

## rubrica-evaluacion.md — estructura obligatoria

Tabla con tres secciones:

- Conocimiento 🧠 (30%): 3–4 criterios teóricos evaluables
- Desempeño 💪 (40%): criterios de los ejercicios prácticos
- Producto 📦 (30%): criterios del proyecto integrador
  Nota de aprobación mínima: 70% en cada tipo de evidencia.

## Reglas críticas

- `package.json` con versiones exactas (sin `^` ni `~`)
- Ejercicios: código comentado para descomentar (NUNCA `// TODO:`)
- Proyectos: `// TODO:` para implementación del aprendiz
- Teoría: máximo 120 líneas por archivo, estructura con secciones numeradas
- Código en inglés, comentarios y documentación en español
- Archivos de teoría numerados: `01-`, `02-`…
