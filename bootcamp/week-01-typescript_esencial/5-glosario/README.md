# Glosario — Semana 01: TypeScript Esencial

Términos ordenados alfabéticamente.

---

## A

**`any`**
Tipo que desactiva el chequeo estático. Su uso está **prohibido** en este bootcamp — usar `unknown` con narrowing.

**`as`** (type assertion)
Operador que fuerza un tipo sin validación en tiempo de ejecución. Preferir `satisfies` cuando sea posible.

**`Awaited<T>`**
Utility type que extrae el tipo resuelto de una `Promise<T>`. Ejemplo: `Awaited<Promise<string>>` → `string`.

---

## G

**Generic** (tipo genérico)
Parámetro de tipo (`<T>`) que permite que una función o tipo opere sobre distintos tipos sin perder información. Se infiere al llamar la función.

---

## I

**Interface**
Contrato estructural de TypeScript para describir entidades de dominio. Soporta `extends` y declaración múltiple. Se prefiere sobre `type` para objetos que representan entidades.

---

## L

**Literal type** (tipo literal)
Tipo que representa un valor exacto. Ejemplo: `'active' | 'returned'` en lugar de `string`.

---

## N

**Narrowing** (estrechamiento de tipos)
Técnica de reducir el tipo de una variable usando guardas (`typeof`, `instanceof`, `in`). Permite trabajar con `unknown` de forma segura.

---

## O

**`Omit<T, K>`**
Utility type que construye un nuevo tipo excluyendo las propiedades `K` de `T`.

---

## P

**`Partial<T>`**
Utility type que hace todas las propiedades de `T` opcionales.

**`Pick<T, K>`**
Utility type que construye un nuevo tipo seleccionando solo las propiedades `K` de `T`.

---

## R

**`readonly`**
Modificador que impide la reasignación de una propiedad después de la inicialización.

**`Required<T>`**
Utility type opuesto a `Partial` — hace todas las propiedades obligatorias.

**`ReturnType<F>`**
Utility type que extrae el tipo de retorno de una función `F`.

---

## S

**`satisfies`**
Operador (TypeScript 4.9+) que valida que un valor cumple un tipo, manteniendo el tipo inferido más específico. Preferible a `as`.

**Strict mode** (`"strict": true`)
Configuración de `tsconfig.json` que habilita el conjunto de chequeos más estrictos: `noImplicitAny`, `strictNullChecks`, etc. Obligatorio en este bootcamp.

---

## T

**Type alias** (`type`)
Nombre para cualquier tipo TypeScript, incluyendo uniones, intersecciones y tipos primitivos. Complementario a `interface`.

**Type inference** (inferencia de tipos)
Capacidad de TypeScript de deducir el tipo de una variable sin anotación explícita.

---

## U

**Union type** (tipo unión)
Tipo que puede ser uno de varios valores posibles. Ejemplo: `string | number`.

**`unknown`**
Tipo seguro que representa un valor de tipo desconocido. Requiere narrowing antes de operar. Alternativa segura a `any`.

<!-- scaffold -->
|---------|-----------|
| *(por definir)* | *(por definir)* |
