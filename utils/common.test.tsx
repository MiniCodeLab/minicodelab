import { render, screen } from '@testing-library/react';
import { getFormattedDate, sortByDate, getMetaAuthor, getPostAuthor } from './common';

describe('sortByDate', () => {
  it('returns empty array if empty array is passed', () => {
    expect(sortByDate([])).toStrictEqual([]);
  });

  it('returns the sorted array in descending order if an unordered one is passed', () => {
    const mockDates = [
      {
        date: '10/24/2022'
      },
      {
        date: '10/06/2022'
      },
      {
        date: '12/31/2022'
      }
    ];

    expect(sortByDate(mockDates)).toStrictEqual([mockDates[2], mockDates[0], mockDates[1]]);
  });

  it('returns the sorted array in ascending order if an unordered one is passed', () => {
    const mockDates = [
      {
        date: '10/24/2022'
      },
      {
        date: '10/06/2022'
      },
      {
        date: '12/31/2022'
      }
    ];

    expect(sortByDate(mockDates, 'asc')).toStrictEqual([mockDates[1], mockDates[0], mockDates[2]]);
  });
});

describe('getFormattedDate', () => {
  it('should throw an error if an invalid date is passed', () => {
    const invalidDate = '50/00/2002';
    expect(() => {
      getFormattedDate(invalidDate);
    }).toThrow();
  });

  it('should return dates formatted in long format by default', () => {
    const validDate = '02/21/2020';
    expect(getFormattedDate(validDate)).toBe('21 de febrero de 2020');
  });

  it('should return dates formatted in full format if chosen', () => {
    const validDate = '02/21/2020';
    expect(getFormattedDate(validDate, 'full')).toBe('viernes, 21 de febrero de 2020');
  });

  it('should return dates formatted in medium format if chosen', () => {
    const validDate = '02/21/2020';
    expect(getFormattedDate(validDate, 'medium')).toBe('21 feb 2020');
  });

  it('should return dates formatted in short format if chosen', () => {
    const validDate = '02/21/2020';
    expect(getFormattedDate(validDate, 'short')).toBe('21/2/20');
  });
});

describe('getMetaAuthor', () => {
  it('should return the tag', () => {
    const author = {
      link: 'https://twitter.com/johndoe',
      name: 'johndoe',
      tag: '@johndoe'
    };
    expect(getMetaAuthor(author)).toBe(author.tag);
  });

  it('should return the tag', () => {
    const authors = [
      {
        link: 'https://twitter.com/johndoe',
        name: 'johndoe',
        tag: '@johndoe'
      },
      {
        link: 'https://twitter.com/janedoe',
        name: 'janedoe',
        tag: '@janedoe'
      }
    ];

    expect(getMetaAuthor(authors)).toBe(` ${authors[0].tag}, ${authors[1].tag}`);
  });
});

describe.only('getPostAuthor', () => {
  it('should return an array of JSX Elements with the author information', () => {
    const authors = [
      {
        link: 'https://twitter.com/OnePieceAnime',
        name: 'Luffy',
        tag: '@luffy'
      }
    ];

    render(<div>{getPostAuthor(authors)}</div>);

    const authorLink = screen.getByRole('link');
    expect(authorLink).toHaveTextContent(authors[0].tag);
    expect(authorLink).not.toHaveTextContent(authors[0].name);
    expect(authorLink).toHaveAttribute('href', authors[0].link);
  });

  it('should return an array of JSX Elements with all authors names', () => {
    const authors = [
      {
        link: 'https://twitter.com/OnePieceAnime',
        name: 'Luffy',
        tag: '@luffy'
      },
      {
        link: 'https://twitter.com/kimetsu_off',
        name: 'Tanjiro',
        tag: '@tanjiro'
      }
    ];

    render(<div>{getPostAuthor(authors, 'name')}</div>);

    const authorLinks = screen.getAllByRole('link');
    expect(authorLinks).toHaveLength(2);

    authorLinks.forEach((authorLink, idx) => {
      expect(authorLink).not.toHaveTextContent(authors[idx].tag);
      expect(authorLink).toHaveTextContent(authors[idx].name);
      expect(authorLink).toHaveAttribute('href', authors[idx].link);
    });
  });
});
