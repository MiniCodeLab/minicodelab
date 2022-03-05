import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { desktopUp, tabletUp } from 'styles/global';
import { Button } from './Button';

export const FeedFilterWrapper = styled.section`
  ${tabletUp} {
    margin-bottom: var(--spacing-m);
  }

  > button {
    display: block;

    ${tabletUp} {
      display: none;
    }
  }
`;

export const FiltersWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
  justify-content: center;

  > label {
    font-size: var(--title-h3);
    font-weight: bold;
    width: 100%;
  }

  > button {
    align-self: flex-end;
  }

  ${tabletUp} {
    align-items: flex-end;
    flex-direction: row;

    > label {
      max-width: calc(0.75 * var(--card-max-width-mb));
    }
  }

  ${desktopUp} {
    > label {
      max-width: var(--card-max-width-mb);
    }
  }
`;

const inputCss = css`
  border-radius: 4px;
  border: 1px solid var(--color-paragraph);
  font-size: var(--paragraph);
  padding: calc(var(--spacing-m) / 2);
  width: 100%;
`;

export const SelectWrapper = styled.div`
  position: relative;

  .arrow-image {
    pointer-events: none;
    position: absolute;
    right: calc(var(--spacing-m) / 2);
    top: 35%;
  }
`;

export const Select = styled.select`
  ${inputCss}
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  text-transform: capitalize;

  > option {
    padding: 5px;
    text-transform: capitalize;
  }
`;

export const TextInput = styled.input`
  ${inputCss}
  cursor: text;
`;

export const FilterButton = styled(Button)`
  font-size: var(--title-h3);

  &:hover {
    background: var(--color-purple);
  }
`;
