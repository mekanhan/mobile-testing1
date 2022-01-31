import { Given, When, Then } from '@cucumber/cucumber';
import chai, { assert } from 'chai';
import helpers from '../../utils/helpers';
import formsPage from '../pageobjects/forms.page';
import landingPage from '../pageobjects/landing.page';
import loginPage from '../pageobjects/login.page';

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
    await landingPage.btnLogin_tap();
});

When(/^I navigate to forms tab$/, async () => {
	await helpers.tapElement(landingPage.btnForms);
    
});

When(/^I tap on switch$/, async () => {
	
});

When(/^I tap on active button$/, async () => {
	
});

When(/^I enter "([^"]*)" as the text accessibilityID$/, async (text) => {
	await formsPage.txtInput_set(text);
    
});

When(/^I enter "([^"]*)" as the text xpath$/, async (text) => {
    await helpers.write(formsPage.txtInputXpath,"anything");

});

Then(/^I validate that the entered text is matching with "([^"]*)"$/, async (expected) => {
	let actual = await formsPage.lblText_tap();
    console.log(actual);
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

