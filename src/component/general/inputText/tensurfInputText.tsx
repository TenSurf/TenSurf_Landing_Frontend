import {
  type ChangeEvent,
  type ClipboardEvent,
  forwardRef,
  type KeyboardEvent,
  type ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import { CircularProgress } from '@mui/material';
import { inputCurrencyFormatter } from '../../../utils/inputCurrencyFormatter';

interface IProps {
  label?: string;
  isLoading?: boolean;
  prefix?: ReactNode;
  isRequired?: boolean;
  value?: string;
  isMultiLine?: boolean;
  maxChar?: number;
  shouldAutoFocus?: boolean;
  shouldShowRemainingChars?: boolean;
  isDisabled?: string | true | undefined;
  placeholder?: string;
  leftItem?: ReactNode;
  rightItem?: ReactNode;
  onClick?: (event: object) => void;
  onChange?: (event: string | ChangeEvent<Element>) => void;
  onBlur?: (event: object) => void;
  onFocus?: (event: object) => void;
  rightItemOnClick?: () => void;
  leftItemOnClick?: () => void;
  customClassName?: { hint?: string; labelAndInputContainer?: string; container?: string; input?: string };
  hasError?: boolean;
  hint?: ReactNode;
  type?: 'text' | 'number' | 'currency' | 'password';
  size?: 'small' | 'medium' | 'large';
  name?: string;
  shouldPreventFloat?: string;
  errorMessage?: ReactNode;
  shouldAutoSelectAllOnClick?: boolean;
  onPaste?: (event: ClipboardEvent) => void;
  onKeyUp?: (event: KeyboardEvent) => void;
  hasNoPadding?: boolean;
  autoComplete?: string;
  rows?: number
}

export const TensurfInputText = forwardRef(
  (
    {
      label,
      isLoading,
      prefix,
      isRequired,
      value,
      isMultiLine,
      maxChar,
      shouldAutoFocus,
      shouldShowRemainingChars,
      isDisabled,
      placeholder,
      leftItem,
      rightItem,
      onChange,
      onBlur,
      onFocus,
      rightItemOnClick,
      leftItemOnClick,
      customClassName,
      hasError,
      hint,
      type,
      size,
      name,
      shouldPreventFloat,
      errorMessage,
      shouldAutoSelectAllOnClick,
      onClick,
      onPaste,
      onKeyUp,
      hasNoPadding = false,
      autoComplete,
      rows
    }: IProps,
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const texAreaRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(
      ref,
      () => {
        return {
          focus() {
            if (!isMultiLine) {
              inputRef?.current?.focus();
            } else {
              texAreaRef?.current?.focus();
            }
          },
          scrollIntoView() {
            if (!isMultiLine) {
              inputRef?.current?.scrollIntoView();
            } else {
              texAreaRef?.current?.scrollIntoView();
            }
          }
        };
      },
      []
    );

    const isCurrencyType = type === 'currency';
    const isNumberType = type === 'number';

    const onClickHandler = (event: any) => {
      setTimeout(() => {
        if (shouldAutoSelectAllOnClick) {
          event?.target?.select();
        }
      }, 100);
    };

    const divRef = useRef<HTMLDivElement>(null);
    const handleMouseWheel = (event: Event) => {
      event.preventDefault();
    };

    useEffect(() => {
      if (isLoading || isDisabled) {
        onBlurHandler();
      }
    }, [isLoading, isDisabled]);

    useEffect(() => {
      if (type === 'number') {
        divRef.current?.addEventListener('wheel', handleMouseWheel, {
          passive: false
        });
      }

      return () => {
        if (type === 'number') {
          divRef.current?.removeEventListener('wheel', handleMouseWheel);
        }
      };
    }, []);
    const [isFocused, setIsFocused] = useState(false);

    const onfocusHandler = () => {
      setIsFocused(true);
    };
    const onBlurHandler = () => {
      setIsFocused(false);
    };

    const hintAndErrorMessageRenderer = () => {
      const inputValueLength = value?.length || inputRef?.current?.value?.length || 0;

      if (errorMessage) {
        return (
          <div className='flex justify-between gap-2 min-h-[20px]'>
            <div className='mt-1 text-xs text-primary-300'>{errorMessage}</div>
          </div>
        );
      }
      return (
        (hint || (maxChar && shouldShowRemainingChars)) && (
          <div className={`flex justify-between gap-2 min-h-[20px] ${customClassName?.hint || ''}`}>
            <div className={`mt-1 text-xs `}>{hint}</div>
            {isCurrencyType
              ? null
              : shouldShowRemainingChars && (
                  <div className='mt-1 text-xs text-neutral-100'>{maxChar && inputValueLength + '/' + maxChar}</div>
                )}
          </div>
        )
      );
    };

    // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓

    return (
      <div
        className={`  text-sm flex flex-col  ${customClassName?.container ? customClassName?.container : ''}`}
        ref={divRef}
      >
        {(label || isRequired) && (
          <div className='font-medium flex gap-2 text-base text-white mb-2'>
            <div>{label}</div>
            {isRequired && <div className='text-white'>*</div>}
          </div>
        )}

        <div className='w-full flex flex-col'>
          <div
            className={`flex justify-between border-[#505050] bg-[#313131] items-center gap-2 relative border-[.5px] transition-all ease-in ${
              hasNoPadding ? '!p-0' : ''
            } ${isDisabled ? 'bg-dark-Neutral-4 text-dark-Neutral-8' : 'bg-dark-Neutral-4 text-dark-Neutral-0'} ${
              !isMultiLine
                ? size === 'small'
                  ? 'px-3 h-10'
                  : size === 'large'
                    ? 'px-5 h-16'
                    : 'px-4 h-14'
                : 'py-2 px-3'
            } rounded-lg w-full  ${hasError ? 'border-red-400' : ''} ${
              isFocused && !isDisabled ? (hasError ? 'border-dark-red-400' : 'border-dark-primary-400') : ''
            } ${customClassName?.labelAndInputContainer || ''} `}
          >
            {isLoading && (
              <div className=' absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full flex justify-center items-center'>
                <CircularProgress className={`!h-[18px] !w-[18px] !text-primary-300`} />
              </div>
            )}
            {(leftItem && !isMultiLine) || (isMultiLine && !value) ? (
              <div
                className={`shrink-0 font-medium ${size === 'small' ? 'max-h-[16px]' : 'max-h-[24px]'} ${
                  leftItemOnClick && !isDisabled && 'cursor-pointer'
                } ${isMultiLine ? 'self-start' : ''} text-neutral-500 flex items-center justify-center`}
                onClick={!isDisabled ? leftItemOnClick : () => {}}
              >
                {leftItem}
              </div>
            ) : null}
            {!isMultiLine ? (
              <>
                {prefix ? <div className='shrink-0 text-neutral-80 cursor-default'>{prefix}</div> : null}

                <input
                  onClick={event => onClickHandler(event)}
                  autoComplete={autoComplete}
                  onPaste={event => {
                    if (onPaste) {
                      onPaste(event);
                    } else return null;
                  }}
                  onKeyUp={event => {
                    if (onKeyUp) {
                      onKeyUp(event);
                    } else return null;
                  }}
                  className={`${
                    isDisabled ? 'cursor-default' : ''
                  } w-full bg-transparent h-full outline-0 placeholder:text-dark-Neutral-100 text-white ${
                    size === 'small' ? 'py-3' : size === 'large' ? 'py-4' : 'py-3'
                  } ${customClassName?.input || ''}`}
                  type={isCurrencyType ? 'text' : type}
                  autoFocus={shouldAutoFocus}
                  ref={inputRef}
                  name={name}
                  onKeyDown={event => {
                    try {
                      const key = event?.key;
                      if (isNumberType && (key === 'e' || key === 'E' || key === '+' || key === '-')) {
                        event.preventDefault();
                      }
                    } catch (error) {}
                  }}
                  value={
                    isCurrencyType
                      ? inputCurrencyFormatter(value)
                      : maxChar
                        ? value?.toString()?.slice(0, maxChar)
                        : value
                  }
                  maxLength={maxChar || 100}
                  onChange={event => {
                    if (isNumberType) {
                      const parsedValue = !shouldPreventFloat
                        ? event.target.value.replace(/[^0-9.]/g, '').slice(0, maxChar)
                        : event.target.value.replace(/[^0-9]/g, '').slice(0, maxChar);
                      if (onChange) {
                        onChange(parsedValue);
                      }
                    } else if (isCurrencyType) {
                      let parsedValue = !shouldPreventFloat
                        ? event.target.value.replace(/[^0-9.]/g, '')
                        : event.target.value.replace(/[^0-9]/g, '');
                      if (isCurrencyType && parsedValue?.toString()?.includes('.')) {
                        let decimal = parsedValue?.split('.')[1];
                        decimal = decimal?.substring(0, 2);
                        const int = parsedValue?.split('.')[0];
                        parsedValue = int + '.' + decimal;
                      }

                      if (onChange) {
                        onChange(parsedValue);
                      }
                    } else {
                      if (onChange) {
                        onChange(event);
                      }
                    }
                  }}
                  disabled={isDisabled ? true : undefined}
                  onBlur={event => {
                    if (onBlur) {
                      onBlur(event);
                    }
                    onBlurHandler();
                  }}
                  onFocus={event => {
                    if (onFocus) {
                      onFocus(event);
                    }
                    onfocusHandler();
                  }}
                  placeholder={placeholder}
                />

                {rightItem ? (
                  <div
                    className={`shrink-0 font-medium ${size === 'small' ? 'max-h-[16px]' : 'max-h-[24px]'} ${
                      rightItemOnClick && !isDisabled ? 'cursor-pointer' : ''
                    } text-neutral-500 flex items-center justify-center`}
                    onClick={!isDisabled ? rightItemOnClick : () => {}}
                  >
                    {rightItem}
                  </div>
                ) : null}
              </>
            ) : (
              <textarea
                autoFocus={shouldAutoFocus}
                className={` w-full bg-transparent h-full outline-0  ${customClassName?.input || ''}`}
                ref={texAreaRef}
                name={name}
                rows={rows}
                value={maxChar ? value?.toString()?.slice(0, maxChar) : value}
                maxLength={maxChar || 1000}
                onChange={event => {
                  if (onChange) {
                    onChange(event);
                  }
                }}
                disabled={isDisabled ? true : undefined}
                onBlur={event => {
                  if (onBlur) {
                    onBlur(event);
                  }
                  onBlurHandler();
                }}
                onFocus={event => {
                  if (onFocus) {
                    onFocus(event);
                  }
                  onfocusHandler();
                }}
                placeholder={placeholder}
              />
            )}
          </div>

          {hintAndErrorMessageRenderer()}
        </div>
      </div>
    );
  }
);

TensurfInputText.displayName = 'InputText';

export default TensurfInputText;
