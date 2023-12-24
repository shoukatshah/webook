// support/index.js

Cypress.on('uncaught:exception', (err, runnable) => {
    // Check if the error message contains the specific error to ignore
    if (err.message.includes('ReferenceError: twq is not defined')) {
      cy.log('Ignoring ReferenceError: twq is not defined');
      return false;  // prevents Cypress from failing the test
    }
    // Uncomment the following lines if you want to see other errors in the console
    // console.error('Uncaught error', err.message, err.stack);
    // throw err;  // re-throws the error to fail the test for other unexpected errors
  });
  
  // Handle uncaught exceptions using window.onerror
  Cypress.on('window:before:load', (win) => {
    const originalOnError = win.onerror;
  
    win.onerror = (errorMsg, url, lineNumber, column, errorObj) => {
      if (errorMsg.includes('ReferenceError: twq is not defined')) {
        cy.log('Ignoring ReferenceError: twq is not defined');
        return true;  // prevents the error from reaching the console
      }
  
      // Uncomment the following line if you want to see other errors in the console
      // console.error('Uncaught error', errorMsg, url, lineNumber, column, errorObj);
  
      // Call the original error handler
      return originalOnError.apply(this, arguments);
    };
  });
  