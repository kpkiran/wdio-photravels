var basePage = require('./../pages/basepage');

class HomePage extends basePage {

    get login() { return browser.element('.login'); }

    open() {
        super.open();
    }

    submit() {
        browser.click('.login');
    }
}

module.exports = new HomePage();