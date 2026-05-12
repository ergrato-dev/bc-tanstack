// ============================================
// EJERCICIO 02 — Generics y Utility Types
// Semana 01 — TypeScript Esencial
// ============================================
//
// Instrucciones:
//   Descomentar cada bloque en orden.
//   Verifica después de cada bloque con: pnpm typecheck
// ============================================

// ── PASO 1: Función genérica básica ──────────────────────────────────────────
// T se infiere automáticamente al llamar la función.
// Descomenta:

// export function first<T>(items: T[]): T | undefined {
//   return items[0]
// }

// Prueba de uso (también descomentar):
// const libro = first(['TypeScript', 'React', 'Vite'])
// //    ^? string | undefined

// ── PASO 2: Restricción con extends ──────────────────────────────────────────
// Solo acepta arrays de objetos que tengan al menos { id: number }.
// Descomenta:

// export function findById<T extends { id: number }>(
//   items: T[],
//   id: number
// ): T | undefined {
//   return items.find((item) => item.id === id)
// }

// ── PASO 3: Tipo genérico PaginatedResponse<T> ────────────────────────────────
// Patrón fundamental en cualquier API paginada.
// Descomenta:

// export interface PaginatedResponse<T> {
//   data: T[]
//   total: number
//   page: number
//   pageSize: number
// }

// export function createPage<T>(data: T[], page: number): PaginatedResponse<T> {
//   return { data, total: data.length, page, pageSize: data.length }
// }

// ── PASO 4: Utility types ─────────────────────────────────────────────────────
// Transformar tipos existentes sin duplicar código.
// Descomenta:

// interface Product {
//   id: number
//   name: string
//   price: number
//   stock: number
// }

// Campos mínimos para crear un producto (sin id):
// type CreateProductInput = Omit<Product, 'id'>

// Solo precio y stock para actualizar:
// type UpdateStockInput = Pick<Product, 'price' | 'stock'>

// Todos los campos opcionales para filtros:
// type ProductFilters = Partial<Product>

// ── PASO 5: ReturnType + Awaited ──────────────────────────────────────────────
// Inferir el tipo de retorno de una función (útil con APIs async).
// Descomenta:

// async function fetchProducts(): Promise<Product[]> {
//   return []
// }

// Tipo del array resuelto (sin Promise<>):
// type Products = Awaited<ReturnType<typeof fetchProducts>>
// //   ^? Product[]
