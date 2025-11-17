import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Counter from './Counter'

describe('Counter', () => {
  it('renders with default initial count of 0', () => {
    render(<Counter />)
    expect(screen.getByText(/Current Count:/i)).toBeInTheDocument()
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('renders with custom initial count', () => {
    render(<Counter initialCount={10} />)
    expect(screen.getByText('10')).toBeInTheDocument()
  })

  it('increments count when + button is clicked', () => {
    render(<Counter />)
    const incrementButton = screen.getByRole('button', { name: '+' })

    fireEvent.click(incrementButton)
    expect(screen.getByText('1')).toBeInTheDocument()

    fireEvent.click(incrementButton)
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('decrements count when - button is clicked', () => {
    render(<Counter initialCount={5} />)
    const decrementButton = screen.getByRole('button', { name: '-' })

    fireEvent.click(decrementButton)
    expect(screen.getByText('4')).toBeInTheDocument()

    fireEvent.click(decrementButton)
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('resets count to initial value when Reset button is clicked', () => {
    render(<Counter initialCount={5} />)
    const incrementButton = screen.getByRole('button', { name: '+' })
    const resetButton = screen.getByRole('button', { name: /reset/i })

    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)
    expect(screen.getByText('7')).toBeInTheDocument()

    fireEvent.click(resetButton)
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('can handle negative numbers', () => {
    render(<Counter />)
    const decrementButton = screen.getByRole('button', { name: '-' })

    fireEvent.click(decrementButton)
    expect(screen.getByText('-1')).toBeInTheDocument()
  })
})
