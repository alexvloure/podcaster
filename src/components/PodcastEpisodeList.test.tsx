import { useGetPodcastEpisodeList } from '@/api/useGetPodcastEpisodeList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Mock, vi } from 'vitest';
import { PodcastEpisodeList } from './PodcastEpisodeList';
import { mockPodcastEpisodeList } from '@/mocks/PodcastData';

vi.mock('@/api/useGetPodcastEpisodeList');
const queryClient = new QueryClient();

const mockedUseNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await import('react-router-dom');
  return {
    ...actual,
    useParams: vi.fn().mockReturnValue({ id: '1' }),
    useNavigate: () => mockedUseNavigate,
  };
});

describe('PodcastEpisodeList', () => {
  it('should render the skeleton if is loading', () => {
    (useGetPodcastEpisodeList as Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
    });
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <PodcastEpisodeList />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const skeleton = screen.getByTestId(/skeleton/);
    expect(skeleton).toBeInTheDocument();
  });
  it('should render the episode list if data is available', () => {
    (useGetPodcastEpisodeList as Mock).mockReturnValue({
      data: mockPodcastEpisodeList,
      isLoading: false,
    });
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <PodcastEpisodeList />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const episodeCount = screen.getByText(/Episodes: 2/);
    expect(episodeCount).toBeInTheDocument();
    const episodeTitle1 = screen.getByText(/Track 1/);
    const episodeTitle2 = screen.getByText(/Track 2/);
    expect(episodeTitle1).toBeInTheDocument();
    expect(episodeTitle2).toBeInTheDocument();
  });
  it('should render "No results." if no data is available', () => {
    (useGetPodcastEpisodeList as Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
    });
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <PodcastEpisodeList />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const noEpisodes = screen.getByText(/Episodes: 0/);
    expect(noEpisodes).toBeInTheDocument();
    const noResults = screen.getByText(/No results./);
    expect(noResults).toBeInTheDocument();
  });
  it('should call useNavigate when clicking on an episode', () => {
    (useGetPodcastEpisodeList as Mock).mockReturnValue({
      data: mockPodcastEpisodeList,
      isLoading: false,
    });
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <PodcastEpisodeList />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const episodeTitle1 = screen.getByText(/Track 1/);
    expect(episodeTitle1).toBeInTheDocument();
    episodeTitle1.click();
    expect(mockedUseNavigate).toHaveBeenCalledWith('/podcast/1/episode/101');
  });
});
