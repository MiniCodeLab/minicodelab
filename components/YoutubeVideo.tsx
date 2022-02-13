import styled from '@emotion/styled';

const YoutubeVideo: React.FC<Props> = ({ url }) => {
  return (
    <IframeWrapper
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      frameBorder="0"
      height="315"
      src={url}
      title="YouTube video player"
      width="560"
    />
  );
};

export type Props = {
  url: string;
};

export const IframeWrapper = styled.iframe`
  display: block;
`;

export default YoutubeVideo;
