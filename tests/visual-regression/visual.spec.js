describe('Visual Regression Tests', () => {
    it('should not have visual regressions', () => {
      cy.visit('/');
      cy.matchImageSnapshot('home-page');
    });
  });
  