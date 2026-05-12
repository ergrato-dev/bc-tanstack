import { useQuery } from '@tanstack/react-query'
import type { Post } from '@/api/posts'
import { fetchPost } from '@/api/posts'

interface Props {
  postId: number
}

export function PostDetail({ postId }: Props) {
  const { data: post, isPending, isError, error } = useQuery<Post, Error>({
    queryKey: ['posts', postId],
    queryFn: () => fetchPost(postId),
    enabled: postId > 0,
  })

  if (isPending) return <p style={{ color: '#94A3B8' }}>Cargando detalle…</p>
  if (isError) return <p style={{ color: '#EF4444' }}>Error: {error.message}</p>
  if (!post) return null

  return (
    <div style={{
      padding: '1.5rem',
      background: '#1E293B',
      borderRadius: '8px',
      borderTop: '3px solid #FF4154',
    }}>
      <h2 style={{ color: '#F8FAFC', margin: '0 0 0.5rem' }}>
        #{post.id} — {post.title}
      </h2>
      <p style={{ color: '#94A3B8', margin: 0, lineHeight: '1.6' }}>{post.body}</p>
    </div>
  )
}
