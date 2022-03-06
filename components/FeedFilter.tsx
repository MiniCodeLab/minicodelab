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
  FilterButton,
  SelectWrapper
} from 'styles/ui/FeedFilter';
import Image from 'next/image';
import useResizeCallback from 'hooks/useResizeCallback';

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

  const resizeCb = useCallback(() => {
    if (window.innerWidth > 840) {
      setFiltersVisible(true);
    }
  }, []);
  useResizeCallback(resizeCb);

  return (
    <FeedFilterWrapper>
      <FilterButton onClick={() => setFiltersVisible(!filtersVisible)}>
        {filtersVisible ? 'Esconder' : 'Mostrar'} filtros {filtersVisible ? '🙈' : '🧐'}
      </FilterButton>

      {filtersVisible ? (
        <FiltersWrapper>
          <label>
            <p>Filtrar por tag o tecnología 🔖</p>

            <SelectWrapper>
              <Select value={tagFilter} onChange={(e) => setTagFilter(e.target.value)}>
                <option value="">-</option>

                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </Select>

              <div className="arrow-image">
                <Image
                  alt="arrow-down"
                  height={13.5}
                  src="https://res.cloudinary.com/db38x6luj/image/upload/v1646484086/posts/select-arrow-down.svg"
                  width={20}
                />
              </div>
            </SelectWrapper>
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
