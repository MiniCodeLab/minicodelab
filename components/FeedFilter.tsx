import useDebounce from 'hooks/useDebounce';
import { useCallback, useEffect, useState } from 'react';
import { Button } from 'styles/ui/Button';
import { PostCover } from 'types/common';
import { deduplicate, mapBy } from 'utils/common';
import {
  FiltersWrapper,
  FeedFilterWrapper,
  Select,
  TextInput,
  FilterButton
} from 'styles/ui/FeedFilter';

const FeedFilter = ({ covers, onChangeCovers }: Props) => {
  const allTags = deduplicate<string>(mapBy<PostCover>(covers, 'tags'));

  const [filtersVisible, setFiltersVisible] = useState<boolean>(true);
  const [tagFilter, setTagFilter] = useState<string>('');
  const [titleFilter, setTitleFilter] = useState<string>('');
  const debouncedTitleFilter = useDebounce<string>(titleFilter, 250);
  const sanitizedTitleFilter = debouncedTitleFilter.trim().toLowerCase();

  const cleanFilters = useCallback(() => {
    setTagFilter('');
    setTitleFilter('');
  }, []);

  useEffect(() => {
    const filteredCovers = covers
      .filter((cover) => (tagFilter ? cover.tags.includes(tagFilter) : true))
      .filter((cover) =>
        sanitizedTitleFilter ? cover.title.toLowerCase().includes(sanitizedTitleFilter) : true
      );

    onChangeCovers(filteredCovers);
  }, [tagFilter, sanitizedTitleFilter, covers, onChangeCovers]);

  useEffect(() => {
    function filterVisibleHandler() {
      if (window.innerWidth > 840) {
        setFiltersVisible(true);
      }
    }

    window.addEventListener('resize', filterVisibleHandler);

    return () => {
      window.removeEventListener('resize', filterVisibleHandler);
    };
  }, []);

  return (
    <FeedFilterWrapper>
      <FilterButton onClick={() => setFiltersVisible(!filtersVisible)}>
        {filtersVisible ? 'Esconder' : 'Mostrar'} filtros {filtersVisible ? '🙈' : '🧐'}
      </FilterButton>

      {filtersVisible ? (
        <FiltersWrapper>
          <label>
            <p>Filtrar por tag o tecnología 🔖</p>

            <Select value={tagFilter} onChange={(e) => setTagFilter(e.target.value)}>
              <option value="">-</option>

              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </Select>
          </label>

          <label>
            <p>Filtrar por nombre de artículo 🔎</p>

            <TextInput
              type="text"
              value={titleFilter}
              onChange={(e) => setTitleFilter(e.target.value)}
            />
          </label>

          <FilterButton onClick={cleanFilters}>Limpiar Filtros ❌</FilterButton>
        </FiltersWrapper>
      ) : null}
    </FeedFilterWrapper>
  );
};

export type Props = {
  covers: PostCover[];
  onChangeCovers: (_: PostCover[]) => void;
};

export default FeedFilter;
