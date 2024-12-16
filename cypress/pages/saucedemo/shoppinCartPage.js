class shoppingCartPage {
  elements = {
    listProductsInCart: () => cy.get('div[class="cart_item"]'),
    itemInventoryName: () => cy.get('div[class="inventory_item_name"]'),
    itemInventoryDescription: () => cy.get('div[class="inventory_item_desc"]'),
    itemInventoryPrice: () => cy.get('div[class="inventory_item_price"]'),
    btnToDeleteToCart: () =>
      cy.get('button[class="btn btn_secondary btn_small cart_button"]'),
  };

  itemsIsNotEmpy(countProductsAdded){
    for (let i = 0; i < countProductsAdded; i++) {
      this.elements.itemInventoryName().eq(i).should('not.be.empty');
      this.elements.itemInventoryDescription().eq(i).should('not.be.empty');
      this.elements.itemInventoryPrice().eq(i).should('not.be.empty');
    }
  }

  itemsToDelete(countProductsToDelete){
    for (let i = 0; i < countProductsToDelete; i++) {
      this.elements.btnToDeleteToCart().eq(i).click();
    }
  }
}

module.exports = new shoppingCartPage();
