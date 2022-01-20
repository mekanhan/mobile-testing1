import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */

    get btnLogin() {
        return $('~Login');
    }

    // get btnForms(){
    //     return $('~Forms');
    // }
    /**
     * methods to encapsule automation code to interact with the page
     */

    // async btnForms_tap(){
    //     await this.btnForms.touchAction('tap');
    // }
    async btnLogin_tap() {
        await this.btnLogin.touchAction('tap');
    }
}

export default new LandingPage();
