import { Card, CardTitle } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Episode, iTunesPodcastEpisodeResponse } from '@/models/Episode';
import { useEffect } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from './ui/data-table';

const fetchPodcastDetail = async (podcastId: string) => {
  const response = await fetch(
    `https://itunes.apple.com/lookup?id=${podcastId}&country=US&media=podcast&entity=podcastEpisode`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return response;
};

export const EpisodeList = () => {
  const { id } = useParams();
  const { data } = useQuery<iTunesPodcastEpisodeResponse>({
    queryKey: ['podcastDetail', id],
    queryFn: () => fetchPodcastDetail(id!),
  });

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);

  if (!data) {
    return null;
  }

  const columns: ColumnDef<Episode>[] = [
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

  return (
    <div className="flex flex-col sm:col-span-7 gap-4">
      <Card className="w-full p-4 text-left">
        <CardTitle>Episodes: {data?.resultCount - 1}</CardTitle>
      </Card>
      <Card>
        <DataTable columns={columns} data={data?.results} />
      </Card>
    </div>
  );
};
