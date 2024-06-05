/// <reference types="cypress" />



describe('verifier site', () => {


    it('Check that page was loaded', () => {
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/')
      cy.get('[data-cy=navbar] li').should('have.length', 3)
    })
  })