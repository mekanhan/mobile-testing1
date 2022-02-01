import Page from '../page-objects/page';

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

    get btnForms(){
        return $('~Forms');
    }

    /**
     * methods to encapsule automation code to interact with the page
     */

    // async btnLogin_tap() {
    //     await this.btnLogin.touchAction('tap');
    // }

    // async btnForms_tap(){
    //     await this.btnForms.touchAction('tap');
    // }



}

export default new LandingPage();
