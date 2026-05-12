# Rúbrica de Evaluación — Semana 04: TanStack Query Fundamentos

## Distribución de Puntaje

| Tipo | Peso | Descripción |
|------|------|-------------|
| Conocimiento 🧠 | 30% | Cuestionario teórico |
| Desempeño 💪 | 40% | Ejercicios prácticos completados |
| Producto 📦 | 30% | Proyecto semanal funcional |

## Criterios — Conocimiento (30%)

| Criterio | Excelente (100%) | Satisfactorio (70%) | Insuficiente (<70%) |
|----------|------------------|---------------------|---------------------|
| Distingue server state de client state | ✅ Con ejemplos | ⚠️ Concepto sin ejemplos | ❌ Confunde ambos |
| Explica el rol de QueryClient | ✅ Correcto y completo | ⚠️ Parcialmente correcto | ❌ Incorrecto |
| Describe los estados de useQuery | ✅ ≥ 4 estados | ⚠️ 2–3 estados | ❌ < 2 estados |
| Identifica cuándo usar DevTools | ✅ Correcto | ⚠️ Dudas | ❌ Incorrecto |

## Criterios — Desempeño (40%)

| Criterio | Excelente (100%) | Satisfactorio (70%) | Insuficiente (<70%) |
|----------|------------------|---------------------|---------------------|
| QueryClient y Provider correctos | ✅ Sin errores | ⚠️ Con ayuda | ❌ No funciona |
| useQuery tipado con genéricos | ✅ `useQuery<T, Error>()` | ⚠️ Sin genéricos | ❌ Ausente |
| TypeScript sin errores (`pnpm typecheck`) | ✅ 0 errores | ⚠️ warnings sin errores | ❌ errores de tipo |
| Linter limpio (`pnpm lint`) | ✅ 0 warnings | ⚠️ < 3 warnings | ❌ ≥ 3 warnings |

## Criterios — Producto (30%)

| Criterio | Excelente (100%) | Satisfactorio (70%) | Insuficiente (<70%) |
|----------|------------------|---------------------|---------------------|
| Adaptado al dominio asignado | ✅ Completo | ⚠️ Parcial | ❌ No adaptado |
| Lista + detalle con useQuery | ✅ Ambos implementados | ⚠️ Solo lista | ❌ Sin useQuery |
| Manejo de loading y error | ✅ Ambos estados | ⚠️ Solo loading | ❌ Sin manejo |
| Implementación original | ✅ Única | ⚠️ Con ayuda documentada | ❌ Copiado |

## Puntaje mínimo de aprobación

**70% en cada tipo de evidencia** para considerar la semana aprobada.
