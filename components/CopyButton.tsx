import styled from '@emotion/styled';
import useCopy from 'hooks/useCopy';
import Image from 'next/image';
import copyIcon from 'public/images/copy.svg';
import { toast } from 'react-toastify';

const showToast = () => {
  toast.info('¡Código copiado!', {
    autoClose: 2000,
    closeOnClick: true,
    draggable: false,
    hideProgressBar: true,
    pauseOnHover: false,
    position: 'bottom-right'
  });
};

const CopyButton = ({ text }: Props) => {
  const [, copy] = useCopy();

  return (
    <StyledButton
      onClick={() => {
        copy(text).then(() => {
          showToast();
        });
      }}
    >
      <Image src={copyIcon} alt="copy" width={24} height={24} />
    </StyledButton>
  );
};

export type Props = {
  text: string;
};

const StyledButton = styled.button`
  background: var(--code-block);
  position: absolute;
  right: 10px;
  top: 10px;

  img {
    filter: invert(0.75);
  }

  &:hover {
    cursor: pointer;

    img {
      filter: invert(1);
    }
  }
`;

export default CopyButton;
