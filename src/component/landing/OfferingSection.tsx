import { OFFERING_SECTION } from '../../constatns/landingPage.constants';
import { GradientShape } from '../general/GradientShape';

export const OfferingSection = () => {
  return (
    <div className='flex flex-col gap-10 text-white w-full items-center max-w-screen-xl'>
      <div className='flex flex-col gap-4 text-center'>
        <div className='text-3xl md:text-4xl lg:text-6xl font-semibold'>{OFFERING_SECTION.title}</div>
        <div className='text-md md:text-2xl'>{OFFERING_SECTION.description}</div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20 w-full'>
        {OFFERING_SECTION.items.map((item, index) => (
          <div
            key={index}
            className=' flex flex-col gap-3 rounded-3xl bg-[#121212] hover:bg-[#000]/40 hover:backdrop-blur-md p-8 w-full mx-auto'
          >
            <div className='text-xl md:text-3xl font-bold flex items-center gap-4'>
              <item.icon className='w-9 h-9' />
              <div>{item.title}</div>
            </div>
            <div className='text-base'>{item.description}</div>
          </div>
        ))}

        <div className='absolute -z-10 top-[20%] left-[50%] -translate-x-[50%] w-full scale-[400%]'>
          <GradientShape />
        </div>
      </div>
    </div>
  );
};
