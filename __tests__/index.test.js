import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home page', () => {
  beforeEach(() => {
    render(<Home />);
  });
  
  it('renders the welcome heading', () => {
    const heading = screen.getByRole('heading', {
      name: /access company jewels instantly/i,
    });
    
    expect(heading).toBeInTheDocument();
  });
  
  it('renders the Features section with heading', () => {
    const featuresHeading = screen.getByRole('heading', { 
      name: /key features/i,
      level: 2 
    });
    
    expect(featuresHeading).toBeInTheDocument();
  });
  
  it('displays feature sections with their headings', () => {
    // Check for feature headings
    const aiSearchHeading = screen.getByRole('heading', { 
      name: /ai-powered search/i 
    });
    
    const documentRetrievalHeading = screen.getByRole('heading', { 
      name: /document retrieval/i 
    });
    
    const aiInsightsHeading = screen.getByRole('heading', { 
      name: /ai-generated insights/i 
    });
    
    expect(aiSearchHeading).toBeInTheDocument();
    expect(documentRetrievalHeading).toBeInTheDocument();
    expect(aiInsightsHeading).toBeInTheDocument();
  });
  
  it('displays the "Why choose jewl.ai?" section', () => {
    const whyChooseHeading = screen.getByRole('heading', { 
      name: /why choose jewl\.ai/i 
    });
    
    expect(whyChooseHeading).toBeInTheDocument();
    
    // Check for the benefit headings
    const lightningFastHeading = screen.getByRole('heading', { 
      name: /lightning fast/i 
    });
    
    const secureHeading = screen.getByRole('heading', { 
      name: /secure & private/i 
    });
    
    const intelligentHeading = screen.getByRole('heading', { 
      name: /intelligent insights/i 
    });
    
    expect(lightningFastHeading).toBeInTheDocument();
    expect(secureHeading).toBeInTheDocument();
    expect(intelligentHeading).toBeInTheDocument();
  });
  
  it('displays the contact section with heading', () => {
    const contactHeading = screen.getByRole('heading', {
      name: /get early access/i,
      level: 2
    });
    
    expect(contactHeading).toBeInTheDocument();
  });
}); 