describe('My First Test', () => {
  it('Visits the page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('.orangehrm-login-form').should('be.visible')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
  });
});