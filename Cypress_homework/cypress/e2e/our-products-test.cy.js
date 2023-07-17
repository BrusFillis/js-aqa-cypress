/// <reference types="Cypress" />

import OurProducts from "../pages/our-products-obj";

const ourProducts = new OurProducts();

describe ('Our products page tests', () => {

beforeEach(() => {
    ourProducts.openOurProducts();
});

it('Check the navbar title text displaying right', () => {
    ourProducts.getNavBarTitle().should('have.text', 'WebDriver (New Approach To Learning)');
})

it('Validate that the "Home" link leads to index.html', () => {
    ourProducts.getHomeLink().find('a').should('have.attr', 'href', 'index.html');
})

it('Check the modal window opening', () => {
    ourProducts.getSpecialOffersTitle().click();
    cy.get('.modal-dialog.modal-md').should('be.visible');
})

it('Check if the modal window has buttons named "Proceed" and "Close"', () => {
    ourProducts.getSpecialOffersTitle().click();
    cy.get('div.modal-footer > button.btn.btn-default:first-child').should('be.visible').should('have.text', 'Proceed');
    cy.get('div.modal-footer > button.btn.btn-default:last-child').should('be.visible').should('have.text', 'Close');
})

it('Check if modal window closes after clicking on "x"', () => {
    ourProducts.getSpecialOffersTitle().click();
    cy.get('.close').click();
    cy.get('.modal-dialog.modal-md').should('not.be.visible');
})

})