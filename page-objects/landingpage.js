var basePage = require('./../pages/basepage');

class LandingPage extends basePage {

    get languageChooser() {
        return browser.element('#languageChooser');
    }

    get newContactButton() {
        return browser.element('.btn.btn-default.btn-sm.btn-block');
    }
}

module.exports = new LandingPage();