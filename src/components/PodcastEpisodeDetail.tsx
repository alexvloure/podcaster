import { fetchPodcastDetail } from '@/api/fetchPodcastDetail';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Episode, iTunesPodcastEpisodeResponse } from '@/models/Episode';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { PodcastEpisodeDetailSkeleton } from './Skeletons/PodcastEpisodeDetailSkeleton';

export const PodcastEpisodeDetail = () => {
  const { id, episodeId } = useParams();
  const [episode, setEpisode] = useState<Episode | null>(null);
  const sanitizer = DOMPurify.sanitize;
  const { data, isLoading } = useQuery<iTunesPodcastEpisodeResponse>({
    queryKey: ['podcastDetail', id],
    queryFn: () => fetchPodcastDetail(id!),
  });

  useEffect(() => {
    if (data) {
      setEpisode(
        data.results.find((episode) => String(episode.trackId) === episodeId) ||
          null
      );
    }
  }, [data, episodeId]);

  if (isLoading || !episode) {
    return <PodcastEpisodeDetailSkeleton />;
  }

  return (
    <Card className="col-span-7 self-start">
      <CardHeader>
        <CardTitle className="text-lg text-left">
          {episode?.trackName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div
            className="text-balance text-left text-sm break-words opacity-80"
            dangerouslySetInnerHTML={{
              __html: sanitizer(episode.description),
            }}
          />
          <audio controls className="w-full">
            <source
              src={episode.previewUrl}
              type={`audio/${episode.episodeFileExtension}`}
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      </CardContent>
    </Card>
  );
};
