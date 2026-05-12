#!/usr/bin/env bash
# =============================================================================
# Scaffold del Bootcamp TanStack — genera la estructura de 24 semanas
# Uso: bash scripts/scaffold-bootcamp.sh
# =============================================================================

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

# ── Datos de las 24 semanas ───────────────────────────────────────────────────
# Formato: "NUM|slug|Título|Temas"
WEEKS=(
  "01|typescript_esencial|TypeScript Esencial|Tipos · interfaces · generics · utility types · satisfies"
  "02|react_moderno|React Moderno|Hooks · composición · error boundaries · Context API"
  "03|tooling_moderno|Tooling Moderno|Vite · pnpm · ESLint + Prettier · Vitest"
  "04|query_fundamentos|Query — Fundamentos|Server state vs client state · useQuery · QueryClient"
  "05|query_keys_y_filtros|Query Keys y Filtros|queryKey factory · enabled · select · placeholderData"
  "06|mutaciones|Mutaciones|useMutation · onSuccess · onError · isPending"
  "07|cache_avanzado|Cache Avanzado|staleTime · gcTime · invalidateQueries · setQueryData"
  "08|infinite_queries|Infinite Queries|useInfiniteQuery · getNextPageParam · scroll infinito"
  "09|suspense_y_prefetch|Suspense y Prefetch|prefetchQuery · useSuspenseQuery · parallel queries"
  "10|optimistic_updates|Optimistic Updates|Rollback · cache manual · testing con MSW · DevTools"
  "11|router_fundamentos|Router — Fundamentos|createRootRoute · createRoute · Link · Outlet"
  "12|rutas_anidadas|Rutas Anidadas|Nested routes · layout routes · pathless routes · 404"
  "13|loaders_y_params|Loaders y Params|Route params tipados · search params Zod · loader · beforeLoad"
  "14|auth_y_lazy_loading|Auth y Lazy Loading|Auth guard · redirect · lazy loading · Query en loaders"
  "15|table_fundamentos|Table — Fundamentos|useReactTable · columnDef · getCoreRowModel"
  "16|tabla_sorting_filtering|Sorting y Filtering|getSortedRowModel · getFilteredRowModel · pagination"
  "17|tabla_server_side|Tabla Server-Side|manualSorting · manualFiltering · row selection"
  "18|form_fundamentos|Form — Fundamentos|useForm · form.Field · validators · Zod integration"
  "19|form_avanzado|Form Avanzado|Array fields · useFieldArray · async validation · Query submit"
  "20|virtual|TanStack Virtual|useVirtualizer · listas · grids · dynamic sizes"
  "21|tanstack_start|TanStack Start|SSR · createServerFn · streaming · Router + Query"
  "22|fullstack|Full-Stack|Auth server-side · API patterns · variables entorno · deployment"
  "23|proyecto_final_i|Proyecto Final — Parte I|Arquitectura · implementación · CRUD completo"
  "24|proyecto_final_ii|Proyecto Final — Parte II|Code review · optimización · CI/CD · portfolio"
)

# ── Índice de slugs para navegación prev/next ─────────────────────────────────
declare -A SLUG_BY_NUM
for entry in "${WEEKS[@]}"; do
  IFS='|' read -r num slug title topics <<< "$entry"
  SLUG_BY_NUM[$num]="$slug"
done

# ── Función: crear estructura de una semana ───────────────────────────────────
create_week() {
  local num="$1" slug="$2" title="$3" topics="$4"
  local dir="bootcamp/week-${num}-${slug}"

  echo -n "  week-${num} → ${dir} ... "

  # Directorios
  mkdir -p \
    "${dir}/0-assets" \
    "${dir}/1-teoria" \
    "${dir}/2-practicas" \
    "${dir}/3-proyecto/starter" \
    "${dir}/4-recursos/videografia" \
    "${dir}/4-recursos/webgrafia" \
    "${dir}/5-glosario"

  # .gitkeep para carpetas vacías
  touch \
    "${dir}/0-assets/.gitkeep" \
    "${dir}/1-teoria/.gitkeep" \
    "${dir}/2-practicas/.gitkeep" \
    "${dir}/3-proyecto/starter/.gitkeep" \
    "${dir}/4-recursos/videografia/.gitkeep" \
    "${dir}/4-recursos/webgrafia/.gitkeep"

  # Navegación prev/next
  local nav_prev="" nav_next=""
  local prev_num next_num
  prev_num=$(printf "%02d" $(( 10#$num - 1 )))
  next_num=$(printf "%02d" $(( 10#$num + 1 )))

  if [[ $(( 10#$num )) -gt 1 ]]; then
    nav_prev="[← Semana ${prev_num}](../week-${prev_num}-${SLUG_BY_NUM[$prev_num]}/) "
  fi
  if [[ $(( 10#$num )) -lt 24 ]]; then
    nav_next=" [Semana ${next_num} →](../week-${next_num}-${SLUG_BY_NUM[$next_num]}/)"
  fi

  # ── README.md ──
  cat > "${dir}/README.md" << MDEOF
# Semana ${num} — ${title}

> **Temas**: ${topics}

## 🎯 Objetivos

Al finalizar esta semana, el estudiante será capaz de:

1. *(por definir)*
2. *(por definir)*
3. *(por definir)*

## ⏱️ Distribución del Tiempo (8h)

| Bloque | Horas | Enlace |
|--------|-------|--------|
| Teoría | 2h | [1-teoria/](1-teoria/) |
| Prácticas | 3.5h | [2-practicas/](2-practicas/) |
| Proyecto | 2.5h | [3-proyecto/](3-proyecto/) |

## 📁 Estructura

\`\`\`
week-${num}-${slug}/
├── 0-assets/          # Diagramas SVG
├── 1-teoria/          # Material teórico (.md numerados)
├── 2-practicas/       # Ejercicios guiados (starter + solution)
├── 3-proyecto/        # Proyecto semanal integrador
├── 4-recursos/        # Videografía y webgrafía
├── 5-glosario/        # Términos clave A-Z
└── rubrica-evaluacion.md
\`\`\`

## 📊 Evaluación

Ver [rubrica-evaluacion.md](rubrica-evaluacion.md).

---

${nav_prev}|${nav_next}
MDEOF

  # ── rubrica-evaluacion.md ──
  cat > "${dir}/rubrica-evaluacion.md" << MDEOF
# Rúbrica de Evaluación — Semana ${num}: ${title}

## Distribución de Puntaje

| Tipo | Peso | Descripción |
|------|------|-------------|
| Conocimiento 🧠 | 30% | Cuestionario teórico |
| Desempeño 💪 | 40% | Ejercicios prácticos completados |
| Producto 📦 | 30% | Proyecto semanal funcional |

## Criterios — Desempeño (40%)

| Criterio | Excelente (100%) | Satisfactorio (70%) | Insuficiente (<70%) |
|----------|------------------|---------------------|---------------------|
| TypeScript sin errores (\`pnpm typecheck\`) | ✅ 0 errores | ⚠️ warnings sin errores | ❌ errores de tipo |
| Linter limpio (\`pnpm lint\`) | ✅ 0 warnings | ⚠️ < 3 warnings | ❌ ≥ 3 warnings |
| Cobertura ≥ 85% (\`pnpm test:coverage\`) | ✅ ≥ 85% | ⚠️ 70–84% | ❌ < 70% |

## Criterios — Producto (30%)

| Criterio | Excelente (100%) | Satisfactorio (70%) | Insuficiente (<70%) |
|----------|------------------|---------------------|---------------------|
| Adaptado al dominio asignado | ✅ Completo | ⚠️ Parcial | ❌ No adaptado |
| Implementación original | ✅ Única | ⚠️ Con ayuda documentada | ❌ Copiado |

## Puntaje mínimo de aprobación

**70% en cada tipo de evidencia** para considerar la semana aprobada.
MDEOF

  # ── 5-glosario/README.md ──
  cat > "${dir}/5-glosario/README.md" << MDEOF
# Glosario — Semana ${num}: ${title}

Términos clave de la semana, ordenados A–Z.

| Término | Definición |
|---------|-----------|
| *(por definir)* | *(por definir)* |
MDEOF

  echo "✅"
}

# ── Main ──────────────────────────────────────────────────────────────────────

echo "🏗️  Creando estructura de carpetas raíz..."
mkdir -p docs scripts bootcamp

echo ""
echo "📚 Generando 24 semanas..."
for entry in "${WEEKS[@]}"; do
  IFS='|' read -r num slug title topics <<< "$entry"
  create_week "$num" "$slug" "$title" "$topics"
done

echo ""
echo "📁 Creando docs/..."
cat > docs/README.md << 'MDEOF'
# 📚 Documentación del Bootcamp TanStack

## Índice

- [Dominios de Negocio](dominios.md) — Catálogo de dominios únicos por aprendiz
MDEOF

cat > docs/dominios.md << 'MDEOF'
# 🏛️ Catálogo de Dominios de Negocio

Cada aprendiz trabaja sobre un dominio único asignado por el instructor.
Los dominios marcados con **★** están reservados para ejemplos del bootcamp —
no asignar a aprendices para evitar revelar soluciones.

| # | Dominio | Entidades principales | Asignado a |
|---|---------|----------------------|------------|
| ★ | **Biblioteca** | books, authors, loans, members | *Ejemplo bootcamp* |
| 1 | Farmacia | products, categories, suppliers, sales | — |
| 2 | Gimnasio | members, plans, classes, trainers | — |
| 3 | Restaurante | menu, orders, tables, staff | — |
| 4 | Clínica veterinaria | pets, owners, appointments, treatments | — |
| 5 | E-commerce | products, categories, orders, customers | — |
| 6 | Marina / Puerto deportivo | boats, berths, owners, services | — |
| 7 | Agencia de viajes | trips, destinations, reservations, clients | — |
| 8 | Gestión de proyectos | projects, tasks, teams, sprints | — |
| 9 | Escuela de idiomas | courses, students, teachers, enrollments | — |
| 10 | Centro médico | patients, doctors, appointments, prescriptions | — |
| 11 | Inmobiliaria | properties, agents, clients, transactions | — |
| 12 | Librería | books, authors, genres, sales | — |
| 13 | Club deportivo | teams, players, matches, results | — |
| 14 | Museo | exhibits, collections, visitors, events | — |
| 15 | Taller mecánico | vehicles, repairs, parts, appointments | — |
| 16 | Hotel | rooms, reservations, guests, services | — |
| 17 | Estudio de fotografía | sessions, clients, albums, packages | — |
| 18 | Floristería | flowers, arrangements, orders, occasions | — |
| 19 | Academia de música | instruments, lessons, students, schedules | — |
| 20 | Tienda de mascotas | animals, supplies, services, owners | — |
| 21 | Empresa de logística | shipments, routes, drivers, warehouses | — |
| 22 | Consultorio jurídico | cases, clients, lawyers, hearings | — |
| 23 | Centro de coworking | spaces, memberships, bookings, amenities | — |
| 24 | Cine | movies, screenings, tickets, theaters | — |

> ⚠️ El instructor asigna el dominio. No compartas tu implementación con otros aprendices.
MDEOF

echo "📁 Creando bootcamp/README.md..."
cat > bootcamp/README.md << 'MDEOF'
# 📚 Contenido del Bootcamp TanStack

## Etapa 0 — Fundamentos Técnicos (Semanas 1–3)

| Semana | Tema |
|--------|------|
| [S01](week-01-typescript_esencial/) | TypeScript Esencial |
| [S02](week-02-react_moderno/) | React Moderno |
| [S03](week-03-tooling_moderno/) | Tooling Moderno |

## Etapa 1 — TanStack Query: Fundamentos (Semanas 4–7)

| Semana | Tema |
|--------|------|
| [S04](week-04-query_fundamentos/) | Query — Fundamentos |
| [S05](week-05-query_keys_y_filtros/) | Query Keys y Filtros |
| [S06](week-06-mutaciones/) | Mutaciones |
| [S07](week-07-cache_avanzado/) | Cache Avanzado |

## Etapa 2 — TanStack Query: Avanzado (Semanas 8–10)

| Semana | Tema |
|--------|------|
| [S08](week-08-infinite_queries/) | Infinite Queries |
| [S09](week-09-suspense_y_prefetch/) | Suspense y Prefetch |
| [S10](week-10-optimistic_updates/) | Optimistic Updates |

## Etapa 3 — TanStack Router (Semanas 11–14)

| Semana | Tema |
|--------|------|
| [S11](week-11-router_fundamentos/) | Router — Fundamentos |
| [S12](week-12-rutas_anidadas/) | Rutas Anidadas |
| [S13](week-13-loaders_y_params/) | Loaders y Params |
| [S14](week-14-auth_y_lazy_loading/) | Auth y Lazy Loading |

## Etapa 4 — TanStack Table (Semanas 15–17)

| Semana | Tema |
|--------|------|
| [S15](week-15-table_fundamentos/) | Table — Fundamentos |
| [S16](week-16-tabla_sorting_filtering/) | Sorting y Filtering |
| [S17](week-17-tabla_server_side/) | Tabla Server-Side |

## Etapa 5 — TanStack Form (Semanas 18–19)

| Semana | Tema |
|--------|------|
| [S18](week-18-form_fundamentos/) | Form — Fundamentos |
| [S19](week-19-form_avanzado/) | Form Avanzado |

## Etapa 6 — TanStack Virtual + Start (Semanas 20–22)

| Semana | Tema |
|--------|------|
| [S20](week-20-virtual/) | TanStack Virtual |
| [S21](week-21-tanstack_start/) | TanStack Start |
| [S22](week-22-fullstack/) | Full-Stack |

## Etapa 7 — Proyecto Final (Semanas 23–24)

| Semana | Tema |
|--------|------|
| [S23](week-23-proyecto_final_i/) | Proyecto Final — Parte I |
| [S24](week-24-proyecto_final_ii/) | Proyecto Final — Parte II |
MDEOF

echo ""
echo "🎉 Scaffolding completo."
echo "   Carpetas generadas: $(find bootcamp -type d | wc -l) directorios"
echo "   Archivos generados: $(find bootcamp docs -type f | wc -l) archivos"
