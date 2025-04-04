describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the hero section', () => {
    cy.findByRole('heading', { name: /access company jewels instantly/i }).should('be.visible')
    cy.findByText(/ai-powered document assistant/i).should('be.visible')
  })

  it('displays feature cards', () => {
    cy.findAllByRole('article').should('have.length', 3)
    cy.findByText(/intelligent document analysis/i).should('be.visible')
    cy.findByText(/seamless integration/i).should('be.visible')
    cy.findByText(/secure and private/i).should('be.visible')
  })

  it('has a working contact form', () => {
    cy.findByRole('heading', { name: /get in touch/i }).should('be.visible')
    
    // Fill out the contact form
    cy.findByLabelText(/name/i).type('Test User')
    cy.findByLabelText(/email/i).type('test@example.com')
    cy.findByLabelText(/message/i).type('This is a test message')
    
    // Submit the form
    cy.findByRole('button', { name: /send message/i }).click()
    
    // Check for success message
    cy.findByText(/thank you for your message/i).should('be.visible')
  })

  it('has proper navigation', () => {
    // Check navigation links
    cy.findByRole('link', { name: /features/i }).click()
    cy.url().should('include', '#features')
    
    cy.findByRole('link', { name: /contact/i }).click()
    cy.url().should('include', '#contact')
  })
}) 