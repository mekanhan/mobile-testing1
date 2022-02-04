const loginPage = require('../src/page-objects/login.page');
const landingPage = require('../src/page-objects/landing.page');
const feedPage = require('../src/page-objects/feed-page')
let page = null;
class Helpers {
    pages = {
        loginPage : loginPage,
        landingPage : landingPage,
        feedPage : feedPage
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

    async back(){
        await driver.back();
    }
}

module.exports = new Helpers();