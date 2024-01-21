import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PodcastEpisodeDetail } from './PodcastEpisodeDetail';
import { Mock, vi } from 'vitest';
import { useGetPodcastEpisodeList } from '@/api/useGetPodcastEpisodeList';
import { mockPodcastEpisodeList } from '@/mocks/PodcastData';

vi.mock('@/api/useGetPodcastEpisodeList');
const queryClient = new QueryClient();

vi.mock('react-router-dom', async () => {
  const actual = await import('react-router-dom');
  return {
    ...actual,
    useParams: vi.fn().mockReturnValue({ episodeId: '101' }),
  };
});

describe('PodcastEpisodeDetail', () => {
  it('should render the skeleton if is loading', () => {
    (useGetPodcastEpisodeList as Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
    });
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <PodcastEpisodeDetail />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const skeleton = screen.getByTestId(/skeleton/);
    expect(skeleton).toBeInTheDocument();
  });
  it('should render the podcast details if data is available', () => {
    (useGetPodcastEpisodeList as Mock).mockReturnValue({
      data: mockPodcastEpisodeList,
      isLoading: false,
    });
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <PodcastEpisodeDetail />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const episodeName = screen.getByText(/Track 1/);
    expect(episodeName).toBeInTheDocument();
    const episodeDescription = screen.getByText(/Description episode 1/);
    expect(episodeDescription).toBeInTheDocument();
    const audioPlayer = document.querySelector('audio') as HTMLAudioElement;
    expect(audioPlayer).toBeInTheDocument();
  });
  it('should render "no episode info found" if data is empty', () => {
    (useGetPodcastEpisodeList as Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
    });
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <PodcastEpisodeDetail />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const noEpisodeInfo = screen.getByText(/No episode info found/);
    expect(noEpisodeInfo).toBeInTheDocument();
  });
  it('should render "no episode info found" if episode is empty', () => {
    (useGetPodcastEpisodeList as Mock).mockReturnValue({
      data: { results: [] },
      isLoading: false,
    });
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <PodcastEpisodeDetail />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const noEpisodeInfo = screen.getByText(/No episode info found/);
    expect(noEpisodeInfo).toBeInTheDocument();
  });
});
