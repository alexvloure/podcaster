describe('Podcast detail - "/podcast/:id"', () => {
  beforeEach(() => {
    cy.visit('/podcast/1');
    cy.intercept(
      'GET',
      'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
      {
        fixture: 'podcasts.json',
      }
    );
    cy.intercept(
      'GET',
      'https://corsproxy.io/?https%3A%2F%2Fitunes.apple.com%2Flookup%3Fid%3D1%26country%3DUS%26media%3Dpodcast%26entity%3DpodcastEpisode',
      {
        fixture: 'podcastEpisodeList.json',
      }
    );
  });

  it('should display the podcast details', () => {
    cy.get('img.m-auto.cursor-pointer').should(
      'have.attr',
      'src',
      'https://picsum.photos/200'
    );
    cy.get('div h3').should('contain', 'Podcast 1');
    cy.get('div p').should('contain', 'by Artist 1');
    cy.get('div.break-words').should('contain', 'Summary 1');
  });
  it('should display the number of episodes', () => {
    cy.get('div h3.font-semibold.tracking-tight').should(
      'contain',
      'Episodes: 2'
    );
  });
  it('should display the table with the episodes', () => {
    cy.get('table').should('have.length', 1);
    cy.get('table thead tr th').should('have.length', 3);
    cy.get('table tbody tr').should('have.length', 2);
    cy.get('table tbody tr').eq(0).get('td').eq(0).should('contain', 'Track 1');
    cy.get('table tbody tr')
      .eq(0)
      .get('td')
      .eq(1)
      .should('contain', '16/01/2024');
    cy.get('table tbody tr').eq(0).get('td').eq(2).should('contain', '0:00:12');
  });
  it('should have navigation buttons', () => {
    cy.get('div p.mr-2').should('contain', '1 of 1');
    cy.get('li.cursor-pointer a[aria-label="Go to previous page"]').should(
      'exist'
    );
    cy.get('li.cursor-pointer a[aria-label="Go to next page"]').should('exist');
  });
  it('should navigate to episode detail page on row click', () => {
    cy.get('table tbody tr').eq(0).click();
    cy.url().should('contain', '/episode/101');
  });
  it('should navigate to homepage when clicking on app title', () => {
    cy.get('.text-2xl').click();
    cy.url().should('contain', '/');
  });
});
