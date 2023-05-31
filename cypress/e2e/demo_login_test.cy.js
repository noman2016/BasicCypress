/// <reference types="cypress" />

it('login test', function(){

    cy.visit('https://practicetestautomation.com/practice-test-login/')

    cy.get('#username').type('student')

    cy.wait(1500)

    cy.get('#password').type('Password123')

    cy.wait(1500)

    cy.get('#submit').click()

    cy.wait(4000)

    cy.get('.wp-block-button__link').click()
})