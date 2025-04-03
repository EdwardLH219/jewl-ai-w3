import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';  // Add this import for the matchers
import Layout from '@/components/Layout';

// Mock window.matchMedia for responsive design testing
window.matchMedia = jest.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));

describe('Integration Menu Modals', () => {
  beforeEach(() => {
    render(
      <Layout>
        <div>Test content</div>
      </Layout>
    );
  });

  it('opens Google Docs modal when clicking the menu item', () => {
    // Find and click the Integrations dropdown trigger
    const integrationsButton = screen.getByText('Integrations');
    fireEvent.click(integrationsButton);

    // Find and click the Google Docs menu item
    const googleDocsItem = screen.getByText('Google Docs');
    fireEvent.click(googleDocsItem);

    // Check if modal appears with correct title
    const modalTitle = screen.getByText('Connect with Google Docs');
    expect(modalTitle).toBeInTheDocument();

    // Check if modal content appears
    const modalContent = screen.getByText('Connect your Google account to use Jewl with your Google Docs.');
    expect(modalContent).toBeInTheDocument();
  });

  it('closes modal when clicking the close button', () => {
    // Open the modal first
    const integrationsButton = screen.getByText('Integrations');
    fireEvent.click(integrationsButton);
    const googleDocsItem = screen.getByText('Google Docs');
    fireEvent.click(googleDocsItem);

    // Find and click the close button
    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);

    // Check if modal is closed
    const modalTitle = screen.queryByText('Connect with Google Docs');
    expect(modalTitle).not.toBeInTheDocument();
  });

  it('opens Slack modal when clicking the menu item', () => {
    // Find and click the Integrations dropdown trigger
    const integrationsButton = screen.getByText('Integrations');
    fireEvent.click(integrationsButton);

    // Find and click the Slack menu item
    const slackItem = screen.getByText('Slack');
    fireEvent.click(slackItem);

    // Check if modal appears with correct title
    const modalTitle = screen.getByText('Connect with Slack');
    expect(modalTitle).toBeInTheDocument();

    // Check if modal content appears
    const modalContent = screen.getByText('Add Jewl to your Slack workspace.');
    expect(modalContent).toBeInTheDocument();
  });

  it('opens modal from mobile menu', () => {
    // Mock mobile viewport
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

    // Open mobile menu
    const hamburgerButton = screen.getByTestId('hamburger-button');
    fireEvent.click(hamburgerButton);

    // Open integrations section
    const integrationsButton = screen.getByText('Integrations');
    fireEvent.click(integrationsButton);

    // Click Discord integration
    const discordItem = screen.getByText('Discord');
    fireEvent.click(discordItem);

    // Check if modal appears with correct title
    const modalTitle = screen.getByText('Connect with Discord');
    expect(modalTitle).toBeInTheDocument();

    // Check if modal content appears
    const modalContent = screen.getByText('Add Jewl to your Discord server.');
    expect(modalContent).toBeInTheDocument();
  });
}); 