/// <reference types="Cypress" />

import { users } from "../test-data/user-test-data";
import ContactUsPage from "../pages/contact-us-home-obj";

const contactUsPage = new ContactUsPage();
const userWithAllValidData = users[0];
const userEmptyEmail = users[1];
const userEmptyFirstName = users[2];

describe('Testing Contact Us form with different users data', () => {

  it(`Open and fill the Contact Us form : ${userWithAllValidData.testName}`, () => {
  contactUsPage.visit()
  contactUsPage.fillContactUsForm(userWithAllValidData);
  contactUsPage.getSuccessSubmitMessage().should('exist');
  contactUsPage.getAllFieldsAreRequiredError().should('not.exist');
  contactUsPage.getInvalidEmailError().should('not.exist');
  })
    
  it(`Open and fill the Contact Us form : ${userEmptyEmail.testName}`, () => {
  contactUsPage.visit()
  contactUsPage.fillContactUsForm(userEmptyEmail);
  contactUsPage.getAllFieldsAreRequiredError().should('exist');
  contactUsPage.getInvalidEmailError().should('exist');
  })

  it(`Open and fill the Contact Us form : ${userEmptyFirstName.testName}`, () => {
  contactUsPage.visit()
  contactUsPage.fillContactUsForm(userEmptyFirstName);
  contactUsPage.getAllFieldsAreRequiredError().should('exist');
  contactUsPage.getInvalidEmailError().should('not.exist');
  })
      
})