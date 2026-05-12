# Ejercicio 02 — Primer useQuery con API real

## ¿Qué aprenderás?

Usar `useQuery` para obtener datos de una API REST, manejar los estados
`isPending` / `isError` / `isSuccess`, y tipar la respuesta con TypeScript.

## Pasos

| Paso | Concepto | Archivo a modificar |
|------|----------|---------------------|
| 1 | Definir interfaz y queryFn | `src/api/posts.ts` |
| 2 | Usar useQuery en componente | `src/components/PostList.tsx` |
| 3 | Mostrar detalle con queryKey dinámica | `src/components/PostDetail.tsx` |
| 4 | Componer la vista final | `src/App.tsx` |

## API usada

`https://jsonplaceholder.typicode.com` — API REST de prueba, sin autenticación.

- `GET /posts` → `Post[]`
- `GET /posts/:id` → `Post`

## Cómo ejecutar

```bash
cd starter/
pnpm install
pnpm dev
```

## Criterios de éxito

- [ ] La lista de posts carga y se muestra correctamente
- [ ] Al seleccionar un post se ve su detalle (query con ID dinámico)
- [ ] Los estados loading y error están manejados con early returns
- [ ] `pnpm typecheck` sin errores
