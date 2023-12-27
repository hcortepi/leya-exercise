/// <reference types="cypress" />
import { LeyaHomepage } from "../support/pages/leyaHomepage.spec"
import { BookDetailsPage } from "../support/pages/bookDetailsPage.spec";

let leyapage = new LeyaHomepage();

let book_author = "section.search-contents-sec section.similar-books div.container div.book-card-container div.book-card a.second div.single-book-details > div.book-author";
let isbn_description = "section.sinopse div.container div.row div div._sinpose-address ul > li:nth-child(1)";
let book_dimensions = "section.sinopse div.container div.row div div._sinpose-address ul > li:nth-child(5)";
let book_pages = "section.sinopse div.container div.row div div._sinpose-address ul > li:nth-child(6)";


it(('Search for book and validate author, ISBN, number of pages and book dimensions'), () => {
    leyapage.search("1984");
    cy.get(book_author).contains("GEORGE ORWELL").should('be.visible');

    leyapage.clickBookToSeeDetails("1984");

    cy.validateElementText("9789722071550", isbn_description);
    cy.validateElementText("344", book_pages);
    cy.validateElementText("235 x 157 x\n 23 mm\n", book_dimensions);

})