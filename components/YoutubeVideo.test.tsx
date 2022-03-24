import { render, screen } from '@testing-library/react';
import YoutubeVideo from './YoutubeVideo';

describe('YoutubeVideo', () => {
  const url = 'https://www.youtube.com/embed/dQw4w9WgXcQ';
  it('renders the component correctly', () => {
    render(<YoutubeVideo url={url} />);

    const iframeWrapper = screen.getByTestId('iframe-wrapper');
    expect(iframeWrapper).toBeVisible();
  });
});
