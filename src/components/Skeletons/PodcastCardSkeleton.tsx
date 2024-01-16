import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';

export const PodcastCardSkeleton: React.FC = () => {
  return (
    <div className="relative pt-16">
      <Skeleton className="absolute top-0 left-0 right-0 mx-auto h-32 w-32 rounded-full bg-secondary" />
      <Card className="pt-20 min-h-40">
        <CardContent className="flex flex-col gap-3">
          <Skeleton className="w-full h-6 bg-secondary" />
          <Skeleton className="w-full h-4 bg-secondary" />
        </CardContent>
      </Card>
    </div>
  );
};
