Cypress.Commands.add('OpenLeyaPage', () => {
    cy.viewport(1220, 900);
    cy.visit('https://www.leyaonline.com/pt/');
    cy.clearAllCookies();
    cy.url().should('include', 'leyaonline.com')
})

beforeEach(() => {
    cy.OpenLeyaPage()
})