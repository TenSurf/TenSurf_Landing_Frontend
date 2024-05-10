import Container from '../styles';
import type ILayoutProps from '../types';
import { type FC } from 'react';
import { PrivateHeader } from './PrivateHeader';

const PrivateContentLayout: FC<ILayoutProps> = props => {
  return (
    <Container title={props.title || ''} id='pama-layout' className='dark:bg-boxdark-2 dark:text-bodydark !font-Inter'>
      <div className='h-screen overflow-hidden font-Inter  flex flex-col gap-4 bg-surface-light-bg dark:bg-boxdark-2 '>
        {/* ============ Header ============ */}
        <PrivateHeader />

        {/* <!-- ===== Main Content Start ===== --> */}
        <main className='grow overflow-hidden !font-Inter'>
          <div className='mx-auto h-full  dark:text-bodydark !font-Inter'>{props.children}</div>
        </main>
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </Container>
  );
};

export default PrivateContentLayout;
