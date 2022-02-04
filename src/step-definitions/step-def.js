import { Given, When, Then } from '@cucumber/cucumber';
import chai, { assert } from 'chai';
import helpers from '../../utils/helpers';


Given(/^I open the school app$/, async () => {
	await console.log('Mobile app is open');
});

When(/^I tab on Got it$/, async () => {
	try {
		await helpers.tapElement(feedPage.btnGotIt);
	} catch (error) {
	}
});

When(/^I tap on "([^"]*)"$/, async (element) => {
	await helpers.tapElement(element);
});

When(/^I tab on Rooms toggle$/, async () => {
	await helpers.tapElement(feedPage.tglRooms);
});

When(/^I enter "([^"]*)" email$/, async (email) => {
	await helpers.write("txtEmail", email);
});

When(/^I enter "([^"]*)" password$/, async (password) => {
	await helpers.write("txtPassword", password);
});

When(/^I tap on sign in button$/, async () => {
	await helpers.tapElement(feedPage.btnSignInRooms);
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

