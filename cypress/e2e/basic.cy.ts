it('google search page test', function(){

    cy.visit('https://www.google.com/')
    cy.get('[name="q"]')
        .type('NomanApps')
            .type('{enter}')

})