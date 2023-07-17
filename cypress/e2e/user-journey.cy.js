describe("User journey", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    })


    it("A user can find a course on the home page and complete the courses lessons", () => {
        cy.getByData("course-2").find("a").eq(3).click();
        cy.location("pathname").should("equal", "/cypress-fundamentals");
        cy.getByData("next-lesson-button").click();
        cy.location("pathname", {timeout: 7000}).should("equal", "/cypress-fundamentals/how-to-write-a-test");
        cy.getByData("challenge-answer-0").click();
        cy.getByData("next-lesson-button").should("exist").click();
        cy.location("pathname").should("equal", "/cypress-fundamentals/cypress-runs-in-the-browser");
        cy.getByData("challenge-answer-0").click();
        cy.getByData("next-lesson-button").should("exist").click();
        cy.location("pathname").should("equal", "/cypress-fundamentals/command-chaining");
        cy.getByData("challenge-answer-0").click();
        cy.getByData("next-lesson-button").should("exist").click();
        cy.location("pathname").should("equal", "/");
    })
})