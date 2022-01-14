import Head from 'next/head';

const SharedHead: React.FC<Props> = ({ title = '', icon = '/images/flask.png', children }) => {
  return (
    <Head>
      <title>{`Mini Code Lab /> ${title}`.trim()}</title>
      <link rel="icon" href={icon} />

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
