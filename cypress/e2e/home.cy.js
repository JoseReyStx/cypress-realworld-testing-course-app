describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  context("Hero section", () => {
    it('The H1 contains the correct text', () => {
      cy.get("[data-test='hero-heading']")
        .should("exist")
        .and("have.text", "Testing Next.js Applications with Cypress");
    });

    it('The features on the homepage are correct', () => {
      // cy.get("dt").eq(0).contains("4 courses");
      cy.get("dt").eq(0).contains(/4 courses/i);
    });
  });

  context.only("Courses section", () => {

    const courseLinks = [
      { "id": 0, "path": "/testing-your-first-application", "description": "First Next.js Application" },
      { "id": 1, "path": "/testing-foundations", "description": "Foundations" },
      { "id": 2, "path": "/cypress-fundamentals", "description": "Fundamentals" }
    ]

    courseLinks.forEach(({ id, path, description }) => {
      it(`Course: Testing ${description}`, () => {
        cy.getByData(`course-${id}`).find("a").eq(3).click();
        cy.location("pathname").should("eq", path);
      });
    });

  })

});