/// <reference types='cypress' />

const { generateUser } = require('../support/generateUser');

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill all fields except picture', () => {
    const user = generateUser();

    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.get('#userNumber').type(user.phone);
    cy.get('#dateOfBirthInput').type(`{selectAll}` + user.DOB + `{Enter}`);
    cy.get('.subjects-auto-complete__value-container').type(
      user.letter + `{Enter}`
    );
    cy.get(
      `#genterWrapper > .col-md-9 > :nth-child(${user.gender}) > .custom-control-label`
    ).click();
    cy.get(`#hobbiesWrapper > .col-md-9 > :nth-child(${user.gender})`).click();
    cy.get('#currentAddress').type(user.address);
    cy.get('#state').click();

    cy.get('.css-26l3qy-menu div[class*="option"]').then(($states) => {
      const index = Math.floor(Math.random() * $states.length);
      cy.wrap($states[index]).click();

      cy.get('#city').click();

      cy.get('.css-26l3qy-menu div[class*="option"]').then(($cities) => {
        const index = Math.floor(Math.random() * $cities.length);
        cy.wrap($cities[index]).click();
      });
    });

    cy.get('#submit').click();
    cy.get('tbody').should('exist');
  });
});
