import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { PodcastLayout } from '@/pages/PodcastLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PodcastEpisodeList } from '@/components/PodcastEpisodeList';
import { PodcastEpisodeDetail } from '@/components/PodcastEpisodeDetail';

export const routes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path={'/'} element={<Home />} />,
      <Route path={'podcast/:id'} element={<PodcastLayout />}>
        <Route index element={<PodcastEpisodeList />} />
        <Route path={'episode/:episodeId'} element={<PodcastEpisodeDetail />} />
      </Route>
    </Route>
    <Route path={'*'} element={<Navigate to="/" replace />} />
  </Routes>
);
