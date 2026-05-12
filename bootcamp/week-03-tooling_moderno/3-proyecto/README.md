# Proyecto Semanal — Configuración Completa del Entorno

**Semana 03 · Tooling Moderno** | 2.5 h

Configura desde cero el entorno profesional completo para tu dominio asignado.
Este proyecto es la base sobre la que construirás todas las semanas siguientes.

---

## Objetivo

Entregar un proyecto Vite + React + TypeScript con:

- ESLint v9 configurado y sin warnings
- Prettier integrado
- Vitest con cobertura ≥ 85%
- Al menos 3 funciones de utilidad propias del dominio con tests

---

## Adapta el dominio

Consulta `docs/dominios.md` para conocer tu dominio asignado.

Ejemplos de adaptación:

| Dominio | Funciones de utilidad sugeridas |
|---------|--------------------------------|
| Biblioteca | `formatISBN`, `formatAuthor`, `isOverdue` |
| Clínica vet | `formatPetAge`, `formatWeight`, `isVaccinated` |
| E-commerce | `formatCurrency`, `calculateDiscount`, `isInStock` |
| Marina | `formatBoatLength`, `formatBerth`, `isAvailable` |

---

## Instrucciones

1. Copia la carpeta `starter/` y renómbrala con tu dominio: `mi-dominio/`
2. Sigue los TODO en cada archivo en orden numérico
3. Ejecuta el pipeline completo antes de entregar

```bash
pnpm typecheck
pnpm lint
pnpm test:coverage
pnpm build
```

---

## Criterio de entrega

- `pnpm build` — sale sin errores
- `pnpm test:coverage` — cobertura ≥ 85%
- `pnpm lint` — 0 warnings
- Al menos 3 funciones de utilidad adaptadas al dominio con tests
