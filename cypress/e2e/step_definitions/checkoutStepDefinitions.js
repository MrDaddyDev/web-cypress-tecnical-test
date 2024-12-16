import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import checkoutPage from "../../pages/saucedemo/checkoutPage";

When("ingreso al checkout", () => {
  checkoutPage.clickBtnCheckout();
});

When("intento llenar los campos de manera {string}", (typeTest) => {
  checkoutPage.trySubmitYourInformation(typeTest);
});

Then("se podra observar el mensaje de compra exitosa {string}", (message) => {
  checkoutPage.clickBtnFinish();
  checkoutPage.elements.labelFinishOk().should("have.text", message);
});

