describe('Login functionality', () => {
    it('Verify that a user can log in with valid credentials', () => {
      cy.visit('https://nexa-enterprise-platform.web.app/authentication/sign-in')
      cy.get("input[id=':r0:']").type('ahsanlive@gmail.com')
      cy.get("input[id=':r1:']").type('12345678')
      cy.get('.css-1id64jh > .MuiButtonBase-root').click()
    })
    it(' Verify that an error message is displayed for an invalid email', () => {
      cy.visit('https://nexa-enterprise-platform.web.app/authentication/sign-in')
      cy.get("input[id=':r0:']").type('ahsanlivegmail.com')
      cy.get("input[id=':r1:']").type('12345678')
      cy.get('.css-1id64jh > .MuiButtonBase-root').click()
    })
    it(' Verify that an error message is displayed for an invalid password', () => {
      cy.visit('https://nexa-enterprise-platform.web.app/authentication/sign-in')
      cy.get("input[id=':r0:']").type('ahsanlive@gmail.com')
      cy.get("input[id=':r1:']").type('1234567')
      cy.get('.css-1id64jh > .MuiButtonBase-root').click()
    })
    it(' Verify that an error message is displayed when both fields are empty', () => {
      cy.visit('https://nexa-enterprise-platform.web.app/authentication/sign-in')
      cy.get('button[type="submit"]').click();
      cy.get(".MuiTypography-root > p").should("have.text", "Email is requiredPassword is required")
      //cy.get(".MuiTypography-root > p").should("have.text", "Password is required")
    })
    it(' Verify that an error message is displayed when email fields left empty without clicking on login btn', () => {
      cy.visit('https://nexa-enterprise-platform.web.app/authentication/sign-in')
      cy.get("input[id=':r0:']").type(' ')
      cy.get("input[id=':r1:']").type('12345678')
      cy.get(".MuiTypography-root > p").should("have.text", "Email is required")
    })
    it('Remember me Checkbox functionality', () => {
      cy.visit('https://nexa-enterprise-platform.web.app/authentication/sign-in')
      cy.get('.PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3').check()

    })
    it.only('Successfully logout', () => {
      cy.visit('https://nexa-enterprise-platform.web.app/authentication/sign-in')
      cy.get("input[id=':r0:']").type('Yo12@gmail.com')
      cy.get("input[id=':r1:']").type('12345678')
      cy.get('.css-1id64jh > .MuiButtonBase-root').click()
      cy.wait(5000)
      cy.get('.css-1ghcb7i > .material-icons-round').click()
      cy.wait(3000)
      cy.get(':nth-child(3) > .MuiBox-root > .MuiTypography-button').click()
      

    })
  })
    
      
    