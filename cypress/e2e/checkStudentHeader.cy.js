/// <reference types="cypress" />


describe('verifier site', () => {
  beforeEach(() => {
    cy.login(Cypress.env("login"), Cypress.env("password"));
  });
   

  it('User can follow the header links', () => {
    
    
    //1. Avaliable more header links for authorised user
    cy.get('[data-cy=navbar] li').should('have.length', 5)
    
    //2. Moving to the Task item on Entity dropdown
    cy.get('[data-cy=entity]').click()
    cy.get('.dropdown-item').eq(0).should('have.attr', 'href', '/task').click()
    cy.url().should('include', '/task?page=1&sort=id,asc')
    cy.get('.dropdown-item').eq(0).should('have.class', 'active')

    //3. Moving to the User Task item on Entity dropdown
    cy.get('[data-cy=entity]').click()
    cy.get('.dropdown-item').eq(1).should('have.attr', 'href', '/user-task').click()
    cy.url().should('include', '/user-task')
    cy.get('.dropdown-item').eq(1).should('have.class', 'active')

    //4. Check home link
    cy.url().should('include', '/user-task')
    cy.get('.nav-link').contains('Home').click()
    cy.url().should('include', '/?page=1&sort=id,asc')
    cy.get('.nav-link').should('have.class', 'active')

    //5. Moving to API item on Swagger dropdown
    cy.get('[data-cy=docsMenu]').should('be.visible').click()
    cy.get('.dropdown-item').contains('API').click()
    cy.url().should('include', '/docs/docs')

    //6. Click on Français on the language menu
    cy.get('.nav-link').contains('English').click()
    cy.get('button').contains('Français').click().wait(1000)
    cy.get('.nav-link').eq(0).should('have.text', 'Accueil')

    //7. Click on Русский on the language menu
    cy.get('.nav-link').contains('Français').click()
    cy.get('button').contains('Русский').click().wait(1000)
    cy.get('.nav-link').eq(0).should('have.text', 'Главная')

    //8. Click on Українська on the language menu
    cy.get('.nav-link').contains('Русский').click()
    cy.get('button').contains('Українська').click().wait(1000)
    cy.get('.nav-link').eq(0).should('have.text', 'Головна')

    //9. Click on English on the language menu
    cy.get('.nav-link').contains('Українська').click()
    cy.get('button').contains('English').click().wait(1000)
    cy.get('.nav-link').eq(0).should('have.text', 'Home')

    //10. Check settings link on account menu
    cy.get('[data-cy=accountMenu]').click()
    cy.get('[data-cy=settings]').click()
    cy.url().should('include', '/account/settings')
    cy.get('[data-cy=settings]').should('have.class', 'active')

    //10. Check password link on account menu
    cy.get('[data-cy=accountMenu]').click()
    cy.get('[data-cy=passwordItem]').click()
    cy.url().should('include', '/account/password')
    cy.get('[data-cy=passwordItem]').should('have.class', 'active')
  })
})