import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useEffect, useState } from 'react';
import { Podcast } from '@/models/Podcast';
import { PodcastSideCardSkeleton } from '../Skeletons/PodcastSideCardSkeleton';
import { useGetPodcasts } from '@/api/useGetPodcasts';
import { Loader } from '../Loader';

export const PodcastSideCard: React.FC = () => {
  const [podcast, setPodcast] = useState<Podcast | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetPodcasts();

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

  return (
    <Loader isLoading={isLoading} fallback={<PodcastSideCardSkeleton />}>
      {podcast ? (
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
      ) : (
        <div className="mt-10 w-full sm:col-span-3">
          <p className="text-2xl font-bold text-gray-500">
            No podcast
            <br />
            info found.
          </p>
        </div>
      )}
    </Loader>
  );
};
