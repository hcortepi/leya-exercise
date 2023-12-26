export class CartPage{


    increase_number_units_in_cart = ".product-plus"

    increaseNumberOfItemsInCart(number_extra_items){
        cy.get(this.increase_number_units_in_cart, {timeout: 10000}).should('be.visible');
        let add_units_button = cy.get(this.increase_number_units_in_cart)
        for (var i=0; i<number_extra_items; i++){
            add_units_button.click()
        }
    }

    

}