describe('Checkboxes and radiobuttons functionality', () => {
    it('Checkbox', () => {
      cy.visit('https://qa-automation-practice.netlify.app/checkboxes' , {headers: {"accept-encoding": "gzip, deflate"}})
  cy.get('#checkbox2').check()
  cy.wait(1000)
cy.get('#checkbox3').check()
  //cy.get('.form-group > .btn').click()
  

      //cy.get('#BE_flight_origin_city').click().clear().type("NEW")
    })
})
        it('radio button', () => {
          cy.visit('https://qa-automation-practice.netlify.app/radiobuttons' , {headers: {"accept-encoding": "gzip, deflate"}})
          cy.get('#radio-button1').check()
          cy.get('#radio-button2').check()
})
    
