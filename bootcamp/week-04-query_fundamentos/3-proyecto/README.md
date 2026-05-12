# Proyecto Semanal — Semana 04: TanStack Query Fundamentos

## Objetivo

Construir una mini-app con **lista + detalle** usando `useQuery`,
adaptada al dominio asignado. No usa backend real: los datos se simulan
con un array en memoria o una función `setTimeout`.

## Adaptación al dominio asignado

| Dominio | Entidad lista | Entidad detalle |
|---------|--------------|-----------------|
| Biblioteca | Libros | Detalle del libro |
| Clínica vet | Mascotas | Historial de la mascota |
| E-commerce | Productos | Ficha del producto |
| Marina | Embarcaciones | Datos de la embarcación |

Reemplaza `Item` / `items` por los nombres de tu dominio en todo el código.

## Instrucciones

1. Completa todos los `// TODO:` en `src/` con la lógica de tu dominio.
2. Ejecuta `pnpm typecheck` — sin errores antes de entregar.
3. Ejecuta `pnpm lint` — sin warnings.
4. Abre DevTools y verifica que las queries aparecen en el panel.

## Criterios de entrega

- [ ] Lista de ítems carga con `useQuery`
- [ ] Al seleccionar un ítem se muestra su detalle (query con ID)
- [ ] Estados `isPending` y `isError` manejados con early returns
- [ ] Código adaptado al dominio (sin referencias genéricas `Item`)
- [ ] `pnpm typecheck` sin errores
