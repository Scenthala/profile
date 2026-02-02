import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from '../components/Hero'
import About from '../components/About'

describe('Hero component', () => {
  it('renders name and bio', () => {
    render(<Hero />)
    expect(screen.getByText(/Srini/)).toBeInTheDocument()
    expect(screen.getByText(/Get in Touch/)).toBeInTheDocument()
    expect(screen.getByText(/View Experience/)).toBeInTheDocument()
  })

  it('renders stats', () => {
    render(<Hero />)
    expect(screen.getByText('25+')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
  })

  it('renders client badges', () => {
    render(<Hero />)
    expect(screen.getByText('AT&T')).toBeInTheDocument()
    expect(screen.getByText('Walmart')).toBeInTheDocument()
  })

  it('has resume download link', () => {
    render(<Hero />)
    const resumeLink = screen.getByText(/Resume/)
    expect(resumeLink.closest('a')).toHaveAttribute('href', '/Srini_Centhala_Resume.pdf')
    expect(resumeLink.closest('a')).toHaveAttribute('download')
  })
})

describe('About component', () => {
  it('renders section title', () => {
    render(<About />)
    expect(screen.getByText('What I Do')).toBeInTheDocument()
  })
})
