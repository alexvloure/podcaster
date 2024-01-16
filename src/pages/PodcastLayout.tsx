import { PodcastSideCard } from '@/components/Cards/PodcastSideCard';
import { Outlet } from 'react-router-dom';

export const PodcastLayout: React.FC = () => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-10 gap-4 sm:gap-10">
      <PodcastSideCard />
      <Outlet />
    </div>
  );
};
