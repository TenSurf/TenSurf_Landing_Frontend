import { type ReactNode, useState } from 'react';

interface IProps {
  data: Array<{ content: ReactNode; onClick: () => void }>;
  value?: number;
  isLoading?: boolean;
  isDisabled?: boolean;
}

// *.*.*.*.*.*.*.*.*.*.* Main Function ↓•↓•↓
export const TensurfSegment = ({ data, value = 0, isLoading = false, isDisabled = false }: IProps) => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(value);
  const onButtonGroupClickHandler = (index: number, onClick: VoidFunction) => {
    setSelectedButtonIndex(index);
    onClick();
  };

  // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
  return (
    <div
      className={`relative flex items-center gap-0 justify-between bg-dark-Neutral-4 rounded-lg ${isLoading ? 'animate-pulse' : ''}`}
    >
      {data?.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            if (!isDisabled) {
              onButtonGroupClickHandler(index, item.onClick);
            } else {
              return null;
            }
          }}
          className={`h-full ${isDisabled ? '' : 'cursor-pointer'} relative z-20 p-2 flex items-center justify-center text-center w-[70px]`}
        >
          {item.content}
        </div>
      ))}
      <div
        style={{
          left: selectedButtonIndex === 0 ? 0 : `${70 * selectedButtonIndex}px`
        }}
        className={`transition-all absolute z-10 w-[70px] h-full ${isDisabled ? 'bg-dark-Neutral-200' : 'bg-dark-primary-400'} rounded-[6px]`}
      ></div>

      {isLoading ? <div className='absolute , w-full h-full bg-white/50 z-20 rounded-lg'></div> : null}
    </div>
  );
};
