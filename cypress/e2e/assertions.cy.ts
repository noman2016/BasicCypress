import { should } from "chai"

it('Learning assertions',function(){

    cy.visit('https://example.cypress.io/')

    cy.contains('get').click()

// Implicit assertions

    //cy.get('#query-btn',{timeout:6000})  //By default it's -> 4000ms
    //    .should('contain','Button1')
    cy.get('#query-btn')
        .should('contain','Button')
        .should('have.class','query-btn') //have.text, have.html
        .should('be.visible')
        .should('be.enabled')
        //.should('be.disabled')

    cy.get('#query-btn').invoke('attr','id')
        .should('equal','query-btn')

    cy.get('#query-btn')
        .should('contain','Button')
        .and('have.class','query-btn')  //chained assertion

    // Explicit assertions
    // expect

    expect(true).to.be.true
    //expect(true).to.be.false    

    let name ='Noman'
    expect(name).to.be.equal('Noman')   // let name ='cypress'; expect(name).to.be.equal('cypress')
    // to.not.equal()
    // to.be.a('string')
    // to.be.true
    // to.be.false
    // to.be.null
    // to.exist

    // assert

    assert.equal(4, 4, 'Not Equal')

    // assert.equal(4, 5, 'Not Equal')

    // assert.strictEqual(4, '4', 'Not Strictly Equal')


})