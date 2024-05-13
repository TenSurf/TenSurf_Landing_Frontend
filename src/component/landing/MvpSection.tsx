import { MVP_SECTION } from '../../constatns/landingPage.constants';
import { GradientShape } from '../general/GradientShape';
import { type RefObject } from 'react';

const MvpItem = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className='h-72 relative z-10 bg-[#000]/40 flex flex-col justify-center items-center gap-4 px-8 py-12 rounded-[24px] border-[1px] border-white/20 max-w-[392px]'>
      <div className='text-[36px] font-semibold'>{title}</div>
      <div className='text-[20px] font-normal'>{description}</div>
    </div>
  );
};

// *.*.*.*.*.*.*.*.*.*.* Main Function ↓•↓•↓
export const MvpSection = ({ productsRef }: { productsRef: RefObject<HTMLDivElement> }) => {
  return (
    <div ref={productsRef} id='Productss' className='relative flex flex-col items-center justify-center gap-10 scroll-m-20 max-w-screen-xl'>
      <div className='text-3xl md:text-4xl lg:text-6xl font-semibold'>{MVP_SECTION.title}</div>
      <div className='flex flex-wrap justify-center items-center gap-6 text-center flex-col md:flex-row'>
        {MVP_SECTION.items.map((item, index: number) => (
          <MvpItem key={index} title={item.title} description={item.description} />
        ))}
      </div>

      <GradientShape />
    </div>
  );
};
