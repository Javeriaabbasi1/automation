describe('static dropdown functionality', () => {
    it('Login', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.get('form > :nth-child(2) > .input').type('Johndoe2') 
      cy.get(':nth-child(4) > .input').type('jd123456')       
      cy.get(':nth-child(5) > .button').click()
      cy.get('#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a').click()
      cy.get('#month').select(11)
      cy.get('#month').select('May')
      cy.get('#month').select('March')
    })
})