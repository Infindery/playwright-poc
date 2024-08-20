describe('PixelPerfectTests', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('/');
    cy.wait(100);
  });

  it('desktop-xl', () => {
    cy.getByData('header').compareSnapshot('header');
    cy.getByData('hero').compareSnapshot('hero');
    cy.getByData('cards').compareSnapshot('cards');
    cy.getByData('form').compareSnapshot('form');
    cy.getByData('footer').compareSnapshot('footer');
  });
});