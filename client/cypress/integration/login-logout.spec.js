describe('Login', () => {
  beforeEach(() => {
    cy.visit('/auth');
  });

  it('OK, Auth Component', () => {});

  // it('OK, sign up a new user', () => {
  //   cy.get('input[data-cy="userId"]').type('jake');
  //   cy.get('input[data-cy="userEmail"]').type('jake@email.com');
  //   cy.get('input[data-cy="userPassword"]').type('1234567');
  //   cy.get('button[data-cy="submit"]').click();
  // });

  it('OK, log in user', () => {
    cy.get('button[data-cy="switchMode"]').click();
    cy.get('input[data-cy="userEmail"]').type('jake@email.com');
    cy.get('input[data-cy="userPassword"]').type('1234567');
    cy.get('button[data-cy="submit"]').click();
  });
});
