import { useRouter } from 'next/router';
import LoadingHorizontalDots from '../general/Loading/LoadingHorizontalDots';
import { ROUTE } from '../../constatns/general.constants';

const DashboardHomePage: React.FC = () => {
  const router = useRouter();
  router.push(ROUTE.comming);
  return (
    <>
      <div className='h-full w-full mx-auto p-4 md:p-6 2xl:p-10 '>
        <div className='w-full h-full flex justify-center items-center bg-dark-Neutral-1'>
          <LoadingHorizontalDots />
        </div>
      </div>
    </>
  );
};

export default DashboardHomePage;
