
describe('Cypress Practice', () => {
    it('visit the URL', () => {
      cy.visit('https://example.com')
    })
    it('Find an element with the ID', () => {
        cy.visit('https://example.com')
        cy.get('#submit-button')
      })
      it('Find an element containing the text ', () => {
        cy.visit('https://example.com')
        cy.contains('Login').click();
      }) 
      it('Type "Cypress Testing" into an input field', () => {
        cy.visit('https://example.com')
        cy.get('.search-box').type('Cypress Testing')
      })
      it('Wait for 5 seconds before proceeding with the next command', () => {
        cy.visit('https://example.com')
        cy.get('.search-box').type('Cypress Testing')
        cy.wait(5000)
      })
      it('Select the option "United States" from a dropdown with the ID "country', () => {
        cy.visit('https://example.com')
        cy.get('#country').select('United States')
      })
      it('Assert that the element with class "alert" contains the text "Success"', () => {
        cy.visit('https://example.com')
        cy.get('.alert').should('contains','Success')
      })
      it('Assert that the current URL', () => {
        cy.visit('https://example.com')
        cy.get('.alert').should('contains','Success')
        cy.url().should('eq', 'https://example.com/dashboard');
     })
       it('Click on a link with the text "Sign Up"', () => {
       cy.visit('https://example.com')
       cy.contains('Sign Up').click()
     })
})