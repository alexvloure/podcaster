import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const PodcastSideCardSkeleton: React.FC = () => {
  return (
    <Card className="p-5 w-full sm:col-span-3">
      <Skeleton className="w-[150px] h-[150px] m-auto bg-secondary" />
      <Separator className="my-4" />
      <CardHeader className="text-start p-0">
        <Skeleton className="w-44 h-6 bg-secondary" />
        <Skeleton className="w-44 h-4 bg-secondary" />
      </CardHeader>
      <Separator className="my-4" />
      <CardContent className="flex flex-col text-start p-0 gap-2">
        <Skeleton className="w-28 h-4 bg-secondary" />
        <Skeleton className="w-full h-4 bg-secondary" />
        <Skeleton className="w-full h-4 bg-secondary" />
        <Skeleton className="w-full h-4 bg-secondary" />
        <Skeleton className="w-full h-4 bg-secondary" />
        <Skeleton className="w-full h-4 bg-secondary" />
        <Skeleton className="w-full h-4 bg-secondary" />
      </CardContent>
    </Card>
  );
};
