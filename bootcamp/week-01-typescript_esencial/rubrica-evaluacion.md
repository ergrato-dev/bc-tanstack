# Rúbrica de Evaluación — Semana 01: TypeScript Esencial

## Distribución de Puntaje

| Tipo | Peso | Descripción |
|------|------|-------------|
| Conocimiento 🧠 | 30% | Cuestionario teórico sobre tipos, generics y utility types |
| Desempeño 💪 | 40% | Ejercicios prácticos completados (ejercicio-01 y ejercicio-02) |
| Producto 📦 | 30% | Proyecto CRUD tipado adaptado al dominio asignado |

---

## Criterios — Conocimiento 🧠 (30%)

| Criterio | Excelente (100%) | Satisfactorio (70%) | Insuficiente (<70%) |
|----------|------------------|---------------------|---------------------|
| Diferencia `interface` vs `type` | Explica con casos concretos | Explica con vaguedad | No distingue |
| Generics con `extends` | Explica restricciones y usos | Explica el concepto básico | No comprende |
| Utility types (`Partial`, `Pick`, `Omit`) | Describe cuándo usar cada uno | Identifica al menos uno | No los reconoce |
| Operador `satisfies` | Explica ventaja sobre cast `as` | Menciona que valida tipos | No lo conoce |

---

## Criterios — Desempeño 💪 (40%)

| Criterio | Excelente (100%) | Satisfactorio (70%) | Insuficiente (<70%) |
|----------|------------------|---------------------|---------------------|
| TypeScript sin errores (`pnpm typecheck`) | ✅ 0 errores | ⚠️ warnings, sin errores | ❌ errores de tipo |
| Linter limpio (`pnpm lint`) | ✅ 0 warnings | ⚠️ < 3 warnings | ❌ ≥ 3 warnings |
| Ejercicio-01: interfaces y tipos | Todas las interfaces correctas | La mayoría correctas | Usa `any` o falta tipado |
| Ejercicio-02: generics y utility types | Usa generics con `extends` | Usa generics básicos | No usa generics |

---

## Criterios — Producto 📦 (30%)

| Criterio | Excelente (100%) | Satisfactorio (70%) | Insuficiente (<70%) |
|----------|------------------|---------------------|---------------------|
| Interfaces del dominio definidas | Todas las entidades tipadas | Entidades principales tipadas | Sin tipado propio |
| Sin uso de `any` | ✅ Cero `any` en el código | ⚠️ Máx. 1 `any` justificado | ❌ Múltiples `any` |
| Utility types aplicados | Al menos 2 utility types reales | Al menos 1 utility type | Sin utility types |
| Adaptado al dominio asignado | ✅ Completo y coherente | ⚠️ Parcialmente adaptado | ❌ Dominio genérico |
| Implementación original | ✅ Código único | ⚠️ Con ayuda documentada | ❌ Copiado |

---

## Puntaje Mínimo de Aprobación

**70% en cada tipo de evidencia** para considerar la semana aprobada.

