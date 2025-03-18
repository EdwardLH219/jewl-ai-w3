import '@testing-library/cypress/add-commands'

// Extend Cypress namespace
declare global {
  namespace Cypress {
    interface Chainable {
      // Add custom commands here if needed
    }
  }
}

// Add any custom commands here
// Example:
// Cypress.Commands.add('customCommand', () => { ... }) 