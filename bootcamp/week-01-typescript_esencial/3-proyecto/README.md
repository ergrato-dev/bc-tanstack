# Proyecto Semanal — Sistema de Gestión (Semana 01)

## Contexto

Aplicarás los conceptos de la semana a tu **dominio asignado** (ver `docs/dominios.md`).

> Ejemplos de adaptación:
> - Biblioteca → `Book`, `Member`, `Loan`
> - Clínica veterinaria → `Pet`, `Owner`, `Appointment`
> - Marina → `Boat`, `Berth`, `Service`
> - E-commerce → `Product`, `Order`, `Customer`

## Entregable

Un módulo TypeScript puro (`*.ts`) con el sistema de tipos de tu dominio:

- Al menos 3 interfaces del dominio
- Al menos 1 type alias con unión discriminante
- Al menos 1 tipo genérico reutilizable
- Al menos 2 utility types aplicados
- El operador `satisfies` en al menos 1 configuración

## Estructura esperada

```
mi-dominio/
├── src/
│   ├── types.ts       ← interfaces y type aliases del dominio
│   ├── generics.ts    ← funciones y tipos genéricos
│   └── index.ts       ← exporta todo y demuestra uso
└── package.json
```

## Criterios de calidad

```bash
pnpm typecheck   # 0 errores
pnpm lint        # 0 warnings
```

No se acepta `any` ni `@ts-ignore`.
