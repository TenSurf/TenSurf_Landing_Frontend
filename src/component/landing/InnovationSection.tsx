import { INNOVATIONS_SECTION } from '../../constatns/landingPage.constants';

export const InnovationSection = () => {
  return (
    <div className='relative flex flex-col items-center gap-10 scroll-m-20 max-w-screen-xl'>
      <div className='text-3xl md:text-4xl lg:text-6xl font-semibold'>{INNOVATIONS_SECTION.title}</div>
      <div className='flex justify-stretch flex-col lg:flex-row gap-16 lg:gap-12'>
        {INNOVATIONS_SECTION.items.map((item, index) => (
          <div key={index} className='flex flex-col gap-4 items-center justify-end text-center'>
            <div className='flex items-end h-64'>
              <item.illustration />
            </div>
            <div className='grid gap-2'>
              <div className='text-xl md:text-xl font-bold'>{item.title}</div>
              <div className='text-sm font-normal text-center'>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
