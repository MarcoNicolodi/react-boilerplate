describe('As a developer, i want to see my home page, to confirm the boilerplate is building', () => {
  it('Greets visitor', () => {
    cy.visit('localhost:8080');
    cy.contains('Make wonderful things!');
  });
});
