import ArrowUpIcon from '../../../icons/ArrowUpIcon';
import React, { type FC, type ReactNode, useEffect, useRef, useState } from 'react';

interface IProps {
  icon?: ReactNode;
  title?: string;
  children: ReactNode;
  canOpen?: boolean;
  onClick?: VoidFunction;
  shouldOpen?: boolean;
  shouldClose?: boolean;
  isDisabled?: boolean;
  hasEvent?: boolean;
}

export const AccordionItem: FC<IProps> = ({
  icon,
  title,
  children,
  canOpen = true,
  shouldOpen = false,
  shouldClose = false,
  isDisabled = false,
  onClick = () => {},
  hasEvent = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpenBody, setIsOpenBody] = useState(false);
  useEffect(() => {
    if (shouldOpen) {
      setIsOpenBody(true);
    } else if (shouldClose) {
      setIsOpenBody(false);
    }
  }, [shouldOpen, shouldClose]);

  const onClickHandler = () => {
    setIsOpenBody(prev => !prev);

    onClick();
    if (!isOpenBody) {
      setTimeout(function () {
        containerRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  const contentRef = useRef<HTMLDivElement>(null);

  // *.*.*.* Return *.*.*.*.*.*.*.*.*.*.*.*.*.*.**.*.::=>>>
  return (
    <div ref={containerRef} className={`w-full  overflow-hidden flex flex-col gap-3`}>
      {/* ============ header/button ============ */}
      <div
        onClick={onClickHandler}
        className={`cursor-pointer flex   ${canOpen ? 'justify-between' : 'justify-center'} items-center rounded-lg ${
          hasEvent ? 'animate-eventBgColor' : 'bg-gray-2 '
        } ${title && canOpen ? 'p-2 px-4 ' : !isOpenBody ? 'h-14 w-14m-auto' : ' w-full  h-12'} `}
      >
        {(icon || title) && (
          <div className='flex items-center gap-2'>
            {icon && icon}
            {title && <div>{title}</div>}
          </div>
        )}
        {canOpen && <ArrowUpIcon className={`transition-all text-primary ${isOpenBody ? 'rotate-180' : ''}`} />}
      </div>

      {/* ============ body ============ */}
      {canOpen && (
        <div
          style={{ height: isOpenBody ? `${contentRef?.current?.clientHeight}px` : '0px' }}
          className={`transition-all scrollable max-h-fit  duration-300 ${isOpenBody ? '' : '-mt-3'}`}
        >
          <div
            ref={contentRef}
            className={`scrollable transition-all h-fit duration-500 ${isOpenBody ? 'opacity-100' : 'opacity-0'}`}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
