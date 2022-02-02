import { Given, When, Then } from '@cucumber/cucumber';
import chai, { assert } from 'chai';
import formsPage from '../pageobjects/forms.page';
const helpers = require('../../helpers/actionHelper');

Given(/^I open the demo app$/, async () => {
    await console.log('Mobile app is open');
});

Given(/^I am on "([^"]*)"$/, async (page) => {
    helpers.setPage(page);
});

When(/^I lock device$/, async () => {
    await driver.lock();
});

When(/^I unlock device$/, async () => {
    await driver.unlock();
});

When(/^I navigate to login tab$/, async () => {
    helpers.setPage('landingPage');
    await helpers.tapElement('btnLogin');
});

When(/^I navigate to forms tab$/, async () => {
	await LandingPage.btnForms_tap();
    
});

When(/^I tap on switch$/, async () => {
	await formsPage.tglSwitch_tap();
});

When(/^I tap on active button$/, async () => {
	await formsPage.btnActive_tap();
});

When(/^I tap on "([^"]*)"$/, async (element) => {
	await helpers.tapElement(element);
});

When(/^I enter "([^"]*)" as the text accessibilityID$/, async (text) => {
	await formsPage.txtInput_set(text);
    
});

When(/^I enter "([^"]*)" as the text xpath$/, async (text) => {
	await formsPage.txtInputXpath_set(text);

});

Then(/^I validate that the entered text is matching with "([^"]*)"$/, async (expected) => {
	let actual = await formsPage.lblText_tap();
    console.log(actual);
});







When(/^I initiate login with ([^"]*)? and ([^"]*)?$/,
    async (email, password) => {
        helpers.setPage('loginPage');
        await helpers.write('txtEmail',email);
        await helpers.write('txtPassword',password);
    },
);

Then(/^I close the app$/, async () => {
    await driver.closeApp();
});

