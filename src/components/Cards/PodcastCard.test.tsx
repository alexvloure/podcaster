import { BrowserRouter } from 'react-router-dom';
import { PodcastCard } from './PodcastCard';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { mockPodcastData } from '@/mocks/PodcastData';

const mockedUseNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await import('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockedUseNavigate,
  };
});

describe('PodcastCard', () => {
  it('should render', () => {
    render(
      <BrowserRouter>
        <PodcastCard podcast={mockPodcastData} key="randomKey" />
      </BrowserRouter>
    );
    const artist = screen.getByText(/Artist 1/);
    expect(artist).toBeInTheDocument();
  });
  it('should call navigate when clicked', () => {
    render(
      <BrowserRouter>
        <PodcastCard podcast={mockPodcastData} key="randomKey" />
      </BrowserRouter>
    );
    const card = screen.getByText(/Artist 1/);
    fireEvent.click(card);
    expect(mockedUseNavigate).toHaveBeenCalled();
  });
});
