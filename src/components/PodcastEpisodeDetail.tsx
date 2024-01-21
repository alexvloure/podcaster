import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Episode } from '@/models/Episode';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { PodcastEpisodeDetailSkeleton } from './Skeletons/PodcastEpisodeDetailSkeleton';
import { useGetPodcastEpisodeList } from '@/api/useGetPodcastEpisodeList';
import { Loader } from './Loader';

export const PodcastEpisodeDetail = () => {
  const { id, episodeId } = useParams();
  const [episode, setEpisode] = useState<Episode | null>(null);
  const sanitizer = DOMPurify.sanitize;
  const { data, isLoading } = useGetPodcastEpisodeList(id!);

  useEffect(() => {
    if (data) {
      setEpisode(
        data.results?.find(
          (episode) => String(episode.trackId) === episodeId
        ) || null
      );
    }
  }, [data, episodeId]);

  return (
    <Loader isLoading={isLoading} fallback={<PodcastEpisodeDetailSkeleton />}>
      {episode ? (
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
      ) : (
        <div className="mt-10 w-full sm:col-span-7 flex items-center justify-center">
          <p className="text-2xl font-bold text-gray-500">
            No episode info found.
          </p>
        </div>
      )}
    </Loader>
  );
};
