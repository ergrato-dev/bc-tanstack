# Ejercicio 02 — Lista Optimizada con `useMemo`/`useCallback` + Context API

## 🎯 Objetivos

- Memorizar una lista filtrada con `useMemo` para evitar recalcular en cada render
- Estabilizar callbacks con `useCallback` para que `React.memo` funcione correctamente
- Compartir el tema de la aplicación (claro/oscuro) con Context API

## 📋 Instrucciones

Abre `starter/src/App.tsx` y descomenta los bloques en orden (**PASO 1 → PASO 4**).

```bash
cd starter
pnpm install
pnpm dev
```

## Pasos

### PASO 1 — Definir el contexto de tema

Descomenta `ThemeContext`, `ThemeProvider` y `useTheme`. Verifica que no hay errores TypeScript.

### PASO 2 — Lista filtrada con `useMemo`

Descomenta el componente `ProductList` con el filtro memoizado. Verifica que escribir en el input no causa lag con 500+ items.

### PASO 3 — Callback estable con `useCallback` + `React.memo`

Descomenta `ProductItem` envuelto en `memo` y el handler `handleDelete` con `useCallback`. Abre React DevTools y verifica que `ProductItem` no re-renderiza al escribir en el filtro.

### PASO 4 — Conectar el tema desde Context

Descomenta el botón de tema en el header. Verifica que alterna entre modo claro y oscuro en toda la app.

## ✅ Criterio de éxito

- El filtro no recalcula la lista si el texto no cambia
- Los items de la lista no se re-renderizan al escribir en el filtro
- El tema claro/oscuro afecta a todos los componentes via Context
- TypeScript sin errores: `pnpm typecheck`
