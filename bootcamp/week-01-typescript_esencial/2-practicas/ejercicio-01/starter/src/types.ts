// ============================================
// EJERCICIO 01 — API REST Tipada
// Semana 01 — TypeScript Esencial
// ============================================
//
// Instrucciones:
//   Descomentar cada bloque en orden.
//   Verifica después de cada bloque con: pnpm typecheck
// ============================================

// ── PASO 1: Interfaces básicas ────────────────────────────────────────────────
// Descomenta las siguientes líneas:

// export interface Book {
//   id: number
//   title: string
//   author: string
//   year: number
//   available: boolean
// }

// export interface Member {
//   id: number
//   name: string
//   email: string
// }

// ── PASO 2: Type aliases con uniones ─────────────────────────────────────────
// Descomenta las siguientes líneas:

// export type LoanStatus = 'active' | 'returned' | 'overdue'

// export type ApiResponse<T> =
//   | { data: T; status: 'ok' }
//   | { error: string; status: 'error' }

// ── PASO 3: Interface con extends ────────────────────────────────────────────
// Descomenta las siguientes líneas:

// export interface Loan {
//   id: number
//   bookId: number
//   memberId: number
//   loanDate: Date
//   dueDate: Date
//   status: LoanStatus
// }

// export interface LoanWithDetails extends Loan {
//   book: Book
//   member: Member
// }

// ── PASO 4: Función tipada ───────────────────────────────────────────────────
// Descomenta las siguientes líneas:

// export function createLoan(
//   bookId: number,
//   memberId: number
// ): Loan {
//   const now = new Date()
//   const due = new Date(now)
//   due.setDate(due.getDate() + 14) // 14 días
//
//   return {
//     id: Math.random(),
//     bookId,
//     memberId,
//     loanDate: now,
//     dueDate: due,
//     status: 'active',
//   }
// }
