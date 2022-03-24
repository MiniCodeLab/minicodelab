import { render, screen } from '@testing-library/react';
import Footer from './Footer';

const socialLogosAlts = [
  'logo github',
  'logo linkedin',
  'logo instagram',
  'logo tik-tok',
  'logo twitch',
  'logo youtube',
  'logo twitter'
];

describe('Footer', () => {
  it('renders the component correctly', () => {
    render(<Footer />);

    const footerMsg = screen.getByText('Creado con amor por Mini Code Lab');
    expect(footerMsg).toBeVisible();

    socialLogosAlts.forEach((logoAlt) => {
      expect(screen.getByAltText(logoAlt)).toBeVisible();
    });
  });
});
