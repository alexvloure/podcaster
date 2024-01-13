import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { PodcastDetail } from '@/pages/PodcastDetail';
import { Navigate, Route, Routes } from 'react-router-dom';

export const routes = () => (
  <Routes>
    <Route path={'/'} element={<Layout />}>
      <Route path={'/'} element={<Home />} />,
      <Route path={'podcast/:id'} element={<PodcastDetail />} />
    </Route>
    <Route path={'*'} element={<Navigate to="/" replace />} />
  </Routes>
);
