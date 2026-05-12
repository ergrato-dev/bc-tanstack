# Ejercicio 01 — API REST Tipada

## Objetivo

Tipar una mini API REST de biblioteca usando interfaces y type aliases.
No se escribe lógica nueva — **solo descomentas los bloques uno a uno**.

## Pasos

1. Abre `starter/src/types.ts` — descomentas las interfaces
2. Abre `starter/src/api.ts` — descomentas las funciones tipadas
3. Abre `starter/src/main.ts` — descomentas el uso
4. Ejecuta `pnpm dev` y verifica que el compilador no lanza errores

## Verificación

```bash
pnpm typecheck   # debe pasar sin errores
pnpm lint        # debe pasar sin warnings
```

## Concepto clave

Cada bloque de código comentado introduce un concepto:

| Paso | Concepto |
|------|---------|
| PASO 1 | Interfaces básicas |
| PASO 2 | Type aliases con uniones |
| PASO 3 | Interface con `extends` |
| PASO 4 | Funciones con tipos de retorno explícitos |
