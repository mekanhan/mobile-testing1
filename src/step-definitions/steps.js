import { Given, When, Then } from '@cucumber/cucumber';
import chai, { assert } from 'chai';
import helpers from '../../utils/helpers';
import formsPage from '../page-objects/forms.page';
import landingPage from '../page-objects/landing.page';
import loginPage from '../page-objects/login.page';


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
    await helpers.tapElement(loginPage.btnLogin);
});

When(/^I navigate to forms tab$/, async () => {
	await helpers.tapElement(landingPage.btnForms);
});

When(/^I tap on switch$/, async () => {
	await helpers.tapElement(formsPage.tglSwitch);
});

When(/^I enter "([^"]*)" as the text accessibilityID$/, async (text) => {
	await helpers.write(formsPage.txtInput,text);
    
});

When(/^I enter "([^"]*)" as the text xpath$/, async (text) => {
    await helpers.write(formsPage.txtInputXpath,text);
});


When(/^I scroll down to "([^"]*)"$/, async (element) => {
	await helpers.tapElement(formsPage.lblText);
});


Then(/^I validate that the entered text is matching with "([^"]*)"$/, async (expected) => {
	
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

