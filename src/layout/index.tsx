import Container from './styles';
import type ILayoutProps from './types';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const Layout: React.FC<ILayoutProps> = props => {
  return (
    <Container title={props.title || ''} id='pama-layout' className='dark:bg-boxdark-2 dark:text-bodydark !font-Inter'>
      <div className='h-screen overflow-hidden font-Inter  flex flex-col gap-4 bg-surface-light-bg dark:bg-boxdark-2 '>
        {/* ============ Header ============ */}
        <div className='p-4 h-20 flex justify-between bg-white dark:bg-black-2 shadow-default2'>
          <div className='flex items-stretch gap-6'>
            {/* ============ ES/NG Toggle ============ */}
            <div className='flex items-center p-1 '>
              <ToggleButtonGroup
                color='primary'
                exclusive
                aria-label='Platform'
                className='dark:border-strokedark dark:bg-boxdark dark:text-white'
              >
                <ToggleButton className='dark:text-white' value='ES'>
                  ES
                </ToggleButton>
                <ToggleButton className='dark:text-white' value='NQ'>
                  NQ
                </ToggleButton>
              </ToggleButtonGroup>
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
