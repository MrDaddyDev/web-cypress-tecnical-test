class loginPage {
  elements = {
    usernameInput: () => cy.get("#user-name"),
    passwordInput: () => cy.get("#password"),
    loginBtn: () => cy.get("#login-button"),
    //Para error handling
    errorMessage: () => cy.get('h3[data-test="error"]'),
  };

  submitLogin(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLoginBtn();
  }

  typeUsername(username) {
    if (username != "null") {
      this.elements.usernameInput().type(username);
    }
  }

  typePassword(password) {
    if (password != "null") {
      this.elements.passwordInput().type(password);
    }
  }

  clickLoginBtn() {
    this.elements.loginBtn().click();
  }
}

module.exports = new loginPage();
