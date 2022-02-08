import { Given, When, Then } from '@cucumber/cucumber';
import chai, { assert } from 'chai';
import helpers from '../../utils/helpers';

let currentPackage;
let bundleID = 'com.apptegy.1003ZZ';

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

When(/^I am on home page$/, async () => {
	console.log("Home Page step");
});

Given(/^I am on "([^"]*)"$/, async (page) => {
    helpers.setPage(page);
});

When(/^I check current package$/, async () => {
	currentPackage = await driver.getCurrentPackage();
	let isAppInstalled = await driver.isAppInstalled(currentPackage);
	console.log("---------HERE-----\n " + currentPackage);
	console.log("Is app Installed? " + isAppInstalled);

});

When(/^I activate the app$/, async () => {
	await driver.activateApp(bundleID);
});

When(/^I wait for "([^"]*)" seconds$/, async (seconds) => {
	await driver.pause(seconds);
	console.log("Seconds: ------- " + seconds);
});

When(/^I install the app$/, async () => {
	await driver.installApp('apps/AnnetteISD.ipa')
});



