/// <reference types="@testing-library/jest-dom" />
import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from 'react'
import { expect } from '@jest/globals'
// @ts-ignore
import ContactSection from '@/components/ContactSection'

describe('ContactSection', () => {
  it('renders the contact form', () => {
    render(<ContactSection />)
    expect(screen.getByText(/get early access/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/how would you use jewl\?/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /request access/i })).toBeInTheDocument()
  })

  it('validates form fields on submission', async () => {
    render(<ContactSection />)
    const submitButton = screen.getByRole('button', { name: /request access/i })

    await act(async () => {
      fireEvent.click(submitButton)
      jest.runAllTimers()
    })

    // Check for validation errors from the browser's built-in form validation
    const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement
    const messageInput = screen.getByLabelText(/how would you use jewl\?/i) as HTMLTextAreaElement

    expect(nameInput.validity.valid).toBe(false)
    expect(emailInput.validity.valid).toBe(false)
    expect(messageInput.validity.valid).toBe(false)
  })

  it('validates email format', async () => {
    render(<ContactSection />)
    const nameInput = screen.getByLabelText(/name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/how would you use jewl\?/i)
    const submitButton = screen.getByRole('button', { name: /request access/i })

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: 'John Doe' } })
      fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
      fireEvent.change(messageInput, { target: { value: 'Test message' } })
      fireEvent.click(submitButton)
      jest.runAllTimers()
    })

    // Check for email validation from the browser's built-in form validation
    expect((emailInput as HTMLInputElement).validity.valid).toBe(false)
    expect((emailInput as HTMLInputElement).validity.typeMismatch).toBe(true)
  })

  it('shows success message on valid submission', async () => {
    render(<ContactSection />)
    const nameInput = screen.getByLabelText(/name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/how would you use jewl\?/i)
    const submitButton = screen.getByRole('button', { name: /request access/i })

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: 'John Doe' } })
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
      fireEvent.change(messageInput, { target: { value: 'Test message' } })
      fireEvent.click(submitButton)
      jest.runAllTimers()
    })

    // We need to wait longer since there's a setTimeout in the component
    await waitFor(() => {
      expect(screen.getByText(/thank you!/i)).toBeInTheDocument()
      expect(screen.getByText(/your request for early access has been received/i)).toBeInTheDocument()
    }, { timeout: 2000 })
  })
}) 