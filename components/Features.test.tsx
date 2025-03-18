import React from 'react'
import { render, screen } from '@testing-library/react'
import Features from './Features'

describe('Features', () => {
  it('renders all feature cards', () => {
    render(<Features />)
    
    // Test for feature headings
    expect(screen.getByText("AI-powered Search")).toBeInTheDocument()
    expect(screen.getByText("Document Retrieval")).toBeInTheDocument()
    expect(screen.getByText("AI-generated Insights")).toBeInTheDocument()
    
    // Test for feature descriptions
    expect(screen.getByText(/intelligent search engine/i)).toBeInTheDocument()
    expect(screen.getByText(/smart filtering capabilities/i)).toBeInTheDocument()
    expect(screen.getByText(/powerful analysis tools/i)).toBeInTheDocument()
  })

  it('renders feature cards with icons', () => {
    render(<Features />)
    
    // Test that all feature cards have icons
    const featureCards = screen.getAllByTestId('feature-card')
    featureCards.forEach(card => {
      expect(card.querySelector('svg')).toBeInTheDocument()
    })
  })

  it('renders with correct accessibility attributes', () => {
    render(<Features />)
    
    // Test that the section has a features id
    const featuresSection = document.getElementById('features')
    expect(featuresSection).toBeInTheDocument()
    
    // Test for the main heading
    expect(screen.getByText('Key Features')).toBeInTheDocument()
  })
}) 