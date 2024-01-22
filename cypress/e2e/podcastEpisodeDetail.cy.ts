describe('Podcast episode detail - "/podcast/:id/episode/:episodeId"', () => {
  beforeEach(() => {
    cy.visit('/podcast/1/episode/101');
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
  it('should display the podcast episode details', () => {
    cy.get('div h3.font-semibold.tracking-tight.text-lg.text-left').should(
      'contain',
      'Track 1'
    );
    cy.get('div.text-balance.break-words.opacity-80').should(
      'contain',
      'Description episode 1'
    );
    cy.get('audio').should('exist');
    cy.get('source').should(
      'have.attr',
      'src',
      'https://samplelib.com/lib/preview/mp3/sample-12s.mp3'
    );
  });
  it('should navigate to podcast detail page when clicking on podcast name/author or image', () => {
    cy.get('.p-5 > .flex').eq(0).click();
    cy.url().should('contain', '/podcast/1');
    cy.visit('/podcast/1/episode/101');
    cy.get('img.m-auto.cursor-pointer').click();
    cy.url().should('contain', '/podcast/1');
  });
  it('should navigate to homepage when clicking on app title', () => {
    cy.get('.text-2xl').click();
    cy.url().should('contain', '/');
  });
});
