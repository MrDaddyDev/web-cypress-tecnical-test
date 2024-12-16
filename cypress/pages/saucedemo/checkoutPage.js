import { faker } from "@faker-js/faker";

class checkoutPage {
  elements = {
    btnCheckout: () => cy.get("#checkout"),
    firstNameInput: () => cy.get("#first-name"),
    lastNameInput: () => cy.get("#last-name"),
    postalCodeInput: () => cy.get("#postal-code"),
    btnContinue: () => cy.get("#continue"),
    btnFinish: () => cy.get('#finish'),
    labelFinishOk: () => cy.get('h2[class="complete-header"'),
  };

  trySubmitYourInformation(typeTest) {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var postalCode = faker.address.zipCode();
    switch (typeTest) {
      case "Correcta":
        this.typeFirstName(firstName);
        this.typeLastName(lastName);
        this.typePostalCode(postalCode);
        break;
      case "Erronea Sin FirstName":
        this.typeLastName(lastName);
        this.typePostalCode(postalCode);
        break;
      case "Erronea Sin Lastname":
        this.typeFirstName(firstName);
        this.typePostalCode(postalCode);
        break;
      case "Erronea Sin PostalCode":
        this.typeFirstName(firstName);
        this.typeLastName(lastName);
        break;
      default:
        console.log("No se encontró tipo de prueba a ejecutar");
    }
    this.clickBtnContinue();
  }

  typeFirstName(firstName) {
    this.elements.firstNameInput().type(firstName);
  }

  typeLastName(lastName) {
    this.elements.lastNameInput().type(lastName);
  }

  typePostalCode(postalCode) {
    this.elements.postalCodeInput().type(postalCode);
  }

  clickBtnContinue() {
    this.elements.btnContinue().click();
  }

  clickBtnFinish() {
    this.elements.btnFinish().click();
  }

  clickBtnCheckout() {
    this.elements.btnCheckout().click();
  }
}

module.exports = new checkoutPage();
