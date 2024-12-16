import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homeInventoryPage from "../../pages/saucedemo/homeInventoryPage";
import shoppingCartPage from "../../pages/saucedemo/shoppinCartPage";

When(
  "intento {string} al carrito de compras {string} productos",
  (typeTest, countProducts) => {
    homeInventoryPage.addOrDeleteToCard(typeTest, countProducts);
  }
);

When("ingreso a la seccion del carrito", () => {
  homeInventoryPage.elements.shoppingCartIcon().click();
});

When(
  "intento eliminar del carrito de compras {string} productos",
  (countProductsToAdd) => {
    shoppingCartPage.itemsToDelete(countProductsToAdd);
  }
);

Then(
  "se podra ver el {string} de los productos en el carrito de compras",
  (typeTest) => {
    if (typeTest == "incremento") {
      var result = Cypress.env("countProductsAdded");
    } else {
      var resultAdded = Cypress.env("countProductsAdded");
      var resultDeleted = Cypress.env("countProductsDeleted");
      var result = resultAdded - resultDeleted;
    }
    homeInventoryPage.elements
      .countProductsInShoppingCart()
      .should("have.text", result);
  }
);

Then(
  "al entrar al carrito se podra observar el nombre, descripcion y valor en el carrito de compras",
  () => {
    shoppingCartPage.elements
      .listProductsInCart()
      .should("have.length", Cypress.env("countProductsAdded"));
    shoppingCartPage.itemsIsNotEmpy(Cypress.env("countProductsAdded"));
  }
);

Then(
  "se podra observar que se elimina producto por producto del carrito de compras",
  () => {
    var resultAdded = Cypress.env("countProductsAdded");
    var resultDeleted = Cypress.env("countProductsDeleted");
    shoppingCartPage.elements
      .listProductsInCart()
      .should("have.length", resultAdded - resultDeleted);
  }
);
