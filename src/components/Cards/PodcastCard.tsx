import { Podcast } from '@/models/Podcast';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

type PodcastCardProps = {
  podcast: Podcast;
};

export const PodcastCard: React.FC<PodcastCardProps> = ({ podcast }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/podcast/${podcast.id.attributes['im:id']}`);
  };

  return (
    <div className="relative pt-16">
      <Avatar
        className="absolute top-0 left-0 right-0 mx-auto w-32 h-32 cursor-pointer"
        onClick={handleClick}>
        <AvatarImage src={podcast['im:image'][2].label} />
      </Avatar>
      <Card className="pt-20 min-h-40 cursor-pointer" onClick={handleClick}>
        <CardContent className="flex flex-col gap-2">
          <h4 className="font-semibold tracking-tight">
            {podcast['im:name'].label.toUpperCase()}
          </h4>
          <p className="text-sm opacity-50">
            Author: {podcast['im:artist'].label}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
