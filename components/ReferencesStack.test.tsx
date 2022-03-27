import { render, screen } from '@testing-library/react';
import ReferencesStack from './ReferencesStack';

describe('ReferencesStack', () => {
  it('renders the component correctly', () => {
    render(
      <ReferencesStack
        links={[
          {
            type: 'internal',
            url: '/feed/react-0-basicos-1',
            title: 'Conceptos básicos de React parte 1'
          },
          {
            type: 'internal',
            url: '/feed/react-0-usememo-usecallback',
            title: 'Hooks useMemo y useCallback al completo'
          }
        ]}
      />
    );

    const title = screen.getByText('Hooks useMemo y useCallback al completo');
    expect(title).toBeVisible();
  });
});
