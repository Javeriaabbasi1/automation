/*describe('My First suite', () => {
    it('Verify the title of the website', () => {
      cy.visit('https://ship-my-stuff-staging.web.app/')
      cy.title().should('eq','Ship My Stuff')
    })
    describe('My First suite', () => {
      it('Verify the title of the website', () => {
        cy.visit('https://ship-my-stuff-staging.web.app/')
        cy.title().should('eq','hello ship')
      })
    })
  })*/
  // cypress/integration/login_spec.js

describe('Registeration functionality', () => {
  it('Register new user', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  /*  cy.get('#loginPanel > :nth-child(3) > a').click()
    cy.get("input[id='customer.firstName']").type('mohn')
    cy.get("input[id='customer.lastName']").type('doe')
    cy.get("input[id='customer.address.street']").type('street31')
    cy.get("input[id='customer.address.city']").type('johannesburg')
    cy.get("input[id='customer.address.state']").type('Southafrica')
    cy.get("input[id='customer.address.zipCode']").type('1724')
    cy.get("input[id='customer.phoneNumber']").type('12334578001')
    cy.get("input[id='customer.ssn']").type('1111111')
    cy.get("input[id='customer.username']").type('Johndoe2')
    cy.get("input[id='customer.password']").type('jd123456')
    cy.get('#repeatedPassword').type('jd123456')
    cy.get('[colspan="2"] > .button').click() */
    cy.scrollTo('bottom')
    cy.wait(3000)
    cy.scrollTo('top')
  })

  /* it('should show validation messages for empty username and password', () => {
    cy.get('form > :nth-child(5)').click();
    cy.get('.error').should('contain', 'Please enter a username and password.');
    cy.get('.password-error').should('contain', 'Password is required');*/
  });

