const InputPasswordHint = ({
  validation
}: {
  validation: { minLength: number; minLowercase: number; minUppercase: number; minNumbers: number; minSymbols: number };
}) => {
  return (
    <div className='mt-2 text-xs flex flex-col gap-1 text-dark-Neutral-100 '>
      <div>Requirements:</div>
      <div className='flex flex-col gap-1 '>
        <div
          className={`flex items-center gap-1 ${
            validation?.minLength === 1 ? 'text-green-500' : 'text-dark-Neutral-100'
          }`}
        >
          <div
            className={`w-[8px] h-[8px] rounded-full shrink-0    ${
              validation?.minLength === 1 ? 'bg-green-500' : 'bg-[#8F8F8F]'
            } `}
          ></div>
          At least 8 characters
        </div>

        <div
          className={`flex items-center gap-1 ${
            validation?.minLowercase === 1 && validation?.minUppercase === 1
              ? 'text-green-500'
              : 'text-dark-Neutral-100'
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full  ${
              validation?.minLowercase === 1 && validation?.minUppercase === 1 ? 'bg-green-500' : 'bg-[#8F8F8F]'
            } `}
          ></div>
          Lower & Uppercase
        </div>

        <div
          className={`flex items-center gap-1 ${
            validation?.minNumbers === 1 && validation?.minSymbols === 1 ? 'text-green-500' : 'text-dark-Neutral-100'
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full  ${
              validation?.minNumbers === 1 && validation?.minSymbols === 1 ? 'bg-green-500' : 'bg-[#8F8F8F]'
            } `}
          ></div>
          Number & Symbol
        </div>
      </div>
    </div>
  );
};

export default InputPasswordHint;
