# 03 — Testing con Vitest

## Objetivos

- Configurar Vitest en un proyecto Vite + TypeScript
- Escribir tests unitarios para funciones y hooks React
- Alcanzar cobertura ≥ 85% con `@vitest/coverage-v8`

---

## 1. ¿Por qué Vitest?

Vitest usa la misma configuración que Vite: sin setup adicional, los tests ven los
mismos alias (`@/`), variables de entorno y plugins. Es hasta 10× más rápido que Jest
en proyectos Vite porque no necesita transformar el código dos veces.

## 2. Instalación

```bash
pnpm audit --audit-level moderate

pnpm add -D \
  vitest@3.1.3 \
  @vitest/coverage-v8@3.1.3 \
  @testing-library/react@16.3.0 \
  @testing-library/jest-dom@6.6.3 \
  jsdom@26.1.0
```

## 3. `vitest.config.ts`

```ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',        // simula el DOM del navegador
    globals: true,               // describe/it/expect sin importar
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      thresholds: { lines: 85, branches: 85, functions: 85 },
    },
  },
  resolve: { alias: { '@': '/src' } },
})
```

## 4. Setup de Testing Library

```ts
// src/test/setup.ts
import '@testing-library/jest-dom'
```

Este archivo carga los matchers adicionales: `toBeInTheDocument()`, `toHaveValue()`, etc.

## 5. Primer test unitario

```ts
// src/utils/formatPrice.ts
export function formatPrice(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount)
}

// src/utils/formatPrice.test.ts
import { describe, it, expect } from 'vitest'
import { formatPrice } from './formatPrice'

describe('formatPrice', () => {
  it('formatea un precio en USD', () => {
    expect(formatPrice(1234.5)).toBe('$1,234.50')
  })

  it('usa la moneda indicada', () => {
    expect(formatPrice(100, 'EUR')).toContain('€')
  })
})
```

## 6. Ejecutar tests y cobertura

```bash
pnpm test            # modo watch — re-ejecuta al guardar
pnpm test:coverage   # genera reporte HTML en coverage/
```

Si la cobertura cae por debajo del 85%, el comando falla con código de error.
Esto bloquea el build de CI automáticamente.

---

## Checklist

- [ ] ¿`pnpm test` ejecuta los tests sin errores de configuración?
- [ ] ¿Los matchers de Testing Library (`toBeInTheDocument`) funcionan?
- [ ] ¿`pnpm test:coverage` muestra ≥ 85% en líneas, ramas y funciones?
- [ ] ¿Los tests fallan cuando la función tiene un bug?

## Referencias

- [Vitest — Getting Started](https://vitest.dev/guide/)
- [Testing Library — React](https://testing-library.com/docs/react-testing-library/intro/)
