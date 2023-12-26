/// <reference types="cypress" />
import { LeyaHomepage } from "../support/pages/leyaHomepage.spec"
import { CartPage } from "../support/pages/cartPage.spec";

let leyapage = new LeyaHomepage();
let cartpage = new CartPage();

// Scenario 7:
//Given The user adds an object to the cart
//When The user deletes the object from the cart
//Then The user validates the cart is empty
it(("Add book to the cart and remove it"), ()=>{
    leyapage.search("A Nossa Cozinha");
    cy.get("section.search-contents-sec section.similar-books div.container div.book-card-container div.book-card a.second div.single-book-details > h6.book-title")
          .contains("A Nossa Cozinha").should('be.visible');
    leyapage.addBookToCart("A Nossa Cozinha");
    leyapage.deleteItemFromCart();
    cy.get("#dropdownMenuButton100").click()
    cy.get('#atc-dropdown div').invoke('text').then((text => {
        expect(text).to.contain("Carrinho vazio");
    }))

})