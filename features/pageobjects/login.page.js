import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    txtEmail = $('~input-email');
    txtPassword = $('~input-password');
    btnLogin = $('~button-LOGIN'); 
}

module.exports = new LoginPage();
