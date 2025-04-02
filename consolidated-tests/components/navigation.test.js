import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Layout from '@/components/Layout';

// Mock window.matchMedia for desktop viewport
window.matchMedia = jest.fn().mockImplementation(query => ({
  matches: !query.includes('max-width: 768px'), // Simulates desktop
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));

describe('Navigation', () => {
  beforeEach(() => {
    // Render the layout before each test
    render(
      <Layout>
        <div>Test content</div>
      </Layout>
    );
  });
  
  it('renders all navigation links', () => {
    // Find all navigation elements (desktop navigation)
    const navigation = screen.getAllByRole('navigation')[0]; // Get the desktop nav
    // Find all links inside the navigation element (excluding dropdown content)
    const headerLinks = navigation.querySelectorAll(':scope > ul > li > a, :scope > ul > li > button');
    
    // Check that we have the right number of links (Features, Use Cases, Integrations, Contact)
    expect(headerLinks.length).toBe(4);
    
    // Check that the links have the right text
    expect(headerLinks[0].textContent).toBe('Features');
    expect(headerLinks[1].textContent).toBe('Use Cases');
    expect(headerLinks[2].textContent).toContain('Integrations');
    expect(headerLinks[3].textContent).toBe('Contact');
  });
  
  it('has correct href attributes for anchor links', () => {
    // Find the navigation element (desktop navigation)
    const navigation = screen.getAllByRole('navigation')[0]; // Get the desktop nav
    // Find all anchor links inside the navigation element
    const headerLinks = navigation.querySelectorAll(':scope > ul > li > a');
    
    // Check they point to the right sections
    expect(headerLinks[0]).toHaveAttribute('href', '#features');
    expect(headerLinks[1]).toHaveAttribute('href', '#use-cases');
    expect(headerLinks[2]).toHaveAttribute('href', '#contact');
  });
  
  // For a more complete test, you could use jest-dom to mock window.location
  // and verify that clicking a link would scroll to the right section,
  // but that's beyond the scope of this simple test
}); 