// ============================================
// PROYECTO SEMANAL: Sistema de Gestión
// Semana 01 — TypeScript Esencial
// ============================================
//
// NOTA PARA EL APRENDIZ:
// Adapta este esquema a tu dominio asignado (ver docs/dominios.md).
// Renombra las entidades y campos según tu dominio.
//
// Ejemplos:
//   Biblioteca    → Book, Member, Loan, LoanStatus
//   Clínica vet   → Pet, Owner, Appointment, AppointmentStatus
//   E-commerce    → Product, Order, Customer, OrderStatus
//   Marina        → Boat, Berth, Owner, ServiceStatus

// ── TODO: Definir las interfaces principales de tu dominio ────────────────────
// Mínimo 3 interfaces, cada una con al menos 4 campos tipados correctamente.
// Usa `readonly` donde el dato no deba cambiar (ej. id, createdAt).
// Usa `?` para campos opcionales.

// interface EntidadPrincipal { ... }
// interface EntidadSecundaria { ... }
// interface EntidadTerciaria { ... }

// ── TODO: Definir un type alias con unión discriminante ───────────────────────
// Ejemplo: type Status = 'active' | 'inactive' | 'pending'
// Úsalo en al menos una de tus interfaces.

// ── TODO: Definir un tipo genérico reutilizable ───────────────────────────────
// Ejemplo: PaginatedResponse<T>, ApiResponse<T>, ListResult<T>

// ── TODO: Aplicar al menos 2 utility types ────────────────────────────────────
// Ejemplos:
//   type CreateInput = Omit<EntidadPrincipal, 'id' | 'createdAt'>
//   type UpdateInput = Partial<Pick<EntidadPrincipal, 'campo1' | 'campo2'>>
//   type Filters = Partial<EntidadPrincipal>

// ── TODO: Usar satisfies en una configuración ─────────────────────────────────
// Ejemplo:
//   const config = {
//     pageSize: 10,
//     sortBy: 'name',
//   } satisfies Record<string, string | number>
