/// <reference types="cypress" />
import { LeyaHomepage } from "../support/pages/leyaHomepage.spec"

let leyapage = new LeyaHomepage();

let book_title = "section.search-contents-sec section.similar-books div.container div.book-card-container div.book-card a.second div.single-book-details > h6.book-title";
let one_book_in_cart = "#dropdownMenuButton100[data-tag='1']"

it(('Search for book 1984, add it to the basket and confirm the number of items in the basket is 1'), () =>{
    leyapage.search("1984");
    cy.get(book_title).contains("1984").should('be.visible');
    leyapage.addBookToCart("1984")
    cy.get(one_book_in_cart, {timeout: 10000}).should('be.visible');
})
