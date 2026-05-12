// ============================================
// PASO 3: useQuery con queryKey dinámica
// ============================================

// Cuando la queryKey incluye un parámetro, cada valor genera una entrada
// separada en el cache. El campo `enabled` evita ejecutar la query
// hasta que el parámetro esté disponible.
//
// Descomenta el componente PostDetail completo:

// import { useQuery } from '@tanstack/react-query'
// import type { Post } from '@/api/posts'
// import { fetchPost } from '@/api/posts'
//
// interface Props {
//   postId: number
// }
//
// export function PostDetail({ postId }: Props) {
//   const { data: post, isPending, isError, error } = useQuery<Post, Error>({
//     queryKey: ['posts', postId],          // key única por ID
//     queryFn: () => fetchPost(postId),
//     enabled: postId > 0,                  // no ejecutar si el ID no es válido
//   })
//
//   if (isPending) return <p style={{ color: '#94A3B8' }}>Cargando detalle…</p>
//   if (isError) return <p style={{ color: '#EF4444' }}>Error: {error.message}</p>
//   if (!post) return null
//
//   return (
//     <div style={{
//       padding: '1.5rem',
//       background: '#1E293B',
//       borderRadius: '8px',
//       borderTop: '3px solid #FF4154',
//     }}>
//       <h2 style={{ color: '#F8FAFC', margin: '0 0 0.5rem' }}>
//         #{post.id} — {post.title}
//       </h2>
//       <p style={{ color: '#94A3B8', margin: 0, lineHeight: '1.6' }}>{post.body}</p>
//     </div>
//   )
// }

// Placeholder mientras completas el paso
export function PostDetail(_props: { postId: number }) {
  return <p style={{ color: '#94A3B8' }}>PostDetail — descomenta el PASO 3</p>
}
