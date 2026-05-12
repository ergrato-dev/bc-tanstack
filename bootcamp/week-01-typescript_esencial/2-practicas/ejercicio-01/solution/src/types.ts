// Solución completa — Ejercicio 01
// NO compartir con otros aprendices antes de que completen el ejercicio

export interface Book {
  id: number
  title: string
  author: string
  year: number
  available: boolean
}

export interface Member {
  id: number
  name: string
  email: string
}

export type LoanStatus = 'active' | 'returned' | 'overdue'

export type ApiResponse<T> =
  | { data: T; status: 'ok' }
  | { error: string; status: 'error' }

export interface Loan {
  id: number
  bookId: number
  memberId: number
  loanDate: Date
  dueDate: Date
  status: LoanStatus
}

export interface LoanWithDetails extends Loan {
  book: Book
  member: Member
}

export function createLoan(bookId: number, memberId: number): Loan {
  const now = new Date()
  const due = new Date(now)
  due.setDate(due.getDate() + 14)

  return {
    id: Math.random(),
    bookId,
    memberId,
    loanDate: now,
    dueDate: due,
    status: 'active',
  }
}
