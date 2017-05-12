var expect = require('chai').expect;
var homePage = require('./../../page-objects/homepage');

describe('Homepage Test', () => {
    it.only('should open a new tab on clicking signin', () => {
        homePage.open();
        expect(homePage.login).to.exist;
        homePage.submit();

        browser.switchTab(browser.getTabIds()[1]);
        expect(browser.getText('.header-lined>h1')).to.contain('Login This page is restricted');

    });
});