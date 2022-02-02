const loginPage = require('../features/pageobjects/login.page');
const landingPage = require('../features/pageobjects/landing.page');
let page = null;
class ActionHelper {
    pages = {
        loginPage : loginPage,
        landingPage : landingPage
    };

    setPage(pageName) {
        for (const [key, value] of Object.entries(this.pages)) {
          if (key === pageName) {
            page = value;
            break;
          }
        }
    }

    async find(elementName, waitTime) {
        waitTime = waitTime || 10000;
        let locator = '';
        for (const [key, value] of Object.entries(page)) {
          if (key === elementName) {
            locator = value;
            break;
          }
        }
        console.log(locator);
        let el = locator;
        return el;
    }

    async tapElement(element) {
        const pageElement = await this.find(element);
        await pageElement.touchAction('tap');
    }

    async write(element, text) {
        const pageElement = await this.find(element);
        await pageElement.setValue(text)
    }
}

module.exports = new ActionHelper();