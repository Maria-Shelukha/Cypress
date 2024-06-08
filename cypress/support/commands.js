Cypress.Commands.add('login', (username, password) => {
    cy.visit("/login");
    cy.get('[data-cy=username]').type(username);
    cy.get('[data-cy=password]').type(password);
    cy.get('[data-cy=submit]').click();
    cy.get('#entity-menu').should('be.visible');
  });