var expect = require('chai').expect;
var loginPage = require('./../../page-objects/loginpage');
var homePage = require('./../../page-objects/homepage');
var landingPage = require('./../../page-objects/landingpage');

describe('Login Test', () => {

    // beforeEach(() => {
    //     homePage.open();
    //     homePage.login.click();
    //     browser.switchTab(browser.getTabIds()[1]);
    //     expect(browser.getText('.header-lined>h1')).to.contain('Login This page is restricted');
    // });

    it.skip('should deny access to invalid credentials', () => {
        loginPage.open();
        loginPage.enterEmail.setValue('foo@abc.com');
        loginPage.enterPassword.setValue('bar')
        loginPage.loginButton.click();

        expect(loginPage.errorAlert.getText()).to.contain('Login Details Incorrect. Please try again.');
    });

    it.skip('should allow access to valid credentials', () => {
        loginPage.open();
        loginPage.enterEmail.setValue('abcprk@abc.com');
        loginPage.enterPassword.setValue('0987654321');
        loginPage.loginButton.click();

        expect(landingPage.languageChooser.getText()).to.contain('Choose language');
    });

    it.skip('should send lost password rest email', () => {
        loginPage.open();
        loginPage.forgotPassword.click();

    });

});