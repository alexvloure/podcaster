import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { v4 as uuidv4 } from 'uuid';

type PodcastCardSkeletonProps = {
  quantity?: number;
};

export const PodcastCardSkeleton: React.FC<PodcastCardSkeletonProps> = ({
  quantity = 12,
}) => {
  return (
    <>
      {Array(quantity)
        .fill(0)
        .map((_, index) => (
          <div
            key={uuidv4()}
            data-testid={`skeleton-${index}`}
            className="relative pt-16">
            <Skeleton className="absolute top-0 left-0 right-0 mx-auto h-32 w-32 rounded-full bg-secondary" />
            <Card className="pt-20 min-h-40">
              <CardContent className="flex flex-col gap-3">
                <Skeleton className="w-full h-6 bg-secondary" />
                <Skeleton className="w-full h-4 bg-secondary" />
              </CardContent>
            </Card>
          </div>
        ))}
    </>
  );
};
