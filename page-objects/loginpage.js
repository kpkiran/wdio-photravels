var basePage = require('./../pages/basepage');

class LoginPage extends basePage {

    //the domain name turns to '.org'. How to handle this in config.
    open() {
        browser.url('https://phptravels.org/clientarea.php')
    }

    get enterEmail() {
        return browser.element('#inputEmail');
    }

    get enterPassword() {
        return browser.element('#inputPassword');
    }

    get rememberMe() {
        return browser.element('.checkbox>label');
    }

    get loginButton() {
        return browser.element('#login');
    }

    get forgotPassword() {
        return browser.element('.btn.btn-default');
    }

    get account() {
        return browser.element('.dropdown-toggle');
    }

    get loginLink() {
        return browser.element('#Secondary_Navbar-Account-Login>a');
    }

    get register() {
        return browser.element('#Secondary_Navbar-Account-Register>a');
    }

    get forgotPasswordLink() {
        return browser.element('#Secondary_Navbar-Account-Forgot_Password?>a');
    }

    get errorAlert() {
        return browser.element('.alert.alert-danger.text-center');
    }

}

module.exports = new LoginPage();