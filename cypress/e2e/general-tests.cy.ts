import en from '../../src/locale/en.js';
import es from '../../src/locale/es.js';

describe('Main page of application', () => {
    before(() => {
        cy.visit('http://localhost:3000');
    });

    it('should render a home icon', () => {
        cy.get('#home-icon')
            .should('have.prop', 'naturalWidth')
            .and('be.greaterThan', 0);
    });

    it('should render a spanish icon flag', () => {
        cy.get('#lang-picker')
            .should('have.prop', 'naturalWidth')
            .and('be.greaterThan', 0);
    });

    it('should render an input search', () => {
        cy.get('input[type="search"]').should('exist');
    });

    it(`should display "${en.inputPlaceHolder}" text in placeholder`, () => {
        cy.get(`input[placeholder="${en.inputPlaceHolder}"]`).should('exist');
    });

    it('should render a button to trigger search', () => {
        cy.get('button[type="submit"]').should('exist');
    });

    it(`should display "${en.search}" text in button`, () => {
        cy.get('button[type="submit"]').should('have.text', en.search);
    });

    it(`should display USA icon flag after click Spain icon flag`, () => {
        cy.get('#lang-picker').click();

        cy.get('#lang-picker')
            .should('have.attr', 'src')
            .and('include', 'en-lang');
    });

    it(`should display "${es.inputPlaceHolder}" text in placeholder`, () => {
        cy.get(`input[placeholder="${es.inputPlaceHolder}"]`).should('exist');
    });

    it(`should display "${es.search}" text in button`, () => {
        cy.get('button[type="submit"]').should('have.text', es.search);
    });
});

describe('Search user', () => {
    before(() => {
        cy.visit('http://localhost:3000');
    });

    it('should render user card when search "hola" GitHub user', () => {
        cy.get('input[type="search"]').type('hola');
        cy.get('button[type="submit"]').click();

        cy.get('[class^="UserCard_card"]');
    });

    it('should be located in /user/hola', () => {
        cy.url().should('include', '/user/hola');
    });

    it('should render avatar image from "hola" GitHub user', () => {
        cy.get('[class^="UserCard_avatar"]');
    });

    it(`should render ${en.name}, ${en.username} and ${en.bio} properties from "hola" GitHub user`, () => {
        cy.get('span').should('include.text', en.name);
        cy.get('span').should('include.text', en.username);
        cy.get('span').should('include.text', en.bio);
    });

    it(`should render "back" button with ${en.back} text`, () => {
        cy.get('#back').should('have.text', en.back);
    });

    it(`should display USA icon flag after click Spain icon flag`, () => {
        cy.get('#lang-picker').click();

        cy.get('#lang-picker')
            .should('have.attr', 'src')
            .and('include', 'en-lang');
    });

    it(`should render ${es.name}, ${es.username} and ${es.bio} properties from "hola" GitHub user`, () => {
        cy.get('span').should('include.text', es.name);
        cy.get('span').should('include.text', es.username);
        cy.get('span').should('include.text', es.bio);
    });

    it(`should render "back" button with ${es.back} text`, () => {
        cy.get('#back').should('have.text', es.back);
    });

    it(`should go to home, after click "back" button`, () => {
        cy.get('#back').click();
        cy.get('#lang-picker').click();
        cy.url().should('eq', 'http://localhost:3000/');
    });

    it(`should render ${en.notFound} alert when trying to search nonexistent user`, () => {
        cy.get('input[type="search"]').type('hola54545as4dsad5s4a428d47sa5d4');
        cy.get('button[type="submit"]').click();
        cy.get('h3.error').should('have.text', en.notFound);
    });

    it(`should render ${es.notFound} if UI is in spanish`, () => {
        cy.get('#lang-picker').click();
        cy.get('h3.error').should('have.text', es.notFound);
    });
});

describe('Search user repos', () => {
    before(() => {
        cy.visit('http://localhost:3000');
    });

    it('should render repos list from "hola" GitHub user', () => {
        cy.get('input[type="search"]').type('hola');
        cy.get('button[type="submit"]').click();
        cy.get('#user-card').click(5, 5);
        cy.get('[class^="ReposList_list"]').should('exist');
    });

    it('should be located in /user/hola/repos', () => {
        cy.url().should('include', '/user/hola/repos');
    });

    it(`should render "back" button with ${en.back} text`, () => {
        cy.get('#back').should('have.text', en.back);
    });

    it(`should render ${en.openRepo} text to open repository in button`, () => {
        cy.get('.open').should('include.text', en.openRepo);
    });

    it(`should go back to /user/hola if ${en.back} is pressed`, () => {
        cy.get('#back').click();
        cy.url().should('include', '/user/hola');
    });

    it(`should render ${en.noRepos} if a user without repos is searched`, () => {
        cy.visit('http://localhost:3000');
        cy.get('input[type="search"]').type('luis');
        cy.get('button[type="submit"]').click();
        cy.get('#user-card').click(5, 5);
        cy.get('h3.error').should('have.text', en.noRepos);
    });

    it(`should render ${es.noRepos} if a user without repos is searched and UI is in spanish`, () => {
        cy.get('#lang-picker').click();
        cy.get('h3.error').should('have.text', es.noRepos);
    });
});
