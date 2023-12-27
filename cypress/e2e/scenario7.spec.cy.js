/// <reference types="cypress" />
import { LeyaHomepage } from "../support/pages/leyaHomepage.spec"

let leyapage = new LeyaHomepage();

let book_title = "section.search-contents-sec section.similar-books div.container div.book-card-container div.book-card a.second div.single-book-details > h6.book-title";
let cart_button = "#dropdownMenuButton100";
let cart_modal = "#atc-dropdown div";

// Scenario 7:
//Given The user adds an object to the cart
//When The user deletes the object from the cart
//Then The user validates the cart is empty
it(("Add book to the cart and remove it"), ()=>{
    leyapage.search("A Nossa Cozinha");
    cy.get(book_title).contains("A Nossa Cozinha").should('be.visible');
    leyapage.addBookToCart("A Nossa Cozinha");
    leyapage.deleteItemFromCart();
    cy.get(cart_button).click();
    cy.get(cart_modal).invoke('text').then((text => {
        expect(text).to.contain("Carrinho vazio");
    }))

})