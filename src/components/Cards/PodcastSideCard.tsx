import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useEffect, useState } from 'react';
import { Podcast, iTunesPodcastListResponse } from '@/models/Podcast';
import { useQuery } from '@tanstack/react-query';
import { fetchPodcastData } from '@/api/fetchPodcastData';
import { PodcastSideCardSkeleton } from '../Skeletons/PodcastSideCardSkeleton';

export const PodcastSideCard: React.FC = () => {
  const [podcast, setPodcast] = useState<Podcast | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery<iTunesPodcastListResponse>({
    queryKey: ['podcasts'],
    queryFn: () => fetchPodcastData(),
  });

  useEffect(() => {
    if (data) {
      setPodcast(
        data.feed.entry.find(
          (podcast) => podcast.id.attributes['im:id'] === id
        ) || null
      );
    }
  }, [data, id]);

  const handleClick = () => {
    navigate(`/podcast/${id}`);
  };

  if (!podcast) {
    return <PodcastSideCardSkeleton />;
  }

  return (
    <Card className="p-5 w-full sm:col-span-3">
      <img
        src={podcast?.['im:image'][2].label}
        alt="Podcast cover"
        height={150}
        width={150}
        className="m-auto cursor-pointer"
        onClick={handleClick}
      />
      <Separator className="my-4" />
      <CardHeader
        className="text-start p-0 cursor-pointer"
        onClick={handleClick}>
        <CardTitle>{podcast?.['im:name'].label}</CardTitle>
        <p className="opacity-80">by {podcast?.['im:artist'].label}</p>
      </CardHeader>
      <Separator className="my-4" />
      <CardContent className="text-start p-0">
        <p>Description:</p>
        {podcast && (
          <div
            className="text-pretty text-sm break-words opacity-70"
            dangerouslySetInnerHTML={{ __html: podcast.summary.label }}
          />
        )}
      </CardContent>
    </Card>
  );
};
