// ============================================
// PASO 1: Configurar vitest.config.ts
// ============================================
// Crea el archivo `vitest.config.ts` en la raíz del starter con este contenido:
//
// import { defineConfig } from 'vitest/config'
// import react from '@vitejs/plugin-react'
//
// export default defineConfig({
//   plugins: [react()],
//   test: {
//     environment: 'jsdom',
//     globals: true,
//     setupFiles: ['./src/test/setup.ts'],
//     coverage: {
//       provider: 'v8',
//       thresholds: { lines: 85, branches: 85, functions: 85 },
//     },
//   },
//   resolve: { alias: { '@': '/src' } },
// })
//
// Luego crea `src/test/setup.ts` con:
// import '@testing-library/jest-dom'
//
// Ejecuta: pnpm test
// Resultado: los tests se descubren pero aún no hay ninguno

// ============================================
// PASO 2: Test para formatCurrency (función pura)
// ============================================
// La función ya existe en src/utils/formatCurrency.ts.
// Descomenta el archivo src/utils/formatCurrency.test.ts descomentando su contenido.
//
// El test verifica:
//   - formato USD por defecto
//   - formato EUR cuando se pasa la moneda
//   - valores negativos (descuento)
//
// Descomenta el contenido del archivo descomentando cada línea en
// src/utils/formatCurrency.test.ts

// ============================================
// PASO 3: Test del componente PriceTag
// ============================================
// El componente ya existe en src/components/PriceTag.tsx.
// Descomenta el contenido de src/components/PriceTag.test.tsx.
//
// El test verifica:
//   - el precio se muestra en pantalla
//   - la etiqueta de descuento aparece cuando hay descuento
//
// Ejecuta: pnpm test
// Resultado: todos los tests en verde ✅

// ============================================
// PASO 4: Verificar cobertura
// ============================================
// Ejecuta: pnpm test:coverage
//
// Verifica que en el reporte aparece:
//   - src/utils/formatCurrency.ts → 100% líneas
//   - src/components/PriceTag.tsx → ≥ 85% líneas
//
// Si la cobertura global es < 85%, el comando falla con código de error.

export {}
