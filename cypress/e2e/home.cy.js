describe('home page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    context("Hero section", () => {
      it('The H1 contains the correct text', () => {
        cy.get("[data-test='hero-heading']")
          .should("exist")
          .contains("Testing Next.js Applications with Cypress");
      });
  
      it('The features on the homepage are correct', () => {
        // cy.get("dt").eq(0).contains("4 courses");
        cy.get("dt").eq(0).contains(/4 courses/i);
      });
    });
  
    context("Courses section", () => {
      it("Course: Testing Your First Next.js Application", () => {
        cy.getByData("course-0").find("a").eq(3).click();
        cy.location("pathname").should("equal", "/testing-your-first-application");
      });
  
      it("Course: Testing Your First Next.js Application", () => {
        cy.getByData("course-1").find("a").eq(3).click();
        cy.location("pathname").should("equal", "/testing-foundations");
      });
  
      it("Course: Testing Foundations", () => {
        cy.getByData("course-2").find("a").eq(3).click();
        cy.location("pathname").should("equal", "/cypress-fundamentals");
      });
    })
  
  });