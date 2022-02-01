import Page from '../page-objects/page';

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

    
    /**
     * methods to encapsule automation code to interact with the page
     */
    
    async txtEmail_setText(email) {
        await this.txtEmail.setValue(email);
    }

    async txtPassword_setText(password) {
        await this.txtPassword.setValue(password);
    }

    async btnLogin_tap() {
        await this.btnLogin.touchAction('tap');
    }

    

    
}

export default new LoginPage();
