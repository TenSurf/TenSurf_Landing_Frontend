import { useRouter } from 'next/navigation';
import { ROUTE } from '../../constatns/general.constants';

const logoSrc = '/images/logo/tenSurfMainLogo.jpg';
export const TenSurfLogoAndTitle = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(ROUTE.home)} className='flex items-center gap-3 cursor-pointer '>
      <img src={logoSrc} className='h-11 w-11  rounded-md' alt={'Tensurf logo'} />
      <div className='text-[24px] font-bold'>
        TenSurf Hub <span className='text-sm text-[#7D7D7D]'>V 1.0.2</span>
      </div>
    </div>
  );
};
