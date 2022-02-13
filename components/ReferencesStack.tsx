import styled from '@emotion/styled';
import Link from 'next/link';

const ReferencesStack: React.FC<Props> = ({ links }) => {
  return (
    <ReferencesWrapper>
      <h3>Enlaces de interés</h3>

      <ListWrapper>
        {links.map(({ title, type, url }) => {
          const isInternalLink = type === 'internal';
          const NextLinkWrapper = isInternalLink ? Link : 'a';

          return (
            <li key={title}>
              <NextLinkWrapper
                href={url}
                rel={isInternalLink ? '' : 'noopener noreferrer'}
                target={isInternalLink ? '_self' : '_blank'}
              >
                {title}
              </NextLinkWrapper>
            </li>
          );
        })}
      </ListWrapper>
    </ReferencesWrapper>
  );
};

type Props = {
  links: {
    image?: string;
    title: string;
    type: 'external' | 'internal';
    url: string;
  }[];
};

export const ReferencesWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    margin-bottom: var(--spacing-m);
  }
`;

const ListWrapper = styled.ul`
  border-radius: var(--code-radius);
  border: 4px solid var(--color-card-bg);
  width: fit-content;

  > li {
    border-bottom: 4px solid var(--color-card-bg);
    cursor: pointer;
    padding: calc(var(--spacing-m) / 2) var(--spacing-m);

    &:last-child {
      border-bottom: 0;
    }

    &:hover {
      background-color: var(--color-card-bg);
    }

    > a {
      text-decoration: none;
    }
  }
`;

export default ReferencesStack;
