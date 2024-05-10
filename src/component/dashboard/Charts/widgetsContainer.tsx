import React, { useEffect, type ReactNode } from 'react';

interface IProps {
  isToggle: boolean;
  containerClassNamesAfterToggle?: string;
  children?: ReactNode;
  rightCol?: ReactNode;
}

export const WidgetsContainer = ({ isToggle, children, containerClassNamesAfterToggle, rightCol }: IProps) => {
  useEffect(() => {
    const widgetContainer = document.getElementById('widget-container');
    if (widgetContainer) {
      widgetContainer.scroll({ top: 0 });
    }
  }, [children]);

  return (
    <div
      className={`overflow-hidden rounded-l-lg h-full transition-all flex ${
        isToggle ? containerClassNamesAfterToggle : 'w-[380px]'
      } shrink-0`}
    >
      {children && !isToggle && (
        <div
          id='widget-container'
          className='relative grow overflow-y-auto bg-card h-full px-3 py-6 border-r-[1px] border-r-accent scroll-smooth'
        >
          {children}
        </div>
      )}

      {rightCol && <div className='shrink-0 h-full overflow-hidden overflow-y-auto'>{rightCol}</div>}
    </div>
  );
};

export default WidgetsContainer;
