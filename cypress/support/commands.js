Cypress.Commands.add('OpenLeyaPage', () => {
    cy.viewport(1220, 900);
    cy.visit('/');
    cy.clearAllCookies();
    cy.url().should('include', 'leyaonline.com')
})

Cypress.Commands.add('validateElementText', (value, locator) => {
        cy.get(locator, {timeout: 10000}).should('be.visible');
        cy.get(locator).invoke('text').then((text => {
            expect(text).to.contain(value);
        }))
 })

beforeEach(() => {
    cy.OpenLeyaPage()
})