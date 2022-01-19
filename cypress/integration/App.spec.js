describe("form sunmission", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("render form", () => {
    cy.get("#text").type("test");
    cy.get("#submitted").should("not.exist");
    cy.get("form").submit();
    cy.get("#submitted").should("exist");
  });
});
