/// <reference types="cypress" />
import { LeyaHomepage } from "../support/pages/leyaHomepage.spec"
import { CartPage } from "../support/pages/cartPage.spec";

let leyapage = new LeyaHomepage();
let cartpage = new CartPage();

// Scenario 6:
//Given The user adds a book to the cart
//When User increases by one unit on checkout
//Then Validate there are 2 units on the cart
it(("Add book to the cart and add one more unit"), ()=>{
    leyapage.search("A Nossa Cozinha");
    cy.get("section.search-contents-sec section.similar-books div.container div.book-card-container div.book-card a.second div.single-book-details > h6.book-title")
          .contains("A Nossa Cozinha").should('be.visible');
    leyapage.addBookToCart("A Nossa Cozinha");

    leyapage.seeCartDetails();
    cy.get("[name='qtd'][value='1']").should('be.visible');
    
    cartpage.increaseNumberOfItemsInCart(1);
    cy.get("[name='qtd'][value='2']").should('be.visible');

})