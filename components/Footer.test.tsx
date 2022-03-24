import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { socialLogos } from './Footer';

describe('Footer', () => {
  it('renders the component correctly', () => {
    render(<Footer />);

    const footerMsg = screen.getByText('Creado con amor por Mini Code Lab');
    expect(footerMsg).toBeVisible();

    socialLogos.forEach((logo) => {
      expect(screen.getByAltText(logo.alt)).toBeVisible();
    });
  });
});
