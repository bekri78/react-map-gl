describe("map init", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });
  it("check map is load", () => {
    cy.get('div')
    .should('have.class', 'mapboxgl-map')
  });
});


describe('naviagtion click on map', function() {

  it('click for navigation on the map', function() {
 
     cy.viewport(1600, 757)
  
     cy.visit('http://localhost:3001/')
  
     cy.get('.flex > .mapboxgl-map > div > div > .overlays').click()
  
  })
 
 })
 