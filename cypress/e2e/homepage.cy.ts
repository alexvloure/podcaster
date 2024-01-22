describe('Homepage - "/"', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept(
      'GET',
      'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
      {
        fixture: 'podcasts.json',
      }
    );
  });

  it('should display the homepage and podcasts', () => {
    cy.get('.text-2xl').should('contain', 'Podcaster');
    cy.get('div.relative.pt-16').should('have.length', 2);
  });

  it('should filter podcasts by name or author', () => {
    cy.get('input').type('podcast 1');
    cy.get('div.relative.pt-16')
      .should('have.length', 1)
      .and('contain', 'PODCAST 1');
    cy.get('input').clear().type('artist 2');
    cy.get('div.relative.pt-16')
      .should('have.length', 1)
      .and('contain', 'PODCAST 2');
  });
  it('should navigate to podcast details on click', () => {
    cy.get('div.relative.pt-16').first().click();
    cy.url().should('contain', '/podcast/1');
  });
});
