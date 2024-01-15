export interface iTunesPodcastEpisodeResponse {
  resultCount: number;
  results: Episode[];
}

export interface Episode {
  country: string;
  episodeUrl: string;
  previewUrl: string;
  closedCaptioning: string;
  collectionId: number;
  collectionName: string;
  genres: Genre[];
  episodeGuid: string;
  description: string;
  feedUrl: string;
  trackId: number;
  trackName: string;
  shortDescription: string;
  releaseDate: Date;
  artistIds: number[];
  collectionViewUrl: string;
  trackTimeMillis: number;
  contentAdvisoryRating: string;
  trackViewUrl: string;
  artworkUrl60: string;
  artistViewUrl: string;
  episodeContentType: string;
  artworkUrl160: string;
  episodeFileExtension: string;
  artworkUrl600: string;
  kind: string;
  wrapperType: string;
}

export interface Genre {
  name: string;
  id: string;
}
