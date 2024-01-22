import { Card, CardTitle } from '@/components/ui/card';
import { useNavigate, useParams } from 'react-router-dom';
import { Episode } from '@/models/Episode';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/ui/data-table';
import { PodcastEpisodeListSkeleton } from '@/components/Skeletons/PodcastEpisodeListSkeleton';
import { useGetPodcastEpisodeList } from '@/api/useGetPodcastEpisodeList';
import { Loader } from './Loader';

export const PodcastEpisodeList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetPodcastEpisodeList(id!);

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
        return (
          <span>{date.toLocaleTimeString('es-ES', { timeZone: 'UTC' })}</span>
        );
      },
    },
  ];

  return (
    <Loader isLoading={isLoading} fallback={<PodcastEpisodeListSkeleton />}>
      <div className="flex flex-col sm:col-span-7 sm:self-start gap-4">
        <Card className="w-full p-4 text-left">
          <CardTitle>
            Episodes: {data?.resultCount ? data.resultCount - 1 : 0}
          </CardTitle>
        </Card>
        <Card>
          <DataTable
            columns={columns}
            data={data?.results?.slice(1) || []}
            handleRowClick={(row) =>
              navigate(
                `/podcast/${id}/episode/${row[0].renderValue() as string}`
              )
            }
          />
        </Card>
      </div>
    </Loader>
  );
};
