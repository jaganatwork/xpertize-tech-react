import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />)
    expect(screen.getByText('Xpertize Tech React')).toBeInTheDocument()
  })

  it('displays the initial count', () => {
    render(<App />)
    expect(screen.getByText(/count is 0/i)).toBeInTheDocument()
  })

  it('increments count when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })

    fireEvent.click(button)
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument()

    fireEvent.click(button)
    expect(screen.getByText(/count is 2/i)).toBeInTheDocument()
  })

  it('displays feature list', () => {
    render(<App />)
    expect(screen.getByText(/Vite \+ React \+ TypeScript/i)).toBeInTheDocument()
    expect(screen.getByText(/Vitest \+ Testing Library/i)).toBeInTheDocument()
    expect(screen.getByText(/ESLint \+ Prettier/i)).toBeInTheDocument()
  })
})
