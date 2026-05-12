# 01 — Tipos e Interfaces en TypeScript

> Referencia visual: [typescript-type-system.svg](../0-assets/typescript-type-system.svg)

## 🎯 Objetivos

1. Distinguir entre `type`, `interface` y tipos primitivos
2. Modelar datos con interfaces y decidir cuándo usar `type` alias
3. Escribir código con `strict: true` sin recurrir a `any`

---

## 1. Tipos Primitivos y Literales

TypeScript añade un sistema de tipos sobre JavaScript. Los más frecuentes:

```ts
// Primitivos
const name: string = 'Ana'
const age: number = 28
const active: boolean = true

// Literales — el tipo ES el valor
type Direction = 'north' | 'south' | 'east' | 'west'
type StatusCode = 200 | 201 | 400 | 404 | 500
```

> En TypeScript 5 con `strict: true`, nunca uses `any`. Usa `unknown` con narrowing.

---

## 2. Interfaces

Las interfaces describen la forma de un objeto. Son la herramienta principal
para modelar entidades de dominio:

```ts
interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'student'
  createdAt: Date
}

// Propiedades opcionales y readonly
interface Config {
  readonly apiUrl: string
  timeout?: number          // opcional
}
```

Las interfaces se pueden extender:

```ts
interface AdminUser extends User {
  permissions: string[]
}
```

---

## 3. Type Aliases

`type` puede hacer todo lo que hace `interface` y más. Úsalo cuando necesites:
- Uniones (`|`) o intersecciones (`&`)
- Tipos computados o condicionales
- Tuplas

```ts
// Unión de tipos
type ApiResponse<T> = { data: T; status: 'ok' } | { error: string; status: 'error' }

// Intersección
type WithTimestamps = { createdAt: Date; updatedAt: Date }
type Product = { id: number; name: string; price: number } & WithTimestamps
```

---

## 4. Interface vs Type — Regla Práctica

| Situación | Usa |
|-----------|-----|
| Entidad de dominio (User, Product) | `interface` |
| Unión o intersección de tipos | `type` |
| Props de componente React | `interface` |
| Alias de tipo primitivo o literal | `type` |

---

## ✅ Checklist

Antes de continuar, verifica que puedes responder:

1. ¿Cuándo usarías `type Direction = 'left' | 'right'` en vez de una `interface`?
2. ¿Qué diferencia hay entre `?: string` y `string | undefined`?
3. ¿Por qué está prohibido `any` y qué usas en su lugar?
4. ¿Cómo extiende una `interface` a otra?

---

## 📚 Referencias

- [TypeScript Handbook — Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [TypeScript Handbook — Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)
