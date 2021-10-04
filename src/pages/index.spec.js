describe("The Home Page", () => {
/*   beforeEach(() => {
    // reset and seed the database prior to every test
    cy.exec("npm run db:reset && npm run db:seed");
  }); */
  it("verify if successfully loads", () => {
    cy.visit("/");
  });
});
