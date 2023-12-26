export class BookDetailsPage{

    isbn_description = "section.sinopse div.container div.row div div._sinpose-address ul > li:nth-child(1)"
    book_dimensions = "section.sinopse div.container div.row div div._sinpose-address ul > li:nth-child(5)"
    book_pages = "section.sinopse div.container div.row div div._sinpose-address ul > li:nth-child(6)"
    books_by_same_author_titles = "section.similar-books div.container div.book-card-container div.book-card a.second div.single-book-details > h6.book-title"


    getBookIsbnAndValidateResult(isbn){
        cy.get(this.isbn_description, {timeout: 10000}).should('be.visible');
        cy.get(this.isbn_description).invoke('text').then((text => {
            expect(text).to.contain(isbn)
        }))
    }

    getBookPagesAndValidateResult(pages){
        cy.get(this.book_pages, {timeout: 10000}).should('be.visible');
        cy.get(this.book_pages).invoke('text').then((text => {
            expect(text).to.contain(pages);
        }))

    }

    getBookDimensionsAndValidateResult(dimensions){
        cy.get(this.book_dimensions, {timeout: 10000}).should('be.visible');
        cy.get(this.book_dimensions).invoke('text').then((text => {
            expect(text).to.contain(dimensions);
        }))
    }

    validateBookInBooksBySameAuthor(book_title){
        cy.get(this.books_by_same_author_titles, {timeout: 10000}).should('be.visible');
        cy.get(this.books_by_same_author_titles).contains(book_title).should('be.visible');

    }
    
}