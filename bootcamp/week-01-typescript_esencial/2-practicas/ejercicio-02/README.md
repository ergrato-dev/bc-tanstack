# Ejercicio 02 — Generics y Utility Types

## Objetivo

Construir funciones genéricas reutilizables y transformar tipos con utility types.

## Pasos

1. Abre `starter/src/generics.ts` — descomentas los pasos en orden
2. Ejecuta `pnpm typecheck` después de cada bloque
3. Cuando todos los pasos pasen, compara con `solution/`

## Verificación

```bash
pnpm typecheck
pnpm lint
```

## Concepto clave

| Paso | Concepto |
|------|---------|
| PASO 1 | Función genérica básica `<T>` |
| PASO 2 | Restricción `T extends { id: number }` |
| PASO 3 | Tipo `PaginatedResponse<T>` |
| PASO 4 | `Partial`, `Pick`, `Omit` |
| PASO 5 | `ReturnType` y `Awaited` |
