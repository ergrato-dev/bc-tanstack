import { describe, it, expect } from 'vitest'
import { formatCurrency } from './formatCurrency'

describe('formatCurrency', () => {
  it('formatea un precio en USD por defecto', () => {
    expect(formatCurrency(1234.5)).toBe('$1,234.50')
  })

  it('formatea en EUR cuando se indica la moneda', () => {
    expect(formatCurrency(100, 'EUR')).toContain('€')
  })

  it('maneja valores negativos (descuentos)', () => {
    expect(formatCurrency(-20)).toBe('-$20.00')
  })

  it('maneja cero', () => {
    expect(formatCurrency(0)).toBe('$0.00')
  })
})
