import { useQuery } from '@tanstack/react-query'
import type { Post } from '@/api/posts'
import { fetchPosts } from '@/api/posts'

interface Props {
  onSelect: (id: number) => void
  selectedId: number | null
}

export function PostList({ onSelect, selectedId }: Props) {
  const { data: posts, isPending, isError, error } = useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  if (isPending) return <p style={{ color: '#94A3B8' }}>Cargando posts…</p>
  if (isError) return <p style={{ color: '#EF4444' }}>Error: {error.message}</p>
  if (!posts?.length) return <p style={{ color: '#94A3B8' }}>Sin posts.</p>

  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {posts.map(post => (
        <li
          key={post.id}
          onClick={() => onSelect(post.id)}
          style={{
            padding: '0.75rem 1rem',
            marginBottom: '0.5rem',
            background: selectedId === post.id ? '#1E3A5F' : '#1E293B',
            borderRadius: '6px',
            borderLeft: `3px solid ${selectedId === post.id ? '#FF4154' : '#334155'}`,
            cursor: 'pointer',
            color: '#F8FAFC',
            fontSize: '0.875rem',
          }}
        >
          #{post.id} — {post.title}
        </li>
      ))}
    </ul>
  )
}
