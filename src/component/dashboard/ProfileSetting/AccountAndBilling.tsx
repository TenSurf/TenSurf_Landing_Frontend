import { useRouter } from 'next/navigation';
import CheckAllIcon from '../../../icons/CheckAllIcon';
import NoEntryIcon from '../../../icons/NoEntryIcon';
import TensurfButton from '../../general/TensurfButton';
import {ROUTE} from '../../../constatns/general.constants';
import CalendarIcon from '../../../icons/CalendarIcon';
import React from 'react';

export const AccountAndBilling = ({ isGetDataLoading, user }: { isGetDataLoading: boolean; user?: any }) => {
  const router = useRouter();
  return (
    <div className='flex flex-col gap-6 p-8 rounded-lg bg-[#000]/40 border-[1px] border-dark-Neutral-7 max-w-[1200px] mt-24 mx-6'>
      {isGetDataLoading ? (
        <div className='rounded-xl bg-dark-Neutral-2 h-20 animate-pulse'></div>
      ) : (
        <>
          <div className='flex flex-col gap-2'>
            <div className='text-[24px] font-bold'>
              {user?.expire_plan_at ? 'Your Subscription Plan' : 'No Active Subscription'}
            </div>
            <div className='flex gap-4 items-center'>
              {user?.expire_plan_at ? (
                <CheckAllIcon className='text-dark-green-400' />
              ) : (
                <NoEntryIcon className='text-dark-red-400' />
              )}
              <div className='text-[18px] font-medium text-dark-Neutral-200'>
                {user?.expire_plan_at
                  ? `Your current premium plan is active and running smoothly. Keep enjoying all the premium features without interruption`
                  : `It looks like you don't have an active premium plan at the moment. Explore our plans and find the one
                    that best suits your trading needs!`}
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <div className='flex justify-between items-center rounded-[10px] border-[1px] border-dark-Neutral-7 bg-dark-Neutral-4 px-4 py-3'>
              <div className='flex flex-col gap-2 '>
                <div className='font-medium text-sm text-dark-Neutral-200'>Current Plan</div>
                <div className='font-bold text-[20px]'>{user?.plan_name}</div>
              </div>
              <TensurfButton onClick={() => router.push(ROUTE.plans)}>Change Plan</TensurfButton>
            </div>
            {user?.expire_plan_at ? (
              <div className='flex gap-1 items-center'>
                <CalendarIcon className='text-dark-Neutral-300' />
                <div className='text-dark-Neutral-200 text-sx'>
                  Your account will be automatically charged on <strong>{user?.expire_plan_at.replace('T', ' ').replace('Z', '')}</strong> for the renewal
                </div>
              </div>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};
