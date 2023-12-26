export class LeyaHomepage{

    search_bar_input = "input[id='searchbar-large']"
    search_button = "button.searchbar-large:nth-child(1)"
    results_header = "section.search-contents-sec:nth-child(1) section.similar-books div.container div.h0 > div.search-result-nmbr:nth-child(2)"
    search_results_book_titles = "section.search-contents-sec section.similar-books div.container div.book-card-container div.book-card a.second div.single-book-details > h6.book-title"
    book_author = "section.search-contents-sec section.similar-books div.container div.book-card-container div.book-card a.second div.single-book-details > div.book-author"
    book_card = ".book-card"
    cart_dropdown = "#atc-dropdown"
    delete_item_button = "a.b-delete"
    

    search(search_query){
        cy.get(this.search_bar_input).type(search_query + '{enter}');
        cy.get(this.results_header, {timeout: 10000}).should('be.visible');
    }

    clickBookToSeeDetails(book_title){
        cy.get(this.search_results_book_titles)
           .contains(book_title).click();
        cy.get(this.results_header).should('not.be.visible')
    }

    addBookToCart(book_title){
        cy.get(this.book_card).contains(book_title).parent().find("div a.more.buy-button").click();
        cy.get(this.cart_dropdown, {timeout: 10000}).should('be.visible');
    }

    seeCartDetails(){
        if(cy.get('.icontag.icontag-red.show').should('be.visible')){
            cy.get(".checkout-btn").click();
        }
        else{
            cy.get(".add-to-cart.dropdown").click();
            cy.get(".checkout-btn").click();
        }
        
    }

    deleteItemFromCart(){
        let trash_button = cy.get(this.delete_item_button);

        if(cy.get(this.delete_item_button, {timeout: 10000}).should('be.visible')){
            trash_button.click();
        } else{
            cy.get(".add-to-cart.dropdown").click();
            trash_button.click();
        }
        
    }

    

}