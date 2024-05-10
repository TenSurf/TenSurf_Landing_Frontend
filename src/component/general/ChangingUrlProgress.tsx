// import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

export const ChangingUrlProgress = () => {
  const [isUrlChangingDone, setIsUrlChangingDone] = useState(true);
  // const router = useRouter();
  // const currentUrl = router.pathname;
  // useEffect(() => {
  //   router.events.on('routeChangeStart', newUrl => {
  //     if (isUrlChangingDone && newUrl !== currentUrl) {
  //       setIsUrlChangingDone(false);
  //     }
  //   });

  //   router.events.on('routeChangeComplete', () => {
  //     setIsUrlChangingDone(true);
  //   });

  //   router.events.on('routeChangeError', () => {
  //     setIsUrlChangingDone(true);
  //   });
  // }, [currentUrl]);

  // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
  return (
    !isUrlChangingDone && (
      <div className='fixed top-0 right-0 w-full z-[999] flex justify-end p-4'>
        <CircularProgress className='!w-5 !h-5' />
      </div>
    )
  );
};

export default ChangingUrlProgress;
