import { RISK_DISCLOSURE } from '../../constatns/riskDisclosurePage.constants';

// *.*.*.*.*.*.*.*.*.*.* Main Function ↓•↓•↓
export const RiskDisclosure = () => {
    const titleClass = 'text-[24px] font-semibold text-dark-Neutral-400';
    const descriptionClass = 'text-base font-medium text-dark-Neutral-200';
    // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
    return (
        <div className=' flex flex-col gap-10  my-[120px] max-w-[1200px] px-8'>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-1'>
                    <div className='pageTitle'>
                        <h1 className={'text-3xl md:text-4xl 2xl:text-5xl text-center md:text-left'}>{RISK_DISCLOSURE.mainTitle}</h1>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-16'>
                    {RISK_DISCLOSURE.items.map((item, index) => (
                        <div key={index} className='flex flex-col'>
                            <div className=' flex flex-col gap-1'>
                                <div className='flex flex-col gap-1'>
                                    <div className={titleClass}>
                                        <h2 className={'text-xl lg:text-2xl 2xl:text-3xl'}>{item.title}</h2>
                                    </div>
                                    {item.description && <div className={descriptionClass}>
                                        <p className={'text-base font-light'}>{item.description}</p>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RiskDisclosure;
