import {type FC, type MouseEvent, type ReactNode} from 'react';
import {CircularProgress} from '@mui/material';

interface IProps {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    size?: 'small32' | 'medium40' | 'large48' | 'xLarge56';
    isDisabled?: boolean;
    isLoading?: boolean;
    children: ReactNode;
    customClassName?: string;
    variant?: 'text' | 'outlined' | 'contained';
    textColor?: string;
    bgColor?: string;
    borderColor?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
}

// *.*.*.*.*.*.*.*.*.*.* Main Function ↓•↓•↓
export const TensurfButton: FC<IProps> =
    ({
         children,
         onClick = () => {
         },
         isDisabled = false,
         isLoading = false,
         size = 'medium40',
         customClassName = ' ',
         variant = 'contained',
         textColor,
         bgColor,
         borderColor,
         type
     }) => {
        const isSmall = size === 'small32';
        const isMedium = size === 'medium40';
        const isLarge = size === 'large48';

        const isContained = variant === 'contained';
        const isOutlined = variant === 'outlined';
        // console.log({ isOutlined });

        // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
        return (
            <button
                type={type}
                onClick={
                    isDisabled || isLoading
                        ? () => {
                        }
                        : (event: MouseEvent<HTMLButtonElement>) => {
                            onClick(event);
                        }
                }
                disabled={isDisabled}
                className={`overflow-hidden relative flex gap-2 items-center justify-center transition-all   ${
                    isDisabled ? '' : 'cursor-pointer scale-1 active:scale-90 active:after:scale-1  '
                } ${
                    !isDisabled && !isLoading
                        ? isContained
                            ? ` cursor-pointer  ${bgColor || 'bg-dark-primary-400'} ${textColor || 'text-white bg-[#3861fb]'}`
                            : isOutlined
                                ? `hover:bg-dark-Neutral-5 cursor-pointer border-[1px] ${textColor || 'text-dark-primary-400 '} ${
                                    borderColor || 'border-dark-primary-400'
                                }  `
                                : `hover:bg-dark-Neutral-2 ${textColor || 'text-dark-primary-400 '}`
                        : 'bg-neutral-600 text-neutral-500 cursor-default '
                }  rounded-[4px] ${
                    isSmall
                        ? 'text-xs h-8 py-1 px-4'
                        : isMedium
                            ? 'text-sm font-medium h-10 py-1 px-4'
                            : isLarge
                                ? 'text-sm font-medium h-12 py-2 px-4'
                                : 'text-base font-bold h-14 py-4 px-5'
                } ${customClassName}`}
            >
                {isLoading &&
                    <CircularProgress size={isSmall ? 12 : isMedium ? 14 : 16} className='!text-dark-Neutral-0 '/>}
                {children}
            </button>
        );
    };

export default TensurfButton;