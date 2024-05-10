import {GLOSSARY, PRIVACY_POLICY} from '../../constatns/privacyPolicyPage.constants';
import {TENSURF_CONTACT} from '../../constatns/general.constants';

// *.*.*.*.*.*.*.*.*.*.* Main Function ↓•↓•↓
export const PrivacyPolicy = () => {
    const descriptionClass = 'text-base font-medium text-dark-Neutral-200';
    // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
    return (
        <div className='flex flex-col my-[120px] max-w-[1200px] px-8'>
            <div className='flex flex-col gap-2 mb-12'>
                <div className='flex flex-col gap-1'>
                    <div className='pageTitle mb-3'>
                        <h1 className={'text-4xl md:text-5xl 2xl:text-6xl text-center md:text-left'}>{PRIVACY_POLICY.mainTitle}</h1>
                    </div>
                </div>
                <div className={descriptionClass}>
                    <p className={'text-base font-light'}>{PRIVACY_POLICY.description}</p>
                </div>
            </div>

            <div className='flex flex-col gap-8'>
                <div className='text-[36px] font-bold text-dark-Neutral-400'>
                    <h2 className={'text-2xl lg:text-3xl 2xl:text-4xl'}>{PRIVACY_POLICY.bodyTitle}</h2>
                </div>
                <div className='flex flex-col gap-16'>
                    {PRIVACY_POLICY.items.map((item, index) => (
                        <div key={index} className='flex flex-col'>
                            <div className=' flex flex-col gap-3'>
                                <div className='flex flex-col gap-1'>
                                    <div className='text-[24px] font-semibold text-dark-Neutral-400 mb-2'>
                                        <h3 className={'text-xl lg:text-2xl 2xl:text-3xl'}>
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className={descriptionClass}>
                                        <p className={'text-base font-light'}>{item.description}</p>
                                    </div>
                                </div>
                                <div>
                                    {item?.hedLines?.map((headLine, index) => (
                                        <div key={index} className={`flex gap-3 ${descriptionClass}`}>
                                            {item.title.includes('Contact') ? null : <span>•</span>}
                                            {headLine.includes('Email') ? (
                                                <a href={TENSURF_CONTACT.mailToLink} className='hover:underline'>
                                                    {headLine}
                                                </a>
                                            ) : (
                                                headLine
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col gap-8'>
                <div className='text-[36px] font-bold text-dark-Neutral-400'>
                    <h2 className={'text-2xl lg:text-3xl 2xl:text-4xl'}>{GLOSSARY.title}</h2>
                </div>
                <div className='flex flex-col gap-16'>
                    {GLOSSARY.items.map((item, index) => (
                        <div key={index} className='flex flex-col'>
                            <div className=' flex flex-col gap-3'>
                                <div className='flex flex-col gap-1'>
                                    <div className='text-[24px] font-semibold text-dark-Neutral-400'>
                                        <h3 className={'text-xl lg:text-2xl 2xl:text-3xl'}>
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className={descriptionClass}>
                                        <p className={'text-base font-light'}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    {item?.hedLines?.map((headLine, index) => (
                                        <div key={index} className={`flex gap-3 ${descriptionClass}`}>
                                            {item.title.includes('Contact') ? null : <span>•</span>}
                                            {headLine.includes('Email') ? (
                                                <a href={TENSURF_CONTACT.mailToLink} className='hover:underline'>
                                                    {headLine}
                                                </a>
                                            ) : (
                                                headLine
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
