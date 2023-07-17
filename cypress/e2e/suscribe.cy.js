describe('first', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("allows users to suscribe to the email list", () => {
        cy.getByData("email-input")
            .type("mail@asd.com");
        cy.getByData("submit-button")
            .click();
        cy.getByData("success-message")
            .should("exist")
            .contains("mail@asd.com");
    });

    it("does NOT allow a invalid email address", () => {
        cy.getByData("email-input")
            .type("mail");
        cy.getByData("submit-button")
            .click();
        cy.getByData("success-message")
            .should("not.exist");
    });

    it("does NOT allow to subscribe a user twice", () => {
        cy.getByData("email-input")
            .type("john@example.com");
        cy.getByData("submit-button")
            .click();
        cy.getByData("server-error-message")
            .should("exist")
            .contains("john@example.com already exists");
    });

});