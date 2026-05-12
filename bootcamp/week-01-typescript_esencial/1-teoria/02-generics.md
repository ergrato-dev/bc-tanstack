# 02 — Generics en TypeScript

> Referencia visual: [typescript-type-system.svg](../0-assets/typescript-type-system.svg)

## 🎯 Objetivos

1. Escribir funciones genéricas que funcionen con cualquier tipo sin perder seguridad
2. Aplicar restricciones con `extends` para limitar los tipos aceptados
3. Crear tipos genéricos para modelar respuestas de API

---

## 1. ¿Qué es un Generic?

Un generic es un **parámetro de tipo** que se resuelve en el momento de usar la
función o tipo. Permite reutilizar lógica sin sacrificar el tipado:

```ts
// Sin generics — solo funciona con string
function first(arr: string[]): string {
  return arr[0]
}

// Con generics — funciona con cualquier tipo
function first<T>(arr: T[]): T {
  return arr[0]
}

const name = first(['Ana', 'Luis'])   // tipo: string
const age  = first([28, 35, 42])      // tipo: number
```

---

## 2. Restricciones con `extends`

Para que el generic solo acepte ciertos tipos, usa `extends`:

```ts
// Solo acepta objetos con propiedad 'id'
function getById<T extends { id: number }>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id)
}

interface Book { id: number; title: string }
const books: Book[] = [{ id: 1, title: 'Clean Code' }]
const book = getById(books, 1)  // tipo: Book | undefined
```

---

## 3. Tipos Genéricos para API

El patrón más usado en TanStack Query es el wrapper de respuesta de API:

```ts
// Respuesta paginada genérica
interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
}

// Uso tipado
interface Product { id: number; name: string; price: number }

async function fetchProducts(page: number): Promise<PaginatedResponse<Product>> {
  const res = await fetch(`/api/products?page=${page}`)
  return res.json() as Promise<PaginatedResponse<Product>>
}
```

---

## 4. Múltiples Parámetros de Tipo

```ts
// Función que transforma un tipo en otro
function mapResponse<TInput, TOutput>(
  items: TInput[],
  transform: (item: TInput) => TOutput
): TOutput[] {
  return items.map(transform)
}

const names = mapResponse(
  [{ id: 1, name: 'Ana' }],
  user => user.name
)  // tipo: string[]
```

---

## ✅ Checklist

Antes de continuar, verifica que puedes responder:

1. ¿Qué ventaja tiene `first<T>(arr: T[]): T` sobre `first(arr: any[]): any`?
2. ¿Qué hace `T extends { id: number }`? ¿Qué tipos rechaza?
3. ¿Cómo tipas una función que recibe un array y devuelve otro de distinto tipo?
4. ¿Por qué `PaginatedResponse<T>` es más reutilizable que `PaginatedResponse`?

---

## 📚 Referencias

- [TypeScript Handbook — Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [TypeScript Deep Dive — Generics](https://basarat.gitbook.io/typescript/type-system/generics)
