// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('cypress-xpath');
// cypress/support/commands.js
import 'cypress-xpath';
Cypress.Commands.add('safeReplaceAll', (str, search, replacement) => {
    try {
      return str.replaceAll(search, replacement);
    } catch (error) {
      Cypress.log({
        name: 'Ignoring replaceAll error',
        message: error.message,
      });
      return str;
    }
  });
  