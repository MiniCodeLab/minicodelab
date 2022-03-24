import { render, screen } from '@testing-library/react';
import Footer from './Footer';

const socialLogos = [
  { link: 'https://github.com/MiniCodeLab', src: 'github', alt: 'logo github' },
  { link: 'https://www.instagram.com/minicodelab/', src: 'instagram', alt: 'logo instagram' },
  { link: 'https://www.linkedin.com/in/minicodelab/', src: 'linkedin', alt: 'logo linkedin' },
  { link: 'https://www.twitch.tv/minicodelab', src: 'twitch', alt: 'logo twitch' },
  { link: 'https://twitter.com/minicodelab/', src: 'twitter', alt: 'logo twitter' },
  {
    link: 'https://www.youtube.com/channel/UCN1SyK4zRHbdIO6HptDoDOA',
    src: 'youtube',
    alt: 'logo youtube'
  }
];

const socialBroke = [];

describe('Footer', () => {
  it('renders the component correctly', () => {
    render(<Footer />);

    const footerMsg = screen.getByText('Creado con amor por Mini Code Lab');
    expect(footerMsg).toBeVisible();

    socialLogos.forEach((logo) => {
      expect(screen.getByAltText(logo.alt)).toBeVisible();
    });
  });

  it('renders the component correctly with no social links', () => {
    render(<Footer />);

    const footerMsg = screen.getByText('Creado con amor por Mini Code Lab');
    expect(footerMsg).toBeVisible();

    socialBroke.forEach((logo) => {
      expect(screen.queryByAltText(logo.alt)).not.toBeInTheDocument();
    });
  });
});
