// ============================================
// EJERCICIO 02 — useMemo, useCallback y Context API
// Semana 02 — React Moderno
// ============================================
//
// Descomenta los bloques en orden: PASO 1 → PASO 4

// ============================================
// PASO 1: Contexto de tema (ThemeContext)
// ============================================

// Descomenta estas líneas:
// import {
//   createContext, useContext, useState, useMemo, useCallback, memo,
//   type ReactNode,
// } from 'react'

// interface ThemeContextValue {
//   theme: 'light' | 'dark'
//   toggleTheme: () => void
// }

// const ThemeContext = createContext<ThemeContextValue | null>(null)

// function ThemeProvider({ children }: { children: ReactNode }) {
//   const [theme, setTheme] = useState<'light' | 'dark'>('dark')
//   // Memoizar el valor para evitar que todos los consumidores re-rendericen
//   const value = useMemo<ThemeContextValue>(
//     () => ({ theme, toggleTheme: () => setTheme(t => t === 'dark' ? 'light' : 'dark') }),
//     [theme]
//   )
//   return <ThemeContext value={value}>{children}</ThemeContext>
// }

// function useTheme(): ThemeContextValue {
//   const ctx = useContext(ThemeContext)
//   if (!ctx) throw new Error('useTheme debe usarse dentro de ThemeProvider')
//   return ctx
// }

// ============================================
// PASO 2: Lista de productos con filtro memoizado
// ============================================

// interface Product {
//   id: number
//   name: string
// }

// // Generar 500 productos de prueba
// const ALL_PRODUCTS: Product[] = Array.from({ length: 500 }, (_, i) => ({
//   id: i + 1,
//   name: `Producto ${String(i + 1).padStart(3, '0')}`,
// }))

// function ProductList() {
//   const [filter, setFilter] = useState<string>('')

//   // Solo se recalcula cuando filter cambia — no en cada render del padre
//   const filtered = useMemo(
//     () => ALL_PRODUCTS.filter(p => p.name.toLowerCase().includes(filter.toLowerCase())),
//     [filter]
//   )

//   return (
//     <section>
//       <input
//         value={filter}
//         onChange={e => setFilter(e.target.value)}
//         placeholder="Filtrar productos..."
//         style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
//       />
//       <p style={{ color: '#94A3B8' }}>{filtered.length} resultados</p>
//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         {filtered.slice(0, 20).map(p => (
//           <li key={p.id} style={{ padding: '0.25rem 0', borderBottom: '1px solid #334155' }}>
//             {p.name}
//           </li>
//         ))}
//         {filtered.length > 20 && <li style={{ color: '#64748B' }}>... y {filtered.length - 20} más</li>}
//       </ul>
//     </section>
//   )
// }

// ============================================
// PASO 3: ProductItem con memo + handleDelete con useCallback
// ============================================

// interface ProductItemProps {
//   product: Product
//   onDelete: (id: number) => void
// }

// // memo evita re-render si props no cambian
// const ProductItem = memo(function ProductItem({ product, onDelete }: ProductItemProps) {
//   return (
//     <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.25rem 0' }}>
//       {product.name}
//       <button onClick={() => onDelete(product.id)}>Eliminar</button>
//     </li>
//   )
// })

// function ProductListWithDelete() {
//   const [products, setProducts] = useState<Product[]>(ALL_PRODUCTS.slice(0, 10))
//   const [filter, setFilter] = useState<string>('')

//   const filtered = useMemo(
//     () => products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase())),
//     [products, filter]
//   )

//   // useCallback garantiza que handleDelete tiene la misma referencia entre renders
//   const handleDelete = useCallback((id: number) => {
//     setProducts(prev => prev.filter(p => p.id !== id))
//   }, []) // setProducts es estable — no necesita estar en deps

//   return (
//     <section>
//       <input
//         value={filter}
//         onChange={e => setFilter(e.target.value)}
//         placeholder="Filtrar..."
//         style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
//       />
//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         {filtered.map(p => (
//           <ProductItem key={p.id} product={p} onDelete={handleDelete} />
//         ))}
//       </ul>
//     </section>
//   )
// }

// ============================================
// PASO 4: App completa con tema desde Context
// ============================================

// export function App() {
//   return (
//     <ThemeProvider>
//       <AppContent />
//     </ThemeProvider>
//   )
// }

// function AppContent() {
//   const { theme, toggleTheme } = useTheme()

//   const bg = theme === 'dark' ? '#0F172A' : '#F8FAFC'
//   const color = theme === 'dark' ? '#F1F5F9' : '#0F172A'

//   return (
//     <main style={{ background: bg, color, minHeight: '100vh', padding: '2rem', fontFamily: 'system-ui' }}>
//       <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
//         <h1>Lista de Productos</h1>
//         <button onClick={toggleTheme}>
//           {theme === 'dark' ? '☀️ Claro' : '🌙 Oscuro'}
//         </button>
//       </header>
//       <ProductListWithDelete />
//     </main>
//   )
// }

// ----------------------------------------
// Exportación temporal — reemplaza al desbloquear PASO 4
export function App() {
  return <p>Descomenta los bloques en orden (PASO 1 → PASO 4)</p>
}
