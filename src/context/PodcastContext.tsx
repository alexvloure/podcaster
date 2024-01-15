import { Podcast } from '@/models/Podcast';
import { createContext } from 'react';

type PodcastContextProps = {
  podcasts: Podcast[];
  setPodcasts: React.Dispatch<React.SetStateAction<Podcast[]>>;
};

export const PodcastContext = createContext<PodcastContextProps>({
  podcasts: [],
  setPodcasts: () => {},
});
