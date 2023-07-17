/// <reference types="Cypress" />

import HomePage from "../pages/home-page-obj";

const homePage = new HomePage();

describe('Home Page tests', () => {

  beforeEach(() => {
      homePage.openHomePage();
  });
  
  it(`Open the page and verify the carousel works`, () => {
    homePage.openHomePage();
    homePage.getActiveNavItem().should('have.text', 'Home');
    homePage.verifyCarouselHasRequiredComponents();
  })

  it('Validate that the correspondent image is shown after clicking on the carousel indicators', () => {
      homePage.getCarouselIndicator(1).click();
      homePage.getSlideImage1().should('be.visible');
      homePage.getCarouselIndicator(2).click();
      homePage.getSlideImage2().should('be.visible');
      homePage.getCarouselIndicator(3).click();
      homePage.getSlideImage3().should('be.visible');
  }) 

  it('Validate the presence of "Who Are We?" text', () => {
      homePage.getWhoAreWeTitle().should('have.text', 'Who Are We?');
  })

  it('Check if the modal window is opening after clicking "Find out More!" button', () => {
      homePage.getModalButton().click()
      cy.get('.modal-dialog.modal-md').should('be.visible');
  })

  it('Check if there are 5 stars below the "GREAT SERVICE!" title', () => {
      homePage.getStarsBelowGreatServiceTitle().should('have.length', 5);
  })

})