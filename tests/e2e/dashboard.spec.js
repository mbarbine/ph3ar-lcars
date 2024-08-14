describe('Dashboard Page', () => {
    it('should display the user dashboard', () => {
      cy.visit('/dashboard');
      cy.get('h1').should('contain.text', 'Dashboard');
    });
  });
  