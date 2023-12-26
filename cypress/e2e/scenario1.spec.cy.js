/// <reference types="cypress" />
import { LeyaHomepage } from "../support/pages/leyaHomepage.spec"

let leyapage = new LeyaHomepage();

it ('Search by author and confirm book description', () => {
    leyapage.search("George");
    cy.get("section.search-contents-sec section.similar-books div.container div.book-card-container div.book-card a.second div.single-book-details > h6.book-title")
          .contains(" O Triunfo dos Porcos").should('be.visible')
    
    leyapage.clickBookToSeeDetails(" O Triunfo dos Porcos");
    cy.get("section.sinopse div.container div.margin-bottom-2 div.show-more.show-more-hided")
          .contains("Quinta Manor").should('be.visible')
})
