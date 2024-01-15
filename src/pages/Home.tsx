import { fetchPodcastData } from '@/api/fetchPodcastData';
import { PodcastCard } from '@/components/Cards/PodcastCard';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Podcast, iTunesPodcastListResponse } from '@/models/Podcast';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  const { data } = useQuery<iTunesPodcastListResponse>({
    queryKey: ['podcasts'],
    queryFn: fetchPodcastData,
  });

  useEffect(() => {
    if (data) {
      setPodcasts(data.feed.entry);
    }
  }, [data]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (data) {
      const searchTerm = e.target.value;
      const filteredPodcasts = data.feed.entry.filter(
        (podcast) =>
          podcast['im:name'].label
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          podcast['im:artist'].label
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
      setPodcasts(filteredPodcasts);
    }
  };

  return (
    <>
      <div className="mt-0 mr-0 mb-4 ml-auto flex justify-end items-center gap-2">
        <Badge className="h-6">{podcasts?.length}</Badge>
        <Input
          className="w-64"
          placeholder="Filter podcasts..."
          onChange={handleSearch}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {podcasts?.map((podcast) => (
          <PodcastCard key={podcast.id.attributes['im:id']} podcast={podcast} />
        ))}
      </div>
    </>
  );
};
