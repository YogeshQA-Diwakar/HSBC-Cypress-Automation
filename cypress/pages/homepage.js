class HomePage {

    acceptCookies() {
        return cy.contains('button', 'Accept', { timeout: 10000 })
            .should('be.visible')
            .click({ force: true });
    }

    logo() {
        return cy.get('.header-logo');
    }

    loginButton() {
        return cy.contains('Log On');
    }

    clickLogOn() {
        this.loginButton().click();
    }
}

export default HomePage;