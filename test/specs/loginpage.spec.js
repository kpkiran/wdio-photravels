var expect = require('chai').expect;
var loginPage = require('./../../page-objects/loginpage');
var homePage = require('./../../page-objects/homepage');
var landingPage = require('./../../page-objects/landingpage');

describe('Login Test', () => {

    var userdata = {

        invalidCredentials: {
            username: 'foo@abc.com',
            password: 'abcprk@abc.com'
        },

        validCredentials: {
            username: 'bar',
            password: '0987654321'
        }
    };

    // var userdata = {
    //     invalidUsername: 'foo@abc.com',
    //     invalidPassword: 'abc',

    //     validUsername: 'abcprk@abc.com',
    //     validPassword: '0987654321'
    // };

    // for (var data in userdata) {
    //     if (data === 'validUsername') {
    //         var valid = 'allow';
    //     } else if (data === 'invalidUsername') {
    //         valid = 'deny';
    //     }

    //     it(`should ${valid} access to ${data}`, () => {
    //         loginPage.open();
    //         loginPage.enterEmail.setValue(userdata[data]);
    //         loginPage.enterPassword.setValue(userdata[data]);
    //         loginPage.loginButton.click();

    //     });
    //     // console.log(data, ' ', userdata[data]);
    //     // console.log(data);

    // }



    it('should deny access to invalid credentials', () => {
        loginPage.open();
        loginPage.enterEmail.setValue(userdata.invalidCredentials.username);
        loginPage.enterPassword.setValue(userdata.invalidCredentials.password);
        loginPage.loginButton.click();

        expect(loginPage.errorAlert.getText()).to.contain('Login Details Incorrect. Please try again.');
    });

    it('should allow access to valid credentials', () => {
        loginPage.open();
        loginPage.enterEmail.setValue(userdata.validCredentials.username);
        loginPage.enterPassword.setValue(userdata.validCredentials.password);
        loginPage.loginButton.click();

        expect(landingPage.languageChooser.getText()).to.contain('Choose language');
    });

    it('should send lost password rest email', () => {
        loginPage.open();
        loginPage.forgotPassword.click();
    });
});