import Head from 'next/head';

import Menu from 'components/Menu';
import { UiMenu } from 'styles/uiComponents/UiMenu';

const Calendar: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Mini Code Lab {'/>'} Calendar</title>
        <link rel="icon" href="/flask.png" />
      </Head>

      <UiMenu>
        <Menu />
      </UiMenu>
      <h1>Calendar</h1>
    </div>
  );
};

export default Calendar;
