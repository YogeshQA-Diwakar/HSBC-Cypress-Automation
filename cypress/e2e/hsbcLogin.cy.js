import HomePage from '../pages/homepage';
import LoginPage from '../pages/loginpage';

const homePage = new HomePage();
const loginPage = new LoginPage();

describe('HSBC Login Test', () => {

    let data;

    before(() => {

        cy.fixture('example').then((testData) => {
            data = testData;
        });

        cy.visit('https://www.hsbc.co.in/');
    });

    it('Validate HSBC Login Scenario', () => {

        // Accept Cookies
        homePage.acceptCookies();

        // Validate Logo
        homePage.logo().should('be.visible');

        // Validate Title
        cy.title().should(
            'eq',
            'HSBC India - Credit Cards, NRI Services, Saving and Deposit'
        );

        // Click Login
        homePage.clickLogOn();

        // Continue with Browser
        loginPage.continueWithBrowser();

        // Validate Header
        loginPage.logOnHeader().should('be.visible');

        // Continue Button Available
        loginPage.continueButton().should('be.visible');

        // Continue Disabled Initially
        loginPage.continueButton().should('be.disabled');

        // Enter Username from Fixture
        loginPage.enterUsername(data.username);

        // Continue Enabled
        loginPage.continueButton().should('not.be.disabled');

        // Remember Me Unchecked
        loginPage.rememberMeCheckbox().should('not.be.checked');

        // Tooltip Available
        loginPage.tooltipIcon().should('be.visible');

        // Click Tooltip
        loginPage.clickTooltip();

        

        // Validate Popup Header
        cy.contains('Username').should('be.visible');

        // Validate Close Button
        loginPage.closeButton().should('be.visible');

        // Close Popup
        loginPage.closeButton().click({ force: true });

    });
});