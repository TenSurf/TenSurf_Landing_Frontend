import { type MouseEvent, useState } from 'react';
import { Menu } from '@mui/material';
import TensurfButton from '../../../general/TensurfButton';
import { SubMenuItems } from './SubMenuItems';
import ArrowUpIcon from '../../../../icons/ArrowUpIcon';

interface IProps {
  Data: any;
}

// *.*.*.*.*.*.*.*.*.*.* Main Function ↓•↓•↓
export const Menus = ({ Data }: IProps) => {
  const [shouldOpenMenu, setShouldOpenMenu] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);

  const openSubMenuHandler = (event: MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
    setShouldOpenMenu(true);
  };

  // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
  return (
    <div className='w-fit'>
      <div className='px-2'>
        <TensurfButton
          textColor={'text-white'}
          customClassName={'w-full min-w-[96px]'}
          size='large48'
          variant={'text'}
          onClick={event => {
            if (Data.items) {
              openSubMenuHandler(event);
            } else {
              return null;
            }
          }}
        >
          {Data.label}
          {Data.items && <ArrowUpIcon className={`transition-all  ${shouldOpenMenu ? 'rotate-180' : 'rotate-0'} `} />}
        </TensurfButton>
      </div>

      {Data.items ? (
        <Menu
          anchorOrigin={{
            vertical: 5,
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: '#060A19',
              color: 'white',
              borderRadius: '8px'
            }
          }}
          id='basic-menu'
          anchorEl={menuAnchorEl}
          open={shouldOpenMenu}
          onClose={() => setShouldOpenMenu(false)}
          MenuListProps={{
            'aria-labelledby': 'basic-button'
          }}
        >
          {Data.items?.map((submenu: any, index: any) =>
            submenu.items ? (
              <SubMenuItems key={index} Data={submenu} />
            ) : (
              <div key={index} className='px-2'>
                <TensurfButton
                  onClick={() => setShouldOpenMenu(false)}
                  variant={'text'}
                  customClassName={'w-full !justify-start'}
                  textColor={'text-white'}
                  size='large48'
                >
                  {submenu.label}
                </TensurfButton>
              </div>
            )
          )}
        </Menu>
      ) : null}
    </div>
  );
};
