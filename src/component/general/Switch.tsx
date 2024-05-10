// ****************************************************************
// ===== main function =========================================>>>
import { type FC, useState, useEffect } from 'react';

interface ISwitch {
  onChange?: (isChecked: boolean) => void;
  disabled?: boolean;
  size?: 'small' | 'medium';
  checked?: boolean;
}

// ****************************************************************
// ===== main function =========================================>>>
const Switch: FC<ISwitch> = ({ onChange, disabled, size = 'medium', checked = false }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = () => {
    setIsChecked(!isChecked);
    // console.log({isChecked:!isChecked})
    onChange && onChange(!isChecked);
  };

  // *.*.*.* Return *.*.*.*.*.*.*.*.*.*.*.*.*.*.**.*.::=>>>
  return (
    <label className='flex cursor-pointer items-center'>
      <input type='checkbox' checked={isChecked} onChange={handleChange} className='sr-only' />
      <div
        className={`relative flex items-center  rounded-full ${size === 'medium' ? 'h-6 w-[44px]' : 'h-[18px] w-8'} ${
          disabled
            ? 'bg-neutral-20'
            : isChecked
              ? 'bg-primary hover:bg-primary-400 '
              : 'bg-neutral-300  hover:bg-neutral-400'
        } `}
      >
        <div
          className={`absolute bg-white rounded-full transition-transform ${
            size === 'medium' ? 'h-[18px] w-[18px] ' : 'h-4 w-4'
          }  ${isChecked ? 'translate-x-[22px] ' : 'translate-x-[2px]'}`}
        ></div>
      </div>
    </label>
  );
};

export default Switch;
