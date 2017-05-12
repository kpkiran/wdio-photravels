var expect = require('chai').expect;
var lostPassword = require('./../../page-objects/lostpassword');

describe('Lost Password', () => {

    it.skip('should display error when no email is provided', () => {
        lostPassword.open();
        expect(lostPassword.heading.getText()).to.contain('Lost Password Reset');
        expect(lostPassword.message.getText()).to.contain('Forgotten your password? Enter your email address below to begin the reset process.');
        lostPassword.submit();

        expect(lostPassword.flash.getText()).to.contain('Please enter your email address');
    });

    it.skip('should send password rest email', () => {
        lostPassword.open();
        expect(lostPassword.emailLabel.getText()).to.contain('Email Address');
        lostPassword.emailInput.setValue('abcprk@abc.com');
        lostPassword.submit();
    });
});