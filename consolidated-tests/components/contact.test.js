import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactSection from '@/components/ContactSection';

describe('Contact Section', () => {
  beforeEach(() => {
    // Mock console.log to verify form submission
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore console.log
    console.log.mockRestore();
  });

  it('renders the contact form with all fields', () => {
    render(<ContactSection />);
    
    // Check for heading
    expect(screen.getByRole('heading', { name: /get early access/i, level: 2 })).toBeInTheDocument();
    
    // Check for form fields
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/how would you use jewl\?/i)).toBeInTheDocument();
    
    // Check for submit button
    expect(screen.getByRole('button', { name: /request access/i })).toBeInTheDocument();
  });
  
  it('allows filling out the form fields', () => {
    render(<ContactSection />);
    
    // Get form inputs
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/how would you use jewl\?/i);
    
    // Fill out the form
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'This is a test message' } });
    
    // Verify values were updated
    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(messageInput.value).toBe('This is a test message');
  });
  
  it('submits the form data and shows thank you message', async () => {
    render(<ContactSection />);
    
    // Get form inputs and button
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/how would you use jewl\?/i);
    const submitButton = screen.getByRole('button', { name: /request access/i });
    
    // Fill out the form
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'This is a test message' } });
    
    // Submit the form
    fireEvent.click(submitButton);
    
    // Verify form data was logged (our mock submission)
    expect(console.log).toHaveBeenCalledWith('Form submitted:', {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a test message'
    });
    
    // Wait for the simulated API delay and thank you message to appear
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /thank you!/i })).toBeInTheDocument();
      expect(screen.getByText(/your request for early access has been received/i)).toBeInTheDocument();
    }, { timeout: 2000 }); // Increase timeout to account for the 1s delay
    
    // Form should be hidden
    expect(screen.queryByLabelText(/name/i)).not.toBeInTheDocument();
  });
}); 