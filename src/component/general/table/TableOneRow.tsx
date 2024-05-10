import { type ReactNode } from 'react';

export const TableOneRow = ({
  oneRowContent = [],
  rowIndex,
  tableRowsLength,
  rowOnClick
}: {
  rowOnClick?: (uuid?: string) => void;
  oneRowContent: ReactNode[];
  rowIndex: number;
  tableRowsLength: number;
}) => {
  return (
    <div
      style={{ gridTemplateColumns: `repeat(${oneRowContent?.length}, minmax(0, 1fr))` }}
      className={`w-full ${rowOnClick ? 'cursor-pointer' : ''} grid m-auto  `}
      onClick={rowOnClick ? () => rowOnClick() : () => {}}
    >
      {oneRowContent?.map((item: any, index: number) => (
        <div
          key={index}
          className={`min-w-fit flex text-xs text-light-400 items-center justify-center px-4 h-10  ${
            rowIndex % 2 !== 0 ? 'bg-light-bg' : ''
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
