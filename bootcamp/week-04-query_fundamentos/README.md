# Semana 04 — TanStack Query: Fundamentos

> **Temas**: Server state · `useQuery` · `QueryClient` · `QueryClientProvider`

## 🎯 Objetivos

Al finalizar esta semana, el estudiante será capaz de:

1. Distinguir server state de client state y justificar por qué necesita una librería dedicada.
2. Configurar `QueryClient` y `QueryClientProvider` en una app React.
3. Ejecutar su primera query con `useQuery` y manejar los estados `isLoading`, `isError` e `isSuccess`.
4. Instalar y usar TanStack Query DevTools para inspeccionar el cache.

## ⏱️ Distribución del Tiempo (8h)

| Bloque | Horas | Enlace |
|--------|-------|--------|
| Teoría | 2h | [1-teoria/](1-teoria/) |
| Prácticas | 3.5h | [2-practicas/](2-practicas/) |
| Proyecto | 2.5h | [3-proyecto/](3-proyecto/) |

## 📁 Estructura

```
week-04-query_fundamentos/
├── 0-assets/
│   └── 01-query-data-flow.svg     # Flujo de datos: componente → cache → API
├── 1-teoria/
│   ├── 01-server-state.md         # Server state vs client state + instalación
│   ├── 02-queryclient-provider.md # QueryClient, QueryClientProvider, DevTools
│   └── 03-usequery.md             # useQuery: anatomía, estados, TypeScript
├── 2-practicas/
│   ├── ejercicio-01/              # Setup QueryClient + DevTools
│   └── ejercicio-02/              # Primer useQuery con API real
├── 3-proyecto/                    # App de lista + detalle con useQuery
├── 4-recursos/                    # Videografía y webgrafía
├── 5-glosario/                    # Términos clave A-Z
└── rubrica-evaluacion.md
```

## 📊 Evaluación

Ver [rubrica-evaluacion.md](rubrica-evaluacion.md).

---

[← Semana 03](../week-03-tooling_moderno/) | [Semana 05 →](../week-05-query_keys_y_filtros/)
