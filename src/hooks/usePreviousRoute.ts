import { useRouter } from 'next/router';
import { useRef } from 'react';

const usePreviousRoute = () => {
  const router = useRouter();

  const ref = useRef<string | null>(null);

  router.events?.on('routeChangeStart', () => {
    ref.current = router.asPath.split('?')[0];
  });

  return ref.current;
};

export default usePreviousRoute;
