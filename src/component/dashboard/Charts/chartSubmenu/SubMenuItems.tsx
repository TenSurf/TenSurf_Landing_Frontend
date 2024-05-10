import { type MouseEvent, useState } from 'react';
import { Menu } from '@mui/material';
import TensurfButton from '../../../general/TensurfButton';
import ArrowUpIcon from '../../../../icons/ArrowUpIcon';

interface IProps {
  Data: any;
}

// *.*.*.*.*.*.*.*.*.*.* Main Function ↓•↓•↓
export const SubMenuItems = ({ Data }: IProps) => {
  const [shouldOpenSubmenu, setShouldOpenSubmenu] = useState(false);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState<null | HTMLElement>(null);

  const openSubMenuHandler = (event: MouseEvent<HTMLButtonElement>) => {
    setSubMenuAnchorEl(event.currentTarget);
    setShouldOpenSubmenu(true);
  };

  // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
  return (
    <div className='w-full'>
      <div className='px-2 w-full'>
        <TensurfButton
          size='large48'
          customClassName={'w-full !justify-between'}
          variant={'text'}
          textColor={'text-white'}
          onClick={event => openSubMenuHandler(event)}
        >
          {Data.label}
          {Data.items && (
            <ArrowUpIcon className={`transition-all  ${shouldOpenSubmenu ? '-rotate-90' : 'rotate-90'} `} />
          )}
        </TensurfButton>
      </div>

      <Menu
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: '#23242b',
            color: 'white',
            borderRadius: '8px'
          }
        }}
        id='basic-menu'
        anchorEl={subMenuAnchorEl}
        open={shouldOpenSubmenu}
        onClose={() => setShouldOpenSubmenu(false)}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        {Data.items?.map((submenu: any, index: any) => (
          <div key={index} className='px-2'>
            <TensurfButton
              variant={'text'}
              customClassName={'w-full !justify-start hover:!bg-slate-900'}
              size='large48'
              textColor={'text-white'}
              onClick={() => {
                setShouldOpenSubmenu(false);
              }}
            >
              {submenu.label}
            </TensurfButton>{' '}
          </div>
        ))}
      </Menu>
    </div>
  );
};
