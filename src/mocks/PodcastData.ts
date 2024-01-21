export const mockPodcasts = {
  feed: {
    entry: [
      {
        id: {
          attributes: {
            'im:id': '1',
          },
        },
        'im:name': {
          label: 'Podcast 1',
        },
        'im:artist': {
          label: 'Artist 1',
        },
        'im:image': [
          {
            label: 'image0.png',
          },
          {
            label: 'image1.png',
          },
          {
            label: 'image2.png',
          },
        ],
        summary: {
          label: 'Summary 1',
        },
      },
      {
        id: {
          attributes: {
            'im:id': '2',
          },
        },
        'im:name': {
          label: 'Podcast 2',
        },
        'im:artist': {
          label: 'Artist 2',
        },
        'im:image': [
          {
            label: 'image0.png',
          },
          {
            label: 'image1.png',
          },
          {
            label: 'image2.png',
          },
        ],
        summary: {
          label: 'Summary 2',
        },
      },
    ],
  },
};

export const mockPodcastData = {
  'im:name': {
    label: 'Podcast 1',
    attributes: {
      href: 'https://example.com',
    },
  },
  'im:image': [
    {
      label: 'image0.png',
      attributes: {
        height: '55',
      },
    },
    {
      label: 'image1.png',
      attributes: {
        height: '55',
      },
    },
    {
      label: 'image2.png',
      attributes: {
        height: '55',
      },
    },
  ],
  summary: {
    label: 'Summary 1',
  },
  'im:price': {
    label: '$0.00',
    attributes: {
      amount: '0.00000',
      currency: 'USD',
    },
  },
  'im:contentType': {
    attributes: {
      term: 'Audio',
      label: 'Audio',
    },
  },
  rights: {
    label: 'Rights 1',
  },
  title: {
    label: 'Title 1',
  },
  link: {
    attributes: {
      href: 'https://example.com',
      rel: 'alternate',
      type: 'text/html',
    },
  },
  id: {
    label: '1',
    attributes: {
      'im:id': '1',
    },
  },
  'im:artist': {
    label: 'Artist 1',
    attributes: {
      href: 'https://example.com',
    },
  },
  category: {
    attributes: {
      label: 'Category 1',
      'im:id': '1',
      term: 'Category 1',
      scheme: 'https://example.com',
    },
  },
  'im:releaseDate': {
    label: new Date('2021-01-01T00:00:00-07:00'),
    attributes: {
      label: 'January 1, 2021',
    },
  },
};

export const mockPodcastEpisodeList = {
  resultCount: 3,
  results: [
    {
      wrapperType: 'track',
      kind: 'podcast',
      artistId: 1,
      collectionId: 1,
      trackId: 1,
      artistName: 'Artist 1',
      collectionName: 'Collection 1',
      trackName: 'Track 1',
      collectionCensoredName: 'Collection 1',
      trackCensoredName: 'Track 1',
      artistViewUrl: 'http://example.com',
      collectionViewUrl: 'http://example.com',
      feedUrl: 'http://example.com',
      trackViewUrl: 'http://example.com',
      artworkUrl30: 'http://example.com',
      artworkUrl60: 'http://example.com',
      artworkUrl100: 'http://example.com',
      collectionPrice: 0,
      trackPrice: 0,
      collectionHdPrice: 0,
      releaseDate: '2024-01-09T11:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'explicit',
      trackCount: 177,
      trackTimeMillis: 3339,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Music',
      contentAdvisoryRating: 'Explicit',
      artworkUrl600: 'http://example.com',
      genreIds: ['1310', '26', '1324'],
      genres: ['Music', 'Podcasts', 'Society & Culture'],
    },
    {
      country: 'USA',
      artworkUrl60: 'http://example.com',
      artistViewUrl: 'http://example.com',
      contentAdvisoryRating: 'Explicit',
      trackViewUrl: 'http://example.com',
      trackTimeMillis: 3557000,
      artworkUrl600: 'http://example.com',
      collectionViewUrl: 'http://example.com',
      feedUrl: 'http://example.com',
      closedCaptioning: 'none',
      episodeGuid: '43abd49d-5f66-4585-83ed-b0f801508531',
      collectionId: 1,
      collectionName: 'Collection 1',
      description: 'Description episode 1',
      releaseDate: '2024-01-16T11:00:00Z',
      shortDescription: '',
      trackId: 101,
      trackName: 'Track 1',
      artistIds: [1],
      artworkUrl160: 'http://example.com',
      episodeFileExtension: 'mp3',
      episodeContentType: 'audio',
      previewUrl: 'http://example.com',
      episodeUrl: 'http://example.com',
      genres: [
        {
          name: 'Music',
          id: '1310',
        },
      ],
      kind: 'podcast-episode',
      wrapperType: 'podcastEpisode',
    },
    {
      country: 'USA',
      artworkUrl60: 'http://example.com',
      artistViewUrl: 'http://example.com',
      contentAdvisoryRating: 'Explicit',
      trackViewUrl: 'http://example.com',
      trackTimeMillis: 3557000,
      artworkUrl600: 'http://example.com',
      collectionViewUrl: 'http://example.com',
      feedUrl: 'http://example.com',
      closedCaptioning: 'none',
      episodeGuid: '43abd49d-5f66-4585-83ed-b0f801508531',
      collectionId: 1,
      collectionName: 'Collection 1',
      description: 'Description episode 1',
      releaseDate: '2024-01-16T11:00:00Z',
      shortDescription: '',
      trackId: 102,
      trackName: 'Track 2',
      artistIds: [1],
      artworkUrl160: 'http://example.com',
      episodeFileExtension: 'mp3',
      episodeContentType: 'audio',
      previewUrl: 'http://example.com',
      episodeUrl: 'http://example.com',
      genres: [
        {
          name: 'Music',
          id: '1310',
        },
      ],
      kind: 'podcast-episode',
      wrapperType: 'podcastEpisode',
    },
  ],
};
