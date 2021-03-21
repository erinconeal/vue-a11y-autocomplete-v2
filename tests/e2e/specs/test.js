// https://docs.cypress.io/api/introduction/api.html

describe('vue-a11y-autocomplete', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });
  it('Has no detectable a11y violations on load', () => {
    // Test the page at initial load
    cy.checkA11y();
  });
  it('Visits the app root url and sees the basic form', () => {
    cy.contains('h1', 'vue-a11y-autocomplete');
    cy.get('button').should('be.visible');
    cy.get('input').should('be.visible');
  });
  it('displays a list of potential matches as the user types', () => {
    cy.get('input').type('united');
    cy.get('li')
      .should('have.length', 5)
      .eq(0)
      .should('contain.text', 'Tanzania, United Republic of');
    cy.get('li')
      .eq(1)
      .should('contain.text', 'United Arab Emirates');
    cy.get('li')
      .eq(2)
      .should('contain.text', 'United Kingdom');
    cy.get('li')
      .eq(3)
      .should('contain.text', 'United States');
    cy.get('li')
      .eq(4)
      .should('contain.text', 'United States Minor Outlying Islands');
    cy.checkA11y();
  });
  it('displays "No results" if a types in value cannot be found', () => {
    cy.get('input').type('xx');
    cy.get('li')
      .should('have.length', 1)
      .eq(0)
      .should('contain.text', 'No results');
    cy.checkA11y();
  });
  it('the autocomplete component accepts partial text', () => {
    cy.get('input').type('lia');
    cy.get('li')
      .should('have.length', 3)
      .eq(0)
      .should('contain.text', 'Australia');
    cy.get('li')
      .eq(1)
      .should('contain.text', 'Mongolia');
    cy.get('li')
      .eq(2)
      .should('contain.text', 'Somalia');
    cy.checkA11y();
  });
  it('the autocomplete component ignores upper or lower case to find a match', () => {
    cy.get('input').type('UNITED');
    cy.get('li')
      .should('have.length', 5)
      .eq(0)
      .should('contain.text', 'Tanzania, United Republic of');
    cy.get('li')
      .eq(1)
      .should('contain.text', 'United Arab Emirates');
    cy.get('li')
      .eq(2)
      .should('contain.text', 'United Kingdom');
    cy.get('li')
      .eq(3)
      .should('contain.text', 'United States');
    cy.get('li')
      .eq(4)
      .should('contain.text', 'United States Minor Outlying Islands');
    cy.checkA11y();
  });
  it("hitting enter on an item in the menu sets that item's value in the input field", () => {
    cy.get('input').type('united{downarrow}{enter}');
    cy.get('input').should('have.value', 'Tanzania, United Republic of');
    cy.checkA11y();
  });
  it('hitting escape on an item in the menu closes the menu', () => {
    cy.get('input').type('united{downarrow}{esc}');
    cy.get('ul').should('not.be.visible');
    cy.checkA11y();
  });
  // Tabbing requires an additional plugin to work: cypress-plugin-tab
  // https://github.com/cypress-io/cypress/issues/299
  it('hitting the tab key while focus is on the input field closes the menu and sets focus to the next element in the tab stop order', () => {
    cy.get('input')
      .type('united')
      .tab();
    cy.get('ul').should('not.be.visible');
    cy.get('button').should('have.focus');
    cy.checkA11y();
  });
  it('hitting the tab key while focus is in the menu closes the menu and sets focus to the next element in the tab stop order', () => {
    cy.get('input')
      .type('united{downarrow}{downarrow}')
      .tab();
    cy.get('ul').should('not.be.visible');
    cy.get('button').should('have.focus');
    cy.checkA11y();
  });
  it('hitting the up arrow while the menu is open moves focus up the menu', () => {
    cy.get('input').type('united{downarrow}{downarrow}');
    cy.get('li')
      .eq(1)
      .should('have.attr', 'aria-selected', 'true')
      .type('{uparrow}');
    cy.get('li')
      .eq(1)
      .should('have.attr', 'aria-selected', 'false');
    cy.get('li')
      .eq(0)
      .should('have.attr', 'aria-selected', 'true');
    cy.checkA11y();
  });
  it('if the first option is focused, hitting the up arrow puts focus on the input field and closes the menu', () => {
    cy.get('input').type('united{downarrow}');
    cy.get('li')
      .eq(0)
      .should('have.attr', 'aria-selected', 'true')
      .type('{uparrow}');
    cy.get('input').should('have.focus');
    cy.get('ul').should('not.be.visible');
    cy.checkA11y();
  });
  it('hitting the down arrow in the input field while the input field is empty opens the menu', () => {
    cy.get('input').type('{downarrow}');
    cy.get('ul').should('be.visible');
    cy.checkA11y();
  });
  it('hitting the down arrow in the input field while the input field is populated moves focus to the first item in the menu', () => {
    cy.get('input').type('united{downarrow}');
    cy.get('li')
      .eq(0)
      .should('have.attr', 'aria-selected', 'true');
    cy.checkA11y();
  });
  it('hitting the down arrow in the menu moves focus to the next list item', () => {
    cy.get('input').type('{downarrow}{downarrow}');
    cy.get('li')
      .eq(0)
      .should('have.attr', 'aria-selected', 'false');
    cy.get('li')
      .eq(1)
      .should('have.attr', 'aria-selected', 'true');
    cy.checkA11y();
  });
  it('hitting the down arrow while focus is on the last item keeps focus on the last item', () => {
    cy.get('input').type('lia{downarrow}{downarrow}{downarrow}');
    cy.get('li').should('have.length', 3);
    cy.get('li')
      .eq(2)
      .should('have.attr', 'aria-selected', 'true');
    cy.get('input').type('{downarrow}');
    cy.get('li')
      .eq(2)
      .should('have.attr', 'aria-selected', 'true');
    cy.checkA11y();
  });
  // Spacebar not supported in cypress
  // it('hitting spacebar while focus is in the menu selects the currently highlighted option and closes the menu. No extra spaces are added in the input field', () => {});
  // it('hitting spacebar while focus is in the empty input field does not display the menu', () => {});
  it('on clicking on the input field, the menu will display', () => {
    cy.get('input').click();
    cy.get('ul').should('be.visible');
    cy.checkA11y();
  });
  it('on clicking on the arrow svg, the menu will display', () => {
    cy.get('svg').click();
    cy.get('ul').should('be.visible');
    cy.checkA11y();
  });
  it('on document click close the menu and remove focus from the input field', () => {
    cy.get('input').type('{downarrow}{downarrow}');
    cy.get('h1').click();
    cy.get('ul').should('not.be.visible');
    cy.get('input').should('not.have.focus');
    cy.checkA11y();
  });
  it("on clicking on a menu item, close the menu and set the menu item's name in the input field", () => {
    cy.get('input').type('united');
    cy.get('li')
      .eq(1)
      .click();
    cy.get('ul').should('not.be.visible');
    cy.get('input').should('have.value', 'United Arab Emirates');
    cy.checkA11y();
  });
  it('hitting submit on submitting a valid country name triggers an alert with message containing "Submitting country ..."', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);
    cy.get('input').type('united');
    cy.get('li')
      .eq(3)
      .click();
    cy.get('button')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(
          'Submitting country United States'
        );
      });
    cy.checkA11y();
  });
  it('hitting submit on submitting an invalid country name triggers an alert with message "Please submit a valid country from the autocomplete."', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);
    cy.get('input').type('xx');
    cy.get('button')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(
          'Please submit a valid country from the autocomplete.'
        );
      });
    cy.checkA11y();
  });
  it('submitting an empty input field triggers an alert with message "Please submit a valid country from the autocomplete."', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);
    cy.get('button')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(
          'Please submit a valid country from the autocomplete.'
        );
      });
    cy.checkA11y();
  });
});
