describe("map init", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("check map is load", () => {
    cy.get('div')
    .should('have.class', 'mapboxgl-map')
  });
});
