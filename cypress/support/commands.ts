/// <reference types="cypress" />

Cypress.Commands.add('getByData', (selector) => cy.get(`[data-pw=${selector}]`));

Cypress.Commands.add('checkA11y', (context, options, violationCallback, skipFailures) => {
  cy.injectAxe();
  cy.checkA11y(context, options, violationCallback, skipFailures);
});