# Ejercicio 01 — Setup: QueryClient + DevTools

## ¿Qué aprenderás?

Configurar el punto de entrada de TanStack Query en una app React:
`QueryClient`, `QueryClientProvider` y `ReactQueryDevtools`.

## Pasos

| Paso | Concepto | Archivo a modificar |
|------|----------|---------------------|
| 1 | Instalar dependencias | `package.json` (ya incluidas) |
| 2 | Crear QueryClient | `src/main.tsx` |
| 3 | Envolver con Provider | `src/main.tsx` |
| 4 | Añadir DevTools | `src/main.tsx` |

## Cómo ejecutar

```bash
cd starter/
pnpm install
pnpm dev
```

Abre `http://localhost:5173`. Verás el ícono flotante de DevTools en la esquina inferior izquierda.

## Criterios de éxito

- [ ] La app compila sin errores (`pnpm typecheck`)
- [ ] El panel de DevTools aparece al hacer clic en el ícono TanStack
- [ ] En DevTools se ve la query `status-check` en estado `success`
