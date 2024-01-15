import { PodcastSideCard } from '@/components/Cards/PodcastSideCard';
import { EpisodeList } from '@/components/EpisodeList';

export const PodcastDetail: React.FC = () => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-10 gap-4 sm:gap-10">
      <PodcastSideCard />
      <EpisodeList />
    </div>
  );
};
