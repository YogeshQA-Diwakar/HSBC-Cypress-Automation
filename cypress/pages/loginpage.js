class LoginPage {

    continueWithBrowser() {
        return cy.contains('Continue to log on with browser', { timeout: 10000 })
            .should('be.visible')
            .click();
    }

   logOnHeader() {
    return cy.get('#username');
}
    


    usernameField() {
        return cy.get('#username');
    }

    enterUsername(username) {
        this.usernameField().clear().type(username);
    }

    continueButton() {
        return cy.contains('button', 'Continue');
    }

    clickContinue() {
        this.continueButton().click();
    }

    rememberMeCheckbox() {
        return cy.get('input[type="checkbox"]');
    }

   tooltipIcon() {
    return cy.get('.help-icon');
}

    clickTooltip() {
        return this.tooltipIcon().click({ force: true });
    }

    closeButton() {
            return cy.get('.icon-delete').first();
        }

    clickCloseButton() {
            this.closeButton().click({ force: true });
        }
}

export default LoginPage;