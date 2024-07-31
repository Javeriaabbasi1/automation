describe('dynamic dropdown functionality', () => {
    it('Dynamic', () => {
      cy.visit('https://www.yatra.com' , {headers: {"accept-encoding": "gzip, deflate"}})
   cy.get('#BE_flight_origin_city').click().clear().type("NEW")
    })
})