describe('Login Page', () => {
    it('should log in the user', () => {
      cy.visit('/login');
      cy.get('input[name="username"]').type('admin');
      cy.get('input[name="password"]').type('password');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/dashboard');
    });
  });
  