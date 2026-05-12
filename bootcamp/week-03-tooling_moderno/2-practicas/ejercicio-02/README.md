# Ejercicio 02 — Primeros Tests con Vitest

**Semana 03 · Tooling Moderno** | ~2 h

Configura Vitest en un proyecto existente y escribe tests unitarios para
funciones de utilidad y un componente React.

---

## Lo que aprenderás

- Configurar Vitest con `jsdom` y Testing Library
- Escribir tests unitarios para funciones puras (TypeScript)
- Escribir tests de renderizado con `@testing-library/react`
- Generar reporte de cobertura y alcanzar ≥ 85%

---

## Instrucciones

Abre `starter/src/` y sigue los **PASO 1, 2, 3, 4** en orden.
Después de cada paso ejecuta `pnpm test` para ver los tests pasar.

### Pasos

1. **PASO 1** — Configurar `vitest.config.ts` y el archivo setup
2. **PASO 2** — Descomentar el test para `formatCurrency`
3. **PASO 3** — Descomentar el test del componente `PriceTag`
4. **PASO 4** — Ejecutar cobertura y verificar ≥ 85%

---

## Cómo ejecutar

```bash
cd starter
pnpm install
pnpm test            # modo watch
pnpm test:coverage   # reporte de cobertura
```

---

## Criterio de éxito

- `pnpm test` — todos los tests en verde
- `pnpm test:coverage` — cobertura ≥ 85% en líneas, ramas y funciones
