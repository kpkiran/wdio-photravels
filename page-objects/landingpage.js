var basePage = require('./../pages/basepage');

class LandingPage extends basePage {

    get languageChooser() {
        return browser.elements('#languageChooser');
    }
}

module.exports = new LandingPage();