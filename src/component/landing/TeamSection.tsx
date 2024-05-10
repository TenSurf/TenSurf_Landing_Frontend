import { TEAM_SECTION } from '../../constatns/landingPage.constants';
import Image from 'next/image';
import type { RefObject } from 'react';

export const TeamSection = ({ TeamRef }: { TeamRef: RefObject<HTMLDivElement> }) => {
  return (
    <div ref={TeamRef} id='Teams' className='relative flex flex-col items-center gap-10 scroll-m-20 max-w-screen-xl'>
      <div className='text-3xl md:text-4xl lg:text-6xl font-semibold'>{TEAM_SECTION.title}</div>
      <div className='flex flex-col items-center gap-6 md:gap-20 w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-6'>
          {TEAM_SECTION.leaders.map((person, index) => (
            <a href={person.linkedIn} target={'_blank'} key={index} className='flex flex-col gap-5' rel='noreferrer'>
              <Image
                src={person.imgSrc}
                alt={person.name + 'image'}
                className=' rounded-3xl w-full aspect-square'
                loading='lazy'
              />
              <div className='flex flex-col items-center text-center'>
                <div className='text-[20px] font-bold'>{person.name}</div>
                <div className='text-[#D7D7D7] text-sm font-normal'>{person.description}</div>
              </div>
            </a>
          ))}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
          {TEAM_SECTION.persons.map((person, index) => (
            <a
              href={person.linkedIn || undefined}
              target={person.linkedIn ? '_blank' : undefined}
              onClick={event => {
                if (!person.linkedIn) {
                  event.preventDefault();
                }
              }}
              key={index}
              className={`flex flex-col gap-5 ${person.linkedIn ? 'cursor-pointer' : 'cursor-default'}`}
              rel='noreferrer'
            >
              <Image
                src={person.imgSrc}
                alt={person.name + 'image'}
                className='rounded-3xl w-full aspect-square object-cover object-top'
                loading='lazy'
              />
              <div className='flex flex-col items-center text-center'>
                <div className='text-xl font-semibold'>{person.name}</div>
                <div className='text-[#D7D7D7] text-sm font-normal'>{person.description}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
