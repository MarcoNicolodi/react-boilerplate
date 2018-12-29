describe('As a developer, i want to search users, to check which users has been added', () => {
  it('Lists users', () => {
    cy.visit('localhost:8080');
    cy.get('#app-menu-icon').click();
    cy.get('#app-drawer').within(() => {
      cy.contains('Users').click({ force: true });
    });
    cy.contains('Add new user');
  });
});
