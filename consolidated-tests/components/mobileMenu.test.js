import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Layout from '../components/Layout';

// Mock window.matchMedia for responsive design testing
window.matchMedia = jest.fn().mockImplementation(query => ({
  matches: query.includes('max-width: 768px'),
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));

describe('Mobile Menu', () => {
  beforeEach(() => {
    render(
      <Layout>
        <div>Test content</div>
      </Layout>
    );
  });
  
  it('renders hamburger button on mobile', () => {
    const hamburgerButton = screen.getByTestId('hamburger-button');
    expect(hamburgerButton).toBeInTheDocument();
  });
  
  it('toggles mobile menu visibility when hamburger is clicked', () => {
    const hamburgerButton = screen.getByTestId('hamburger-button');
    const mobileMenu = screen.getByTestId('mobile-menu');
    
    // Initially, the menu should be hidden
    expect(mobileMenu).toHaveClass('max-h-0');
    
    // Click the hamburger button to open the menu
    fireEvent.click(hamburgerButton);
    expect(mobileMenu).toHaveClass('max-h-96');
    
    // Click again to close
    fireEvent.click(hamburgerButton);
    expect(mobileMenu).toHaveClass('max-h-0');
  });
  
  it('closes mobile menu when a link is clicked', () => {
    const hamburgerButton = screen.getByTestId('hamburger-button');
    const mobileMenu = screen.getByTestId('mobile-menu');
    
    // Open the menu first
    fireEvent.click(hamburgerButton);
    expect(mobileMenu).toHaveClass('max-h-96');
    
    // Find a link in the mobile menu
    const links = mobileMenu.querySelectorAll('a');
    // We now have more links due to the Integrations dropdown
    expect(links.length).toBeGreaterThan(3);
    
    // Click a link
    fireEvent.click(links[0]);
    
    // The menu should close
    expect(mobileMenu).toHaveClass('max-h-0');
  });
}); 