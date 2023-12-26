/// <reference types="cypress" />

it (("Change the background to dark mode"), ()=>{
    cy.get('#darkmode').click()
    cy.get('[data-role="darktheme"]').should('not.be.disabled')
})