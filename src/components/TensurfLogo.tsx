import Image from 'next/image';

export const TensurfLogo = () => {
  return (
    <div className='flex items-center gap-3'>
      <Image src='/tensurf.png' width={200} height={67} alt='TenSurf Brain' />
    </div>
  );
};
