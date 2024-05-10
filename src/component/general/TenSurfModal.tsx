import MaterialModal from '@mui/material/Modal';
import { type ReactNode } from 'react';

interface IProps {
  isOpen?: boolean;
  shouldCloseByEscape?: boolean;
  shouldCloseByBackDrop?: boolean;
  onClose?: () => void;
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  size?: 'free' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  orient?: 'vertical' | 'horizontal';
  shouldShowFooterDivider?: boolean;
}

const TenSurfModal = ({
  isOpen = false,
  shouldCloseByEscape = false,
  shouldCloseByBackDrop = false,
  onClose = undefined,
  header,
  footer,
  children,
  size = 'md',
  shouldShowFooterDivider = true,
  orient = 'vertical'
}: IProps) => {
  const onCloseHandler = (event: any, reason: string) => {
    // reason Can be: "escapeKeyDown", "backdropClick"
    if (onClose) {
      if (shouldCloseByEscape && reason === 'escapeKeyDown') {
        onClose();
      } else if (shouldCloseByBackDrop && reason === 'backdropClick') {
        onClose();
      }
    }
  };

  let sizeStyle = size === 'md' ? 'w-[560px] h-[480px] md:w-[640px] md:h-[560px] lg:w-[780px] lg:h-[640px]' : 'm-auto';
  if (size === 'xs') {
    sizeStyle = orient === 'horizontal' ? 'w-[480px] h-[280px]' : 'w-[280px] h-[480px]';
  } else if (size === 'sm') {
    sizeStyle = 'w-[560px] h-[480px]';
  } else if (size === 'lg') {
    sizeStyle = 'w-[640px] h-[560px] md:w-[780px] md:h-[640px] lg:w-[1024px] lg:h-[780px]';
  } else if (size === 'xl') {
    sizeStyle = 'w-[640px] h-[560px] md:w-[780px] md:h-[640px] lg:w-[1024px] lg:h-[960px]';
  } else if (size === '2xl') {
    sizeStyle = 'w-[640px] h-[560px] md:w-[780px] md:h-[640px] lg:w-[1366px] lg:h-[1024px]';
  }

  return (
    <MaterialModal
      open={isOpen}
      onClose={onCloseHandler}
      sx={{
        '& :focus': {
          outline: 'none'
        }
      }}
      closeAfterTransition
      slotProps={{
        backdrop: { timeout: 500 }
      }}
      className='bg-[#000]/50 overflow-auto h-full grid justify-center justify-items-center items-center content-center'
    >
      <div className='rounded-3xl mb-10 w-full'>
        <div
          className={`${sizeStyle} animate-scale grid justify-center justify-items-center items-center content-center w-full`}
        >
          <div className='rounded-3xl bg-dark-Neutral-2 flex flex-col font-semibold w-full'>
            {header ? <div className='p-6'>{header}</div> : null}
            <div className={'grow p-6 overflow-visible overflow-y-auto scrollable w-full'}>{children}</div>
            {footer ? (
              <div
                className={`px-6 pb-6 flex flex-col gap-4 relative z-50  ${
                  shouldShowFooterDivider ? 'shadow-[0_-3px_4px_0px_rgba(0,0,0,0.12)]' : ''
                }`}
              >
                <div className='pt-6'>{footer}</div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </MaterialModal>
  );
};

export default TenSurfModal;
