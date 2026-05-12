// ============================================
// PROYECTO SEMANAL: Mini-app Lista + Detalle
// Semana 04 — TanStack Query Fundamentos
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta este esquema a tu dominio asignado (ver docs/dominios.md).
// Ejemplos de adaptación según dominio:
//   Biblioteca  → Book, books, fetchBooks, fetchBook
//   Clínica vet → Pet, pets, fetchPets, fetchPet
//   E-commerce  → Product, products, fetchProducts, fetchProduct
//   Marina      → Boat, boats, fetchBoats, fetchBoat

// TODO: Definir la interfaz de tu entidad principal
// interface Item {
//   id: number
//   name: string       // nombre visible en la lista
//   description: string
//   // ... otros campos relevantes del dominio
// }

// TODO: Implementar los datos simulados (array en memoria)
// const MOCK_ITEMS: Item[] = [
//   { id: 1, name: '...', description: '...' },
//   { id: 2, name: '...', description: '...' },
//   { id: 3, name: '...', description: '...' },
// ]

// TODO: Implementar fetchItems (simula una petición con setTimeout)
// async function fetchItems(): Promise<Item[]> {
//   return new Promise(resolve => setTimeout(() => resolve(MOCK_ITEMS), 500))
// }

// TODO: Implementar fetchItem (simula una petición por ID)
// async function fetchItem(id: number): Promise<Item> {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       const item = MOCK_ITEMS.find(i => i.id === id)
//       if (!item) reject(new Error(`Ítem ${id} no encontrado`))
//       else resolve(item)
//     }, 300)
//   )
// }

// TODO: Implementar el componente ItemList usando useQuery<Item[], Error>
// - queryKey: ['items']
// - queryFn: fetchItems
// - Manejar isPending, isError, lista vacía

// TODO: Implementar el componente ItemDetail usando useQuery<Item, Error>
// - queryKey: ['items', itemId]
// - queryFn: () => fetchItem(itemId)
// - enabled: itemId > 0
// - Manejar isPending, isError

// TODO: Implementar App con useState para el ID seleccionado
// - Renderizar ItemList e ItemDetail lado a lado
// - Pasar onSelect a ItemList y selectedId como prop

// TODO: Configurar main.tsx con QueryClient + QueryClientProvider + DevTools

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui', padding: '2rem', background: '#0F172A', minHeight: '100vh' }}>
      <h1 style={{ color: '#FF4154' }}>Proyecto 04 — Query Fundamentos</h1>
      <p style={{ color: '#94A3B8' }}>Implementa los TODOs para completar el proyecto.</p>
    </div>
  )
}
