/// <reference types="cypress" />
import { LeyaHomepage } from "../support/pages/leyaHomepage.spec"

let leyapage = new LeyaHomepage();

let book_title = "section.search-contents-sec section.similar-books div.container div.book-card-container div.book-card a.second div.single-book-details > h6.book-title";
let book_details = "section.sinopse div.container div.margin-bottom-2 div.show-more.show-more-hided";

it ('Search by author and confirm book description', () => {
    leyapage.search("George");
    cy.get(book_title).contains(" O Triunfo dos Porcos").should('be.visible');
    
    leyapage.clickBookToSeeDetails(" O Triunfo dos Porcos");
    cy.get(book_details).contains("Quinta Manor").should('be.visible');
})
