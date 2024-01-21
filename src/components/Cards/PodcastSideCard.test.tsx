import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PodcastSideCard } from './PodcastSideCard';
import { useGetPodcasts } from '@/api/useGetPodcasts';
import { Mock, vi } from 'vitest';
import { mockPodcasts } from '@/mocks/PodcastData';

vi.mock('@/api/useGetPodcasts');
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

describe('PodcastSideCard', () => {
  it('should render the skeleton if is loading', () => {
    (useGetPodcasts as Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
    });
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <PodcastSideCard />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const skeleton = screen.getByTestId(/skeleton/);
    expect(skeleton).toBeInTheDocument();
  });
  it('should render the podcast card if data is available', () => {
    (useGetPodcasts as Mock).mockReturnValue({
      data: mockPodcasts,
      isLoading: false,
    });
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <PodcastSideCard />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const podcastName = screen.getByText(/Podcast 1/);
    expect(podcastName).toBeInTheDocument();
  });
  it('should render "no podcast info found" if data is empty', () => {
    (useGetPodcasts as Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
    });
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <PodcastSideCard />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const noPodcastInfoFound = screen.getByText(/No podcast/);
    expect(noPodcastInfoFound).toBeInTheDocument();
  });
  it('should render "no podcast info found" if podcast is null', () => {
    (useGetPodcasts as Mock).mockReturnValue({
      data: { feed: { entry: [] } },
      isLoading: false,
    });
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <PodcastSideCard />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const noPodcastInfoFound = screen.getByText(/No podcast/);
    expect(noPodcastInfoFound).toBeInTheDocument();
  });
  it('should call navigate when clicking on the podcast cover', () => {
    (useGetPodcasts as Mock).mockReturnValue({
      data: mockPodcasts,
      isLoading: false,
    });
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <PodcastSideCard />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const podcastCover = screen.getByAltText(/Podcast cover/);
    podcastCover.click();
    expect(mockedUseNavigate).toHaveBeenCalled();
  });
});
