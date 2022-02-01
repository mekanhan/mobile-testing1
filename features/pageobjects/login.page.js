import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    /**
     * define selectors using getter methods
     */
    
    get txtEmail() {
        return $('~input-email');
    }

    get txtPassword() {
        return $('~input-password');
    }

    get btnLogin() {
        return $('~button-LOGIN');
    }    
}

export default new LoginPage();
