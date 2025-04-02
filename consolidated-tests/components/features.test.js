import React from 'react';
import { render, screen } from '@testing-library/react';
import Features from '@/components/Features';

describe('Features component', () => {
  beforeEach(() => {
    render(<Features />);
  });
  
  it('renders the features section with heading', () => {
    const heading = screen.getByRole('heading', { name: /key features/i, level: 2 });
    expect(heading).toBeInTheDocument();
  });
  
  it('displays all key features', () => {
    // Check for the three main feature headings
    const aiSearchHeading = screen.getByRole('heading', { name: /ai-powered search/i });
    const documentRetrievalHeading = screen.getByRole('heading', { name: /document retrieval/i });
    const aiInsightsHeading = screen.getByRole('heading', { name: /ai-generated insights/i });
    
    expect(aiSearchHeading).toBeInTheDocument();
    expect(documentRetrievalHeading).toBeInTheDocument();
    expect(aiInsightsHeading).toBeInTheDocument();
  });
  
  it('includes descriptions for each feature', () => {
    // Check for the presence of key phrases in the descriptions
    expect(screen.getByText(/our intelligent search engine/i)).toBeInTheDocument();
    expect(screen.getByText(/find and access your documents quickly/i)).toBeInTheDocument();
    expect(screen.getByText(/go beyond simple document retrieval/i)).toBeInTheDocument();
  });
}); 