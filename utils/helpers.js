const { default: feedPage } = require("../src/page-objects/feed-page");
const { default: formsPage } = require("../src/page-objects/forms.page");
const { default: landingPage } = require("../src/page-objects/landing.page");
const { default: loginPage } = require("../src/page-objects/login.page");

let page = null;
class helpers {
    pages = {
        loginPage: loginPage,
        landingPage: landingPage,
        feedPage: feedPage,
        formsPage: formsPage, 
    };

    async setPage(pageName) {
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

    async scrollTo(element){
        driver.touchScroll(10, 200, element);
    }
    
    async getTex(element){
        let el = await driver.findElement(element);
        await driver.get
    }
}

module.exports = new helpers();