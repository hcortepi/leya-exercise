export class BookDetailsPage{

    books_by_same_author_titles = "section.similar-books div.container div.book-card-container div.book-card a.second div.single-book-details > h6.book-title";

    validateBookInBooksBySameAuthor(book_title){
        cy.get(this.books_by_same_author_titles, {timeout: 10000}).should('be.visible');
        cy.get(this.books_by_same_author_titles).contains(book_title).should('be.visible');

    }
    
}