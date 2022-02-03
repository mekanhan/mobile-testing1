import { Given, When, Then } from '@cucumber/cucumber';
import chai, { assert } from 'chai';
import helpers from '../../utils/helpers';
import feedPage from '../page-objects/feed-page';


Given(/^I open the school app$/, async () => {
	await console.log('Mobile app is open');
});

Given(/^I am on "([^"]*)"$/, async (page) => {
    helpers.setPage(page);
});

When(/^I tap on Got it$/, async () => { helpers.setPage('feedPage');
	try {
		await helpers.tapElement('btnGotIt');
	} catch (error) {
	}
});

When(/^I tap on "([^"]*)"$/, async (element) => {
	await helpers.tapElement(element);
});

When(/^I enter "([^"]*)" email$/, async (email) => {
	await helpers.write(txtEmail, email);
});

When(/^I enter "([^"]*)" password$/, async (password) => {
	await helpers.write(txtPassword, password);
});


