import { Given, When, Then } from '@cucumber/cucumber';
import chai, { assert } from 'chai';
import helpers from '../../utils/helpers';
import feedPage from '../page-objects/feed-page';


Given(/^I open the school app$/, async () => {
	await console.log('Mobile app is open');
});

When(/^I tab on Got it$/, async () => {
	try {
		await helpers.tapElement(feedPage.btnGotIt);
	} catch (error) {
	}
});

When(/^I tab on Rooms toggle$/, async () => {
	await helpers.tapElement(feedPage.tglRooms);
});

When(/^I enter "([^"]*)" email$/, async (email) => {
	await helpers.write(feedPage.txtEmail, email);
});

When(/^I enter "([^"]*)" password$/, async (password) => {
	await helpers.write(feedPage.txtPassword, password);
});

When(/^I tap on sign in button$/, async () => {
	await helpers.tapElement(feedPage.btnSignInRooms);
});
