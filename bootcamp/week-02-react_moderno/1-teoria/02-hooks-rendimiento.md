# 02 — Hooks de Rendimiento: useMemo y useCallback

## 🎯 Objetivos

1. Identificar cuándo React re-renderiza innecesariamente un componente
2. Memorizar valores computados costosos con `useMemo`
3. Memorizar funciones como referencias estables con `useCallback`

![Flujo de optimización de renders](../0-assets/01-hook-lifecycle.svg)

## 1. El problema: re-renders innecesarios

Cada vez que un componente padre re-renderiza, todos sus hijos también lo hacen,
aunque sus props no hayan cambiado.

```tsx
function Parent() {
  const [count, setCount] = useState<number>(0)

  // Esta función se crea en cada render — nueva referencia cada vez
  const handleClick = () => console.log('clicked')

  // Este array se recalcula en cada render aunque items no cambie
  const filtered = items.filter(i => i.active)

  return <Child onClick={handleClick} items={filtered} />
}
```

## 2. `useMemo` — Memorizar valores

Calcula un valor solo cuando cambian sus dependencias.

```tsx
import { useMemo, useState } from 'react'

function ProductList({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<string>('')

  // Solo se recalcula cuando `products` o `filter` cambian
  const filtered = useMemo(
    () => products.filter(p => p.name.toLowerCase().includes(filter)),
    [products, filter]
  )

  return (
    <>
      <input value={filter} onChange={e => setFilter(e.target.value)} />
      <ul>{filtered.map(p => <li key={p.id}>{p.name}</li>)}</ul>
    </>
  )
}
```

> Usar `useMemo` para computaciones que procesan listas grandes o cálculos pesados.
> No usarlo para valores simples: el overhead de memorización supera el beneficio.

## 3. `useCallback` — Memorizar funciones

Retorna la misma función entre renders si sus dependencias no cambiaron.

```tsx
import { useCallback, useState } from 'react'

function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([])

  // Sin useCallback: nueva referencia en cada render → hijo re-renderiza siempre
  // Con useCallback: misma referencia → hijo solo re-renderiza si cambia setTasks
  const handleDelete = useCallback((id: number) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }, []) // setTasks es estable — no necesita estar en deps

  return <TaskList tasks={tasks} onDelete={handleDelete} />
}
```

## 4. `React.memo` — Evitar re-renders en hijos

Para que `useCallback`/`useMemo` surtan efecto, el componente hijo debe estar
envuelto en `React.memo`:

```tsx
import { memo } from 'react'

// Solo re-renderiza si sus props cambian (comparación superficial)
const TaskList = memo(function TaskList({ tasks, onDelete }: Props) {
  return (
    <ul>
      {tasks.map(t => (
        <li key={t.id}>
          {t.title}
          <button onClick={() => onDelete(t.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  )
})
```

## ✅ Checklist

- ¿El cálculo que memorizas es realmente costoso o solo un `.filter()` simple?
- ¿El componente hijo está en `React.memo` para que `useCallback` tenga efecto?
- ¿Las dependencias de `useMemo`/`useCallback` son correctas y completas?
- ¿Mediste con React DevTools Profiler antes de optimizar?

## 📖 Referencias

- [useMemo — React Docs](https://react.dev/reference/react/useMemo)
- [useCallback — React Docs](https://react.dev/reference/react/useCallback)
- [React.memo — React Docs](https://react.dev/reference/react/memo)
