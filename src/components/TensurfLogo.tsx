import Image from 'next/image';
import { useRouter } from 'next/router';

export const TensurfLogo = () => {
  return (
    <div className='flex items-center gap-3'>
      <Image src='/logo.png' width={44} height={44} alt='tensurf' className='rounded-lg' />
      <div className='hidden text-[24px] font-bold items-center gap-1 sm:flex'>
        TenSurf Hub
          {/*<span className='text-sm font-normal text-[#A8ADB8]'>beta</span>*/}
      </div>
    </div>
  );
};
