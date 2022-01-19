describe("form sunmission", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("doit envoyer le formulaire", () => {
    cy.get("#text").type("test");
    cy.get("#submitted").should("not.exist");
    cy.get("form").submit();
    cy.get("#submitted").should("exist");
  });
});
