import { useRouter } from 'next/router';
import { TenSurfLogoAndTitle } from '../../component/landing/TenSurfLogoAndTitle';
import { Menu, MenuItem } from '@mui/material';
import { ROUTE } from '../../constatns/general.constants';
import { useCheckAuthenticationContext } from '../../contexts/CheckAuthentication.context';
import { removeToken } from '../../helpers/auth';
import SignOutIcon from '../../icons/SignOutIcon';
import { type MouseEvent, useState } from 'react';
import TensurfButton from '../../component/general/TensurfButton';
import UserIcon from '../../icons/UserIcon';
import ChartIcon from '../../icons/ChartIcon';

export function PrivateHeader() {
  const router = useRouter();
  // const { setIsAuthenticated, userProfileData, setUserProfileData } = useCheckAuthenticationContext();
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [shouldProfileMenuOpen, setShouldProfileMenuOpen] = useState(false);

  const openProfileMenuHandler = (event: MouseEvent<HTMLButtonElement>) => {
    setProfileMenuAnchorEl(event.currentTarget);
    setShouldProfileMenuOpen(true);
  };

  return (
    <div className='p-4 px-24 w-full m-auto h-20 flex justify-between bg-[#121212] shadow-default2'>
      <TenSurfLogoAndTitle />
      <div className='flex items-stretch gap-6'>
        {/* ============ ES/NG Toggle ============ */}
        {/* <div className='flex items-center p-1 '> */}
        {/*  <ToggleButtonGroup */}
        {/*    color='primary' */}
        {/*    exclusive */}
        {/*    aria-label='Platform' */}
        {/*    className='dark:border-strokedark dark:bg-boxdark dark:text-white' */}
        {/*  > */}
        {/*    <ToggleButton className='dark:text-white' value='ES'> */}
        {/*      ES */}
        {/*    </ToggleButton> */}
        {/*    <ToggleButton className='dark:text-white' value='NQ'> */}
        {/*      NQ */}
        {/*    </ToggleButton> */}
        {/*  </ToggleButtonGroup> */}
        {/* </div> */}

        {/* ============ Time Frame Toggle ============ */}
        <div className='w-80 bg-black rounded-md '></div>
      </div>

      <div className='flex items-center gap-4 w-32'>
        <TensurfButton
          onClick={event => openProfileMenuHandler(event)}
          variant={'text'}
          customClassName=' text-white  gap-1 w-full'
        >
          <UserIcon />
          {/* <div>{userProfileData?.full_name}</div> */}
        </TensurfButton>
        <Menu
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: '#060A19',
              color: 'white',
              width: '200px',
              borderRadius: '8px'
            }
          }}
          id='basic-menu'
          anchorEl={profileMenuAnchorEl}
          open={shouldProfileMenuOpen}
          onClose={() => setShouldProfileMenuOpen(false)}
          MenuListProps={{
            'aria-labelledby': 'basic-button'
          }}
        >
          <MenuItem
            onClick={() => {
              setShouldProfileMenuOpen(false);
              router.push(ROUTE.comming);
            }}
            className='gap-1 hover:!text-dark-primary-400 !font-Inter !font-medium !font-sm !p-3'
          >
            <ChartIcon />
            <div>Chart</div>
          </MenuItem>
          <MenuItem
            className='gap-1 hover:!text-dark-primary-400 !p-3 !font-Inter !font-medium !font-sm'
            onClick={() => {
              setShouldProfileMenuOpen(false);
              router.push(ROUTE.profileSetting);
            }}
          >
            Profile Setting
          </MenuItem>
          <MenuItem
            onClick={() => {
              setShouldProfileMenuOpen(false);
              router.push(ROUTE.profileBilling);
            }}
            className='gap-1 hover:!text-dark-primary-400 !font-Inter !font-medium !font-sm !p-3'
          >
            Account and Billing
          </MenuItem>
          <div className='h-[1px] w-full bg-dark-Neutral-6 mt-8'></div>
          <MenuItem
            className='gap-1 hover:!text-dark-primary-400 !font-Inter !font-medium !font-sm !p-3'
            onClick={() => {
              setShouldProfileMenuOpen(false);
              // setUserProfileData(undefined);

              removeToken();
              // setIsAuthenticated(false);
            }}
          >
            <SignOutIcon />
            <div>Signout</div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
