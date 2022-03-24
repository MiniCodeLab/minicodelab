import { getFormattedDate, sortByDate, getMetaAuthor } from './common';

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
      tag: '@johndoe',
      link: 'https://twitter.com/johndoe'
    };
    expect(getMetaAuthor(author)).toBe(author.tag);
  });
  it('should return the tag', () => {
    const authors = [
      {
        link: 'https://twitter.com/johndoe',
        tag: '@johndoe'
      },
      {
        link: 'https://twitter.com/janedoe',
        tag: '@janedoe'
      }
    ];
    expect(getMetaAuthor(authors)).toContain(authors[0].tag);
  });
});
