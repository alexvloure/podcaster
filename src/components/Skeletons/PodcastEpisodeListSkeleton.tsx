import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';
import { v4 as uuidv4 } from 'uuid';

export const PodcastEpisodeListSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col sm:col-span-7 sm:self-start gap-4">
      <Card className="w-full p-4 text-left">
        <Skeleton className="w-48 h-6 bg-secondary" />
      </Card>
      <Card className="flex flex-col p-4 gap-4">
        {Array(11)
          .fill(0)
          .map(() => (
            <div className="flex gap-4" key={uuidv4()}>
              <Skeleton className="w-[70%] h-6 bg-secondary" />
              <Skeleton className="w-[15%] h-6 bg-secondary" />
              <Skeleton className="w-[15%] h-6 bg-secondary" />
            </div>
          ))}
      </Card>
    </div>
  );
};
