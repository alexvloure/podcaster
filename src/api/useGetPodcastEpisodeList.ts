import { iTunesPodcastEpisodeResponse } from '@/models/Episode';
import { useQuery } from '@tanstack/react-query';

const fetchPodcastEpisodes = async (podcastId: string) => {
  const results = await fetch(
    `https://corsproxy.io/?${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${podcastId}&country=US&media=podcast&entity=podcastEpisode`
    )}`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return results;
};

export const useGetPodcastEpisodeList = (podcastId: string) => {
  const { data, isLoading } = useQuery<iTunesPodcastEpisodeResponse>({
    queryKey: ['podcastDetail', podcastId],
    queryFn: () => fetchPodcastEpisodes(podcastId),
  });

  return { data, isLoading };
};
