/// <reference types="cypress" />
import { LeyaHomepage } from "../support/pages/leyaHomepage.spec"
import { BookDetailsPage } from "../support/pages/bookDetailsPage.spec";

let leyapage = new LeyaHomepage();
let book_details_page = new BookDetailsPage();


it(('Search for book and validate author, ISBN, number of pages and book dimensions'), () => {
    leyapage.search("1984");
    cy.get("section.search-contents-sec section.similar-books div.container div.book-card-container div.book-card a.second div.single-book-details > div.book-author")
        .contains("GEORGE ORWELL").should('be.visible');

    leyapage.clickBookToSeeDetails("1984");
    book_details_page.getBookIsbnAndValidateResult("9789722071550");
    book_details_page.getBookPagesAndValidateResult("344");
    book_details_page.getBookDimensionsAndValidateResult("235 x 157 x\n 23 mm\n")

})