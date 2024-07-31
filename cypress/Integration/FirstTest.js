describe('My First suite', () => {
    it('Verify the title of the website', () => {
      cy.visit('https://ship-my-stuff-staging.web.app/')
      cy.title().should('eq','Ship My Stuff')
    })
  })