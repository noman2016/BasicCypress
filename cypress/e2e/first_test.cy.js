/// <reference types="cypress" />

//mocha function
it('google test', function(){

    cy.visit('https://google.com')

    cy.get('.gLFyf').type('NomanApps.com {enter}')

    cy.wait(3000)

    //cy.get('.gLFyf',{timeout:5000}).type('NomanApps.com {enter}')

    cy.get('[style="display:inline-block;line-height:18px;margin-top:8px;padding:0;font-size:13px"]').click()

    cy.wait(3000)

    //cy.get('[style="display:inline-block;line-height:18px;margin-top:8px;padding:0;font-size:13px"]',{timeout:4000}).click()

    //cy.get('[href="https://www.nomanapps.com/"] > .LC20lb',{timeout:2000}).click()

    cy.contains('Videos').click()

}) 

/*it.only('login test', function(){

    cy.visit('https://practicetestautomation.com/practice-test-login/')

    cy.get('#username').type('student')

    cy.get('#password').type('Password123')

    cy.get('#submit').click()

    cy.wait(5000)

    cy.get('.wp-block-button__link').click()
})*/