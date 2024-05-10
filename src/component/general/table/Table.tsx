import type { ReactNode } from 'react';

export const Table = ({
  header,
  footer,
  tableTitles,
  children,
  hasBoarder = false
}: {
  header?: ReactNode;
  footer?: ReactNode;
  tableTitles?: any[];
  children: ReactNode;
  hasBoarder?: boolean;
}) => {
  return (
    <div className={`overflow-x-auto scrollable w-full  ${hasBoarder ? 'border-[1px] rounded-lg' : ''}`}>
      {header || null}
      {tableTitles ? (
        <div
          style={{ gridTemplateColumns: `repeat(${tableTitles.length}, minmax(0, 1fr))` }}
          className={`text-[10px]  scrollable bg-light-bg grid  w-full m-auto`}
        >
          {tableTitles?.map((title, index) => (
            <div key={index} className='px-0 py-1 text-centerfont-semibold flex gap-1  items-center justify-center'>
              {title}
            </div>
          ))}
        </div>
      ) : null}
      {children}
      {footer || null}
    </div>
  );
};
