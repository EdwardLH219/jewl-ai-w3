import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { act } from 'react'
// @ts-ignore
import ContactSection from '@/components/ContactSection'

describe('ContactSection', () => {
  it('renders the contact form', () => {
    render(<ContactSection />)
    expect(screen.getByText(/get early access/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/how would you use jewl\.ai\?/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /request access/i })).toBeInTheDocument()
  })

  it('validates form fields on submission', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    const submitButton = screen.getByRole('button', { name: /request access/i })

    await act(async () => {
      await user.click(submitButton)
    })

    // Check for validation errors from the browser's built-in form validation
    const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement
    const messageInput = screen.getByLabelText(/how would you use jewl\.ai\?/i) as HTMLTextAreaElement

    expect(nameInput.validity.valid).toBe(false)
    expect(emailInput.validity.valid).toBe(false)
    expect(messageInput.validity.valid).toBe(false)
  })

  it('validates email format', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    const nameInput = screen.getByLabelText(/name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/how would you use jewl\.ai\?/i)
    const submitButton = screen.getByRole('button', { name: /request access/i })

    await act(async () => {
      await user.type(nameInput, 'John Doe')
      await user.type(emailInput, 'invalid-email')
      await user.type(messageInput, 'Test message')
      await user.click(submitButton)
    })

    // Check for email validation from the browser's built-in form validation
    expect((emailInput as HTMLInputElement).validity.valid).toBe(false)
    expect((emailInput as HTMLInputElement).validity.typeMismatch).toBe(true)
  })

  it('shows success message on valid submission', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    const nameInput = screen.getByLabelText(/name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/how would you use jewl\.ai\?/i)
    const submitButton = screen.getByRole('button', { name: /request access/i })

    await act(async () => {
      await user.type(nameInput, 'John Doe')
      await user.type(emailInput, 'john@example.com')
      await user.type(messageInput, 'Test message')
      await user.click(submitButton)
    })

    // We need to wait longer since there's a setTimeout in the component
    await waitFor(() => {
      expect(screen.getByText(/thank you!/i)).toBeInTheDocument()
      expect(screen.getByText(/your request for early access has been received/i)).toBeInTheDocument()
    }, { timeout: 2000 })
  })
}) 