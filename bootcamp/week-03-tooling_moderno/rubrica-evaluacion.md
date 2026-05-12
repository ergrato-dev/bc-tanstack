# Rúbrica de Evaluación — Semana 03: Tooling Moderno

## Distribución de Puntaje

| Tipo | Peso | Descripción |
|------|------|-------------|
| Conocimiento 🧠 | 30% | Cuestionario teórico |
| Desempeño 💪 | 40% | Ejercicios prácticos completados |
| Producto 📦 | 30% | Proyecto semanal funcional |

## Criterios — Conocimiento (30%)

| Criterio | Excelente (100%) | Satisfactorio (70%) | Insuficiente (<70%) |
|----------|------------------|---------------------|---------------------|
| Diferencia Vite vs Webpack | ✅ Explica HMR y ESM | ⚠️ Menciona velocidad | ❌ No distingue |
| Rol de ESLint vs Prettier | ✅ Análisis vs formato | ⚠️ Los confunde parcialmente | ❌ No distingue |
| Propósito de `pnpm audit` | ✅ CVE + supply-chain | ⚠️ Solo "seguridad" | ❌ No conoce |

## Criterios — Desempeño (40%)

| Criterio | Excelente (100%) | Satisfactorio (70%) | Insuficiente (<70%) |
|----------|------------------|---------------------|---------------------|
| TypeScript sin errores (`pnpm typecheck`) | ✅ 0 errores | ⚠️ warnings sin errores | ❌ errores de tipo |
| Linter limpio (`pnpm lint`) | ✅ 0 warnings | ⚠️ < 3 warnings | ❌ ≥ 3 warnings |
| Tests con Vitest (`pnpm test`) | ✅ Todos en verde | ⚠️ ≥ 80% en verde | ❌ < 80% en verde |
| Cobertura ≥ 85% (`pnpm test:coverage`) | ✅ ≥ 85% | ⚠️ 70–84% | ❌ < 70% |

## Criterios — Producto (30%)

| Criterio | Excelente (100%) | Satisfactorio (70%) | Insuficiente (<70%) |
|----------|------------------|---------------------|---------------------|
| Proyecto arranca sin errores (`pnpm dev`) | ✅ Sin errores | ⚠️ Warnings menores | ❌ No arranca |
| Adaptado al dominio asignado | ✅ Completo y coherente | ⚠️ Parcial | ❌ No adaptado |
| Versiones exactas en `package.json` | ✅ Sin `^` ni `~` | ⚠️ Algún rango | ❌ Rangos en deps |
| Implementación original | ✅ Única | ⚠️ Con ayuda documentada | ❌ Copiado |

## Puntaje mínimo de aprobación

**70% en cada tipo de evidencia** para considerar la semana aprobada.
