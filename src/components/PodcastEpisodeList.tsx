import { Card, CardTitle } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { Episode, iTunesPodcastEpisodeResponse } from '@/models/Episode';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/ui/data-table';
import { fetchPodcastEpisodes } from '@/api/fetchPodcastEpisodes';
import { PodcastEpisodeListSkeleton } from '@/components/Skeletons/PodcastEpisodeListSkeleton';

export const PodcastEpisodeList = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<iTunesPodcastEpisodeResponse>({
    queryKey: ['podcastDetail', id],
    queryFn: () => fetchPodcastEpisodes(id!),
  });

  const columns: ColumnDef<Episode>[] = [
    {
      accessorKey: 'trackId',
      header: 'ID',
    },
    {
      accessorKey: 'trackName',
      header: 'Title',
    },
    {
      accessorKey: 'releaseDate',
      header: 'Date',
      cell: (cell) => {
        const date = new Date(cell.renderValue() as string);
        return <span>{date.toLocaleDateString()}</span>;
      },
    },
    {
      accessorKey: 'trackTimeMillis',
      header: 'Duration',
      cell: (cell) => {
        const date = new Date(cell.renderValue() as string);
        return <span>{date.toLocaleTimeString()}</span>;
      },
    },
  ];

  if (isLoading || !data) {
    return <PodcastEpisodeListSkeleton />;
  }

  return (
    <div className="flex flex-col sm:col-span-7 sm:self-start gap-4">
      <Card className="w-full p-4 text-left">
        <CardTitle>Episodes: {data.resultCount - 1}</CardTitle>
      </Card>
      <Card>
        <DataTable
          columns={columns}
          data={data?.results.slice(1)}
          handleRowClick={(row) =>
            navigate(`/podcast/${id}/episode/${row[0].renderValue() as string}`)
          }
        />
      </Card>
    </div>
  );
};
