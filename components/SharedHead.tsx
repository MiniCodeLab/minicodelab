import Head from 'next/head';

const SharedHead: React.FC<Props> = ({ title = '', icon = '/images/flask.png', children }) => {
  return (
    <Head>
      <title>{`MiniCodeLab /> ${title}`.trim()}</title>
      <link rel="icon" href={icon} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />

      {children}
    </Head>
  );
};

export type Props = {
  title?: string;
  icon?: string;
  children?: React.ReactNode;
};

export default SharedHead;
