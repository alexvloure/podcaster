import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { v4 as uuidv4 } from 'uuid';

export const PodcastEpisodeDetailSkeleton: React.FC = () => {
  return (
    <Card data-testid="skeleton" className="w-full col-span-7 self-start">
      <CardHeader>
        <Skeleton className="w-64 h-6 bg-secondary" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            {Array(10)
              .fill(0)
              .map(() => (
                <Skeleton key={uuidv4()} className="w-full h-4 bg-secondary" />
              ))}
          </div>
          <Skeleton key={uuidv4()} className="w-full h-10 bg-secondary" />
        </div>
      </CardContent>
    </Card>
  );
};
