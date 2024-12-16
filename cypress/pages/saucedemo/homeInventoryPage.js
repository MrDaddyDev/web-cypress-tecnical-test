class homeInventoryPage {
  elements = {
    titleProducts: () => cy.get('span[class="title"]'),
    shoppingCartIcon: () => cy.get("#shopping_cart_container"),
    btnToAddToCart: () =>
      cy.get('button[class="btn btn_primary btn_small btn_inventory "]'),
    btnToDeleteToCart: () =>
      cy.get('button[class="btn btn_secondary btn_small btn_inventory "]'),
    countProductsInShoppingCart: () =>
      cy.get('span[class="shopping_cart_badge"]'),
  };

  addOrDeleteToCard(typeTest, countProducts) {
    this.selectRandomProducts(countProducts);
    Cypress.env("countProductsAdded", countProducts);
    if (typeTest == "quitar") {
      this.deleteRandomProducts(countProducts - 2);
      Cypress.env("countProductsDeleted", countProducts - 2);
    }
  }

  selectRandomProducts(countProducts) {
    for (let i = 0; i < countProducts; i++) {
      this.elements
        .btnToAddToCart()
        .eq(generarNumeroAleatorio(Number(countProducts) - i))
        .click();
    }
  }

  deleteRandomProducts(countProducts) {
    for (let i = 0; i < countProducts; i++) {
      this.elements
        .btnToDeleteToCart()
        .eq(generarNumeroAleatorio(Number(countProducts) - i))
        .click();
    }
  }
}

function generarNumeroAleatorio(max) {
  if (max < 0) {
    max = 0;
  }
  return Math.floor(Math.random() * (max - 0)) + 0;
}

module.exports = new homeInventoryPage();
