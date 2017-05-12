var basePage = require('./../pages/basepage');

class LostPassword extends basePage {

    get heading() { return browser.element('.header-lined>h1'); }

    get message() { return browser.element('.logincontainer>p'); }

    get emailLabel() { return browser.element('.form-group>label'); }

    get emailInput() { return browser.element('#inputEmail'); }

    get flash() { return browser.element('.alert.alert-danger.text-center'); }

    open() {
        browser.url('https://phptravels.org/pwreset.php');
    }

    submit() {
        browser.click('//*[@id=\'main-body\']/div[1]/div/div/form/div[2]/button');
    }
}

module.exports = new LostPassword();