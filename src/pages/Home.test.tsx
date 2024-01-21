import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from './Home';
import { fireEvent, render, screen } from '@testing-library/react';
import { Mock, vi } from 'vitest';
import { useGetPodcasts } from '@/api/useGetPodcasts';
import { BrowserRouter } from 'react-router-dom';
import { mockPodcasts } from '@/mocks/PodcastData';

vi.mock('@/api/useGetPodcasts');
const queryClient = new QueryClient();

describe('Home', () => {
  it('should render skeletons if is loading', () => {
    (useGetPodcasts as Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
    });
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const lastSkeleton = screen.getByTestId(/skeleton-11/);
    expect(lastSkeleton).toBeInTheDocument();
  });
  it('should render data if data is available', async () => {
    (useGetPodcasts as Mock).mockReturnValue({
      data: mockPodcasts,
      isLoading: false,
    });
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const podcastCard1 = await screen.findByText('PODCAST 1');
    expect(podcastCard1).toBeInTheDocument();
  });
  it('should render no podcasts found if no podcasts are available', async () => {
    (useGetPodcasts as Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
    });
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const noPodcastsFound = await screen.findByText('No podcasts found.');
    expect(noPodcastsFound).toBeInTheDocument();
  });
  it('should filter podcasts if search term is provided', async () => {
    (useGetPodcasts as Mock).mockReturnValue({
      data: mockPodcasts,
      isLoading: false,
    });
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const input = await screen.findByPlaceholderText('Filter podcasts...');
    fireEvent.change(input, { target: { value: 'podcast 2' } });
    const podcastCard2 = screen.queryByText('PODCAST 2');
    expect(podcastCard2).toBeInTheDocument();
    const podcastCard1 = screen.queryByText('PODCAST 1');
    expect(podcastCard1).not.toBeInTheDocument();
  });
});
