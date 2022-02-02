import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    
    btnLogin = $('~Login');
    btnForms = $('~Forms');
}

module.exports = new LandingPage();