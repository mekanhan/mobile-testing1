import { Given, When, Then } from '@cucumber/cucumber';
import chai, { assert } from 'chai';
import formsPage from '../pageobjects/forms.page';
import LandingPage from '../pageobjects/landing.page';
import LoginPage from '../pageobjects/login.page';
const helpers = require('../../helpers/actionHelper');

Given(/^I open the demo app$/, async () => {
    await console.log('Mobile app is open');
});

When(/^I lock device$/, async () => {
    await driver.lock();
});

When(/^I unlock device$/, async () => {
    await driver.unlock();
});

When(/^I navigate to login tab$/, async () => {
    await LandingPage.btnLogin_tap();
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
        await helpers.write(LoginPage.txtEmail,email);
        await helpers.write(LoginPage.txtPassword,password);
        await helpers.tapElement(LoginPage.btnLogin);
    },
);

Then(/^I close the app$/, async () => {
    await driver.closeApp();
});

