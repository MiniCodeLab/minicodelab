import Footer from 'components/Footer';
import Menu from 'components/Menu';
import SharedHead, { Props as SharedHeadProps } from 'components/SharedHead';
import { Navigation } from 'styles/ui/Navigation';
import { PageLayout } from 'styles/ui/PageLayout';

const Layout: React.FC<Props> = ({ children, title, icon, headChildren }) => {
  return (
    <PageLayout>
      <SharedHead icon={icon} title={title}>
        {headChildren}
      </SharedHead>

      <Navigation>
        <Menu />
      </Navigation>

      <main>{children}</main>

      <Footer />
    </PageLayout>
  );
};

export type Props = {
  headChildren?: React.ReactNode;
} & SharedHeadProps;

export default Layout;
