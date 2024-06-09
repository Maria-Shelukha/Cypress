/// <reference types="cypress" />


describe('verifier site', () => {
  beforeEach(() => {
    cy.login(Cypress.env("login"), Cypress.env("password"));
  });
   

  it('User can follow the header links', () => {
    //1. Avaliable more header links for authorised user
    cy.get('[data-cy=navbar] li').should('have.length', 5)
  })
  
  it('Moving to the Task item on Entity dropdown', () => {
    //2. Moving to the Task item on Entity dropdown
    cy.get('[data-cy=entity]').click()
    cy.get('.dropdown-item').eq(0).should('have.attr', 'href', '/task').click()
    cy.url().should('include', '/task?page=1&sort=id,asc')
    cy.get('.dropdown-item').eq(0).should('have.class', 'active')
  })

  it('Moving to the User Task item on Entity dropdown', () => {
    //3. Moving to the User Task item on Entity dropdown
    cy.get('[data-cy=entity]').click()
    cy.get('.dropdown-item').eq(1).should('have.attr', 'href', '/user-task').click()
    cy.url().should('include', '/user-task')
    cy.get('.dropdown-item').eq(1).should('have.class', 'active')
  })

  it('Check home link', () => {
    //4. Check home link
    cy.get('[data-cy=entity]').click()
    cy.get('.dropdown-item').eq(1).should('have.attr', 'href', '/user-task').click()
    cy.url().should('include', '/user-task')
    cy.get('.nav-link').contains('Home').click()
    cy.url().should('include', '/?page=1&sort=id,asc')
    cy.get('.nav-link').should('have.class', 'active')
  })

  it('Moving to API item on Swagger dropdownk', () => {
    //5. Moving to API item on Swagger dropdown
    cy.get('[data-cy=docsMenu]').should('be.visible').click()
    cy.get('.dropdown-item').contains('API').click()
    cy.url().should('include', '/docs/docs')
  })

  it('Click on Français on the language menu', () => {
    cy.switchLanguage('Français','Accueil')
  })

  it('Click on Русский on the language menu', () => {
    cy.switchLanguage('Русский','Главная')
  })

  it('Click on Українська on the language menu', () => {
    cy.switchLanguage('Українська','Головна')
  })

  it('Click on English on the language menu', () => {
    cy.switchLanguage('English','Home')
  })

  it('Check settings link on account menu', () => {
    //10. Check settings link on account menu
    cy.get('[data-cy=accountMenu]').click()
    cy.get('[data-cy=settings]').click()
    cy.url().should('include', '/account/settings')
    cy.get('[data-cy=settings]').should('have.class', 'active')
  })

  it('Check password link on account menu', () => {
    //10. Check password link on account menu
    cy.get('[data-cy=accountMenu]').click()
    cy.get('[data-cy=passwordItem]').click()
    cy.url().should('include', '/account/password')
    cy.get('[data-cy=passwordItem]').should('have.class', 'active')
  })
})