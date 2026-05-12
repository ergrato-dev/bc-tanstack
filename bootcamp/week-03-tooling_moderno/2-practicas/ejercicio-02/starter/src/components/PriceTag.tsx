import { formatCurrency } from '../utils/formatCurrency'

interface Props {
  amount: number
  currency?: string
  discount?: number
}

// Componente que muestra un precio con etiqueta de descuento opcional
export function PriceTag({ amount, currency = 'USD', discount }: Props) {
  const hasDiscount = discount !== undefined && discount > 0
  const finalAmount = hasDiscount ? amount - discount : amount

  return (
    <div>
      <span data-testid="price">{formatCurrency(finalAmount, currency)}</span>
      {hasDiscount && (
        <span data-testid="discount" style={{ color: '#EF4444', marginLeft: '0.5rem' }}>
          -{formatCurrency(discount, currency)}
        </span>
      )}
    </div>
  )
}
