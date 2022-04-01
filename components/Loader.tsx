import React from 'react';
import flask from 'public/images/mini-flask.png';
import Image from 'next/image';
import styled from '@emotion/styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      Cargando...
      <Spinning>
        <Image src={flask} alt="loader" width={24} height={24} />
      </Spinning>
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  color: var(--color-paragraph);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    transition: transform 1s ease-in;
  }
`;

export const Spinning = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-name: spin;
  height: 24px;
  width: 24px;
`;

export default Loader;
