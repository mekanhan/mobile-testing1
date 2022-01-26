import { Given, When, Then } from '@cucumber/cucumber';
import chai, { assert } from 'chai';
// const expect = require('chai').expect;
import formsPage from '../pageobjects/forms.page';
import LandingPage from '../pageobjects/landing.page';
import LoginPage from '../pageobjects/login.page';

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

When(/^I tap on active button$/, async () => {
	await formsPage.btnActive_tap();
});

// "([^"]*)?"

When(/^I enter "([^"]*)" as the text$/, async (text) => {
	await formsPage.txtInput_set(text);
    
});


When(/^I initiate login with ([^"]*)? and ([^"]*)?$/,
    async (email, password) => {
        await LoginPage.txtEmail_setText(email);
        await LoginPage.txtPassword_setText(password);
        await LoginPage.btnLogin_tap();
    },
);

Then(/^I close the app$/, async () => {
    await driver.closeApp();
});

