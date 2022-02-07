import { Given, When, Then } from '@cucumber/cucumber';
import chai, { assert } from 'chai';
import helpers from '../../utils/helpers';


Given(/^I open the school app$/, async () => {
	await console.log('Mobile app is open');
});

When(/^I tap on "([^"]*)"$/, async (element) => {
	if(element == "btnGotIt"){
		try {
			
		} catch (error) {
		}
	}
	else{
		await helpers.tapElement(element);
	}
});

When(/^I enter "([^"]*)" email$/, async (email) => {
	await helpers.write("txtEmail", email);
});

When(/^I enter "([^"]*)" password$/, async (password) => {
	await helpers.write("txtPassword", password);
});

When(/^I go back$/, async () => {
	await helpers.back();
});

When(/^I open the iOS school app$/, async () => {
	await driver.launchApp();
});

When(/^I am on home page$/, async () => {
	console.log("Home Page step");
});

Given(/^I am on "([^"]*)"$/, async (page) => {
    helpers.setPage(page);
});

