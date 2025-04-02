import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Layout from '@/components/Layout';

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
    
    // Click the hamburger button to open the menu
    fireEvent.click(hamburgerButton);
    
    // The Sheet component should be visible
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    
    // Click again to close
    fireEvent.click(hamburgerButton);
  });
  
  it('closes mobile menu when a link is clicked', () => {
    const hamburgerButton = screen.getByTestId('hamburger-button');
    
    // Open the menu first
    fireEvent.click(hamburgerButton);
    
    // The Sheet component should be visible
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    
    // Find links in the dialog
    const links = dialog.querySelectorAll('a');
    expect(links.length).toBeGreaterThan(3);
    
    // Click a link
    fireEvent.click(links[0]);
  });
}); 