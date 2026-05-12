// Solución completa — Ejercicio 02

export function first<T>(items: T[]): T | undefined {
  return items[0]
}

export function findById<T extends { id: number }>(
  items: T[],
  id: number
): T | undefined {
  return items.find((item) => item.id === id)
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
}

export function createPage<T>(data: T[], page: number): PaginatedResponse<T> {
  return { data, total: data.length, page, pageSize: data.length }
}

interface Product {
  id: number
  name: string
  price: number
  stock: number
}

export type CreateProductInput = Omit<Product, 'id'>
export type UpdateStockInput = Pick<Product, 'price' | 'stock'>
export type ProductFilters = Partial<Product>

async function fetchProducts(): Promise<Product[]> {
  return []
}

export type Products = Awaited<ReturnType<typeof fetchProducts>>
