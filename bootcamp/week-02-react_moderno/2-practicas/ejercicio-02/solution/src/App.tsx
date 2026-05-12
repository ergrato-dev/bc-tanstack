import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  memo,
  type ReactNode,
} from 'react'

// ======== Context de tema ========

interface ThemeContextValue {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  // Memoizar el objeto value para evitar que todos los consumidores re-rendericen
  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      toggleTheme: () => setTheme(t => (t === 'dark' ? 'light' : 'dark')),
    }),
    [theme]
  )

  return <ThemeContext value={value}>{children}</ThemeContext>
}

function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme debe usarse dentro de ThemeProvider')
  return ctx
}

// ======== Datos de prueba ========

interface Product {
  id: number
  name: string
}

const ALL_PRODUCTS: Product[] = Array.from({ length: 500 }, (_, i) => ({
  id: i + 1,
  name: `Producto ${String(i + 1).padStart(3, '0')}`,
}))

// ======== ProductItem con memo ========

interface ProductItemProps {
  product: Product
  onDelete: (id: number) => void
}

// Solo re-renderiza si product u onDelete cambian (referencia estable vía useCallback)
const ProductItem = memo(function ProductItem({ product, onDelete }: ProductItemProps) {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.25rem 0' }}>
      {product.name}
      <button onClick={() => onDelete(product.id)}>Eliminar</button>
    </li>
  )
})

// ======== Lista con filtro + delete ========

function ProductListWithDelete() {
  const [products, setProducts] = useState<Product[]>(ALL_PRODUCTS.slice(0, 10))
  const [filter, setFilter] = useState<string>('')

  // Solo se recalcula cuando products o filter cambian
  const filtered = useMemo(
    () => products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase())),
    [products, filter]
  )

  // Referencia estable — ProductItem no re-renderiza al escribir en el filtro
  const handleDelete = useCallback((id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id))
  }, [])

  return (
    <section>
      <input
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder="Filtrar productos..."
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />
      <p style={{ color: '#94A3B8' }}>{filtered.length} resultados</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filtered.map(p => (
          <ProductItem key={p.id} product={p} onDelete={handleDelete} />
        ))}
      </ul>
    </section>
  )
}

// ======== AppContent consume el contexto ========

function AppContent() {
  const { theme, toggleTheme } = useTheme()
  const bg = theme === 'dark' ? '#0F172A' : '#F8FAFC'
  const color = theme === 'dark' ? '#F1F5F9' : '#0F172A'

  return (
    <main style={{ background: bg, color, minHeight: '100vh', padding: '2rem', fontFamily: 'system-ui' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Lista de Productos</h1>
        <button onClick={toggleTheme}>
          {theme === 'dark' ? '☀️ Claro' : '🌙 Oscuro'}
        </button>
      </header>
      <ProductListWithDelete />
    </main>
  )
}

// ======== App raíz ========

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
