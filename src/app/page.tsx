import Landing from '../component/landing/Landing';
import PageProvider from '../component/general/PageProvider';
import { PAGE_TITLE } from '../constatns/general.constants';

const MainPage = () => {
  return (
    <PageProvider title={PAGE_TITLE.home}>
      <Landing />
    </PageProvider>
  );
};

export default MainPage;
