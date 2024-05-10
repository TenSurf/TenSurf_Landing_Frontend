export const AnimateLight = ({ index }: { index?: number }) => {
  return (
    <div className='w-[1px] h-full shrink-0 bg-gradient-to-b from-dark-Neutral-0/10 relative'>
      <div
        className={`absolute -top-56 -right-[2px] w-[5px] h-[200px] bg-dark-primary-400/30 rounded-full animate-topToBottomInfinite ${
          index === 0
            ? ''
            : index === 1
              ? 'myDelay-2000'
              : index === 2
                ? 'myDelay-300'
                : index === 3
                  ? 'myDelay-3000'
                  : index === 4
                    ? 'myDelay-4000'
                    : index === 5
                      ? 'myDelay-2000'
                      : index === 6
                        ? 'myDelay-3000'
                        : index === 7
                          ? 'myDelay-1000'
                          : index === 8
                            ? 'myDelay-6000'
                            : 'myDelay-500'
        } `}
      >
        <div className='relative'>
          <div className='absolute h-[220px] -top-[10px] left-[50%] -translate-x-[50%] w-[20px] bg-dark-primary-400/30 blur-[6px] rounded-full '></div>
        </div>
      </div>
    </div>
  );
};
