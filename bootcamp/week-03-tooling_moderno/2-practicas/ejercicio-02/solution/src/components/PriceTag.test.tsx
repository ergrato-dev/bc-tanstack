import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PriceTag } from './PriceTag'

describe('PriceTag', () => {
  it('muestra el precio formateado en USD', () => {
    render(<PriceTag amount={99.99} />)
    expect(screen.getByTestId('price')).toHaveTextContent('$99.99')
  })

  it('muestra el precio en EUR cuando se indica', () => {
    render(<PriceTag amount={50} currency="EUR" />)
    const price = screen.getByTestId('price')
    expect(price.textContent).toContain('€')
  })

  it('muestra la etiqueta de descuento cuando hay descuento', () => {
    render(<PriceTag amount={100} discount={20} />)
    expect(screen.getByTestId('discount')).toBeInTheDocument()
    expect(screen.getByTestId('price')).toHaveTextContent('$80.00')
  })

  it('no muestra etiqueta de descuento si no hay descuento', () => {
    render(<PriceTag amount={100} />)
    expect(screen.queryByTestId('discount')).not.toBeInTheDocument()
  })
})
