import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '@/components/Layout';

describe('Layout component', () => {
  it('renders header with logo', () => {
    render(
      <Layout>
        <div>Test content</div>
      </Layout>
    );
    
    // Check that the header logo image is present
    const headerLogo = screen.getAllByAltText('jewl.ai logo')[0];
    expect(headerLogo).toBeInTheDocument();
    expect(headerLogo).toHaveAttribute('src', '/logo-black.png');
  });
  
  it('renders footer with copyright text', () => {
    render(
      <Layout>
        <div>Test content</div>
      </Layout>
    );
    
    // Check for copyright text
    const date = new Date();
    const currentYear = date.getFullYear();
    const copyrightText = screen.getByText(
      new RegExp(`© ${currentYear} jewl\\.ai\\. All rights reserved\\.`, 'i')
    );
    expect(copyrightText).toBeInTheDocument();
    
    // Check that the footer logo image is present
    const footerLogo = screen.getAllByAltText('jewl.ai logo')[1];
    expect(footerLogo).toBeInTheDocument();
    expect(footerLogo).toHaveAttribute('src', '/logo-white.png');
  });
  
  it('renders children content', () => {
    const testContent = 'Test child content';
    render(
      <Layout>
        <div>{testContent}</div>
      </Layout>
    );
    
    const content = screen.getByText(testContent);
    expect(content).toBeInTheDocument();
  });
}); 