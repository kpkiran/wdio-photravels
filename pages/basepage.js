"use strict"

class BasePage {

    constructor() {
        this.title = 'PHPTRAVELS | PHP Hotels Script tours vacations and cars booking online application'
    }

    open() {
        browser.url('/');
    }
}

module.exports = BasePage;