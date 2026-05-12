# Ejercicio 01 — Contador con `useState` y Timer con `useEffect`/`useRef`

## 🎯 Objetivos

- Usar `useState` con actualizaciones funcionales
- Crear un timer con `useEffect` y limpiar el intervalo correctamente
- Almacenar el ID del intervalo en `useRef` sin causar re-renders

## 📋 Instrucciones

Abre `starter/src/App.tsx` y descomenta los bloques en orden (**PASO 1 → PASO 4**).
Después de cada paso, guarda y verifica en el navegador que funciona antes de continuar.

```bash
cd starter
pnpm install
pnpm dev
```

## Pasos

### PASO 1 — Estado del contador con `useState`

Descomenta las líneas del contador. Verifica que los botones +/- cambian el valor en pantalla.

### PASO 2 — Timer con `useEffect` y `setInterval`

Descomenta el efecto del timer. Verifica que los segundos aumentan automáticamente.

### PASO 3 — Limpieza con `useRef` y cleanup

Descomenta la ref para el intervalo y el botón Pausar/Reanudar. Verifica que el timer se detiene y reanuda correctamente.

### PASO 4 — Reset completo

Descomenta el botón Reset. Verifica que reinicia contador y timer a 0.

## ✅ Criterio de éxito

- El contador responde a los botones +/-
- El timer cuenta segundos y se puede pausar/reanudar
- Al desmontar el componente no quedan intervalos activos (sin memory leaks)
- TypeScript sin errores: `pnpm typecheck`
