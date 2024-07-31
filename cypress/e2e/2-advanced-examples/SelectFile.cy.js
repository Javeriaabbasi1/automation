describe('Select File functionality', () => {
     it('SelectFile', () => {
       cy.visit('https://qa-automation-practice.netlify.app/file-upload' , {headers: {"accept-encoding": "gzip, deflate"}})
       cy.get('#file_upload').selectFile('C:\\Users\\Javeria\\Desktop\\cypress automation\\cypress\\joker.jpg')
       cy.wait(2000)
       cy.get('.custom-file > .btn').click()


     })
 })