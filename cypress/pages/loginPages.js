export class LoginPage {
    elements = {
      loginField: () => cy.get("[data-cy=username]"),
      passwordField: () => cy.get("[data-cy=password]"),
      loginButton: () =>
        cy.get("[data-cy=submit]"),
    };
  
    login(username, password) {
      this.elements.loginField().type(username);
      this.elements.passwordField().type(password);
      this.elements.loginButton().click();
    }
  }