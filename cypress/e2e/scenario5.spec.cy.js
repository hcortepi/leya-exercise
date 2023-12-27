/// <reference types="cypress" />

let dark_mode_button = "#darkmode";
let dark_theme_applied = "[data-role='darktheme']";

it (("Change the background to dark mode"), ()=>{
    cy.get(dark_mode_button).click();
    cy.get(dark_theme_applied).should('not.be.disabled');
})