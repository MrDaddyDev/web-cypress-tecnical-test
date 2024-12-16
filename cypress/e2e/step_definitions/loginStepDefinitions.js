import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/saucedemo/loginPage";
import homeInventoryPage from "../../pages/saucedemo/homeInventoryPage";

Given("que ingresamos a la pagina de saucedemo", () => {
  cy.visit("/");
});

When(
  "ingreso el usuario {string} y contraseña {string}",
  (username, password) => {
    loginPage.submitLogin(username, password);
  }
);

Then("se podra observar el login exitoso", () => {
  homeInventoryPage.elements.titleProducts().should("have.text", "Products");
});

Then("se podra observar el mensaje de error {string}", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});
