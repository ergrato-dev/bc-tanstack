export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

const API_BASE = 'https://jsonplaceholder.typicode.com'

export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(`${API_BASE}/posts?_limit=10`)
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)
  return response.json() as Promise<Post[]>
}

export async function fetchPost(id: number): Promise<Post> {
  const response = await fetch(`${API_BASE}/posts/${id}`)
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)
  return response.json() as Promise<Post>
}
