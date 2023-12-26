/// <reference types="cypress" />
import { BookDetailsPage } from "../support/pages/bookDetailsPage.spec";
import { LeyaHomepage } from "../support/pages/leyaHomepage.spec"

let leyapage = new LeyaHomepage();
let bookDetailsPage = new BookDetailsPage()

it(('Search for book 1984 and validate it has the same author as A Quinta dos Animais'), () =>{
    leyapage.search("1984");
    leyapage.clickBookToSeeDetails("1984");
    bookDetailsPage.validateBookInBooksBySameAuthor("A Quinta dos Animais");
})