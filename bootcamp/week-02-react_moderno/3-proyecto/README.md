# Proyecto Semanal — Semana 02: React Moderno

## 🎯 Objetivo

Construir una aplicación CRUD sencilla usando hooks de React y Context API,
adaptada al dominio asignado por el instructor (ver [docs/dominios.md](../../../docs/dominios.md)).

## 📋 Requisitos funcionales

Tu aplicación debe:

1. **Listar entidades** del dominio (ej: libros, mascotas, productos, botes…)
2. **Agregar** una nueva entidad mediante un formulario simple
3. **Eliminar** una entidad de la lista
4. **Filtrar** la lista con un campo de búsqueda (memoizado con `useMemo`)
5. **Tema claro/oscuro** compartido vía Context API

## 🛠️ Requisitos técnicos

| Requisito | Detalle |
|-----------|---------|
| `useState` | Para el estado de la lista y el formulario |
| `useEffect` | Para inicializar datos desde `localStorage` al montar |
| `useRef` | Para enfocar el input del formulario al cargar |
| `useMemo` | Para memoizar la lista filtrada |
| `useCallback` | Para los handlers de agregar/eliminar |
| Context API | Para el tema claro/oscuro |
| `React.memo` | Para el componente de ítem de lista |
| TypeScript | Sin errores de tipo (`pnpm typecheck`) |

## 📁 Estructura del starter

```
starter/src/
├── main.tsx         # Entry point
├── App.tsx          # Componente raíz — monta el Provider
├── context/
│   └── ThemeContext.tsx   # TODO: Context + Provider + hook
├── components/
│   ├── ItemList.tsx       # TODO: Lista memoizada
│   ├── ItemForm.tsx       # TODO: Formulario de alta
│   └── ItemCard.tsx       # TODO: Tarjeta de ítem (con memo)
└── types.ts               # TODO: Interfaces del dominio
```

## 🏛️ Nota de dominio

Adapta los nombres al dominio asignado:

| Dominio   | Entidad      | Campos sugeridos            |
|-----------|--------------|-----------------------------|
| Biblioteca | `Book`      | `id`, `title`, `author`     |
| Clínica   | `Pet`        | `id`, `name`, `species`     |
| Tienda    | `Product`    | `id`, `name`, `price`       |
| Marina    | `Boat`       | `id`, `name`, `type`        |

## ✅ Definición de terminado

- [ ] La lista muestra las entidades del dominio
- [ ] El formulario agrega ítems y resetea el input con `useRef`
- [ ] El filtro usa `useMemo` y no recalcula innecesariamente
- [ ] El tema alterna entre claro y oscuro via Context
- [ ] `pnpm typecheck` — 0 errores
- [ ] `pnpm lint` — 0 warnings
