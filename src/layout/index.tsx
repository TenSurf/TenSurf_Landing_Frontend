import Container from './styles';
import type ILayoutProps from './types';

const Layout: React.FC<ILayoutProps> = props => {
  return (
    <Container title={props.title || ''} id='pama-layout' className='dark:bg-boxdark-2 dark:text-bodydark !font-Inter'>
      <div className='h-screen overflow-hidden font-Inter  flex flex-col gap-4 bg-surface-light-bg dark:bg-boxdark-2 '>
        {/* ============ Header ============ */}
        <div className='p-4 h-20 flex justify-between bg-white dark:bg-black-2 shadow-default2'>
          <div className='flex items-stretch gap-6'>
            {/* ============ ES/NQ Toggle ============ */}
            <div className='flex items-center p-1 gap-0'>
              <button className='px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-2 focus:ring-primary'>
                ES
              </button>
              <button className='px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-r-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-2 focus:ring-primary -ml-px'>
                NQ
              </button>
            </div>

            {/* ============ Time Frame Toggle ============ */}
            <div className='w-80 bg-surface-light-bg rounded-md'></div>
          </div>

          {/* ============ Current Time ============ */}
          <div className='w-52 bg-surface-light-bg rounded-md'></div>
        </div>

        {/* <!-- ===== Main Content Start ===== --> */}
        <main className='grow overflow-hidden !font-Inter'>
          <div className='mx-auto h-full  dark:text-bodydark !font-Inter'>{props.children}</div>
        </main>
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </Container>
  );
};

export default Layout;
