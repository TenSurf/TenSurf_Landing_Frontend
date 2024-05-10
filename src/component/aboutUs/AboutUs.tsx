import {JOIN_US, OUR_JOURNEY, OUR_MISSION, OUR_TEAM} from '../../constatns/aboutUsPage.constants';
import {GradientShape} from '../general/GradientShape';
import WindowsIllustration from '../../illistrations/WindowsIllustration';
import TrendIllustration from '../../illistrations/TrendIllustration';

// const videoSrc = '/videos/tensurf.ai-journey.mp4';
// const gifSrc = '/videos/tensurf.ai-journey.gif';
// const videoPlaceHolder = '/images/CandleStickChart.webp';

// *.*.*.*.*.*.*.*.*.*.* Main Function ↓•↓•↓
export const AboutUs = () => {
    // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
    return (
        <div className=' flex flex-col gap-[120px] md:gap-[200px] mt-36 mb-[200px] max-w-full px-4 sm:px-16 lg:px-20'>
            <div className='flex flex-col gap-20'>
                <div className='flex flex-col gap-8 p-8 items-center'>
                    <div className='pageTitle text-[46px] md:text-[72px] text-center'>{OUR_JOURNEY.title}</div>
                    <div className='text-dark-neutral-300 text-lg md:text-2xl font-medium text-center'>
                        {OUR_JOURNEY.description}
                    </div>
                </div>
                {/* <img src={gifSrc} alt={''} className='rounded-[24px] max-w-full m-auto' /> */}
            </div>

            <div className='flex flex-col gap-8 items-center'>
                <div className='text-[38px] md:text-[60px] text-center font-semibold'>{OUR_MISSION.title}</div>
                <p className="text-dark-neutral-300 text-lg md:text-2xl font-medium max-w-[989px] text-center">
                    {OUR_MISSION.description}
                </p>
                <div className='relative z-10'>
                    <div className={'grid grid-cols-1 lg:grid-cols-3 justify-center gap-4 relative z-10'}>
                        <div
                            className='flex py-8 px-8 sm:px-28 md:px-24 lg:px-8 md:col-span-1 flex-col items-center bg-[#000]/40 gap-14 lg:gap-0 rounded-[18px]'>
                            <div className='relative z-10 flex flex-col gap-3'>
                                <div
                                    className='relative z-10 text-xl md:text-2xl text-center md:text-left font-bold'>{OUR_MISSION.subtitle2}</div>
                                <div
                                    className='relative z-10 text-center md:text-left text-base font-light md:font-medium text-dark-Neutral-200'>
                                    {OUR_MISSION.subtitle2Description}
                                </div>
                            </div>
                            <TrendIllustration/>
                        </div>
                        <div
                            className='flex md:col-span-2 flex-col items-center bg-[#000]/40 gap-20 p-8 rounded-[18px]'>
                            <div className='relative z-10 flex flex-col items-center gap-3'>
                                <div
                                    className='relative z-10 text-2xl md:text-3xl font-semibold text-center'>{OUR_MISSION.subtitle1}</div>
                                <div
                                    className='relative z-10 text-center text-base font-light md:font-medium text-dark-Neutral-200'>
                                    {OUR_MISSION.subtitle1Description}
                                </div>
                            </div>
                            <WindowsIllustration/>
                        </div>
                    </div>
                    <div className='absolute flex justify-center w-full z-0 top-[50%] opacity-70'>
                        <GradientShape/>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-8 m-auto text-center'>
                <div className='flex flex-col gap-3 p-8 items-center bg-dark-Neutral-1 rounded-3xl'>
                    <div className='text-[38px] md:text-[60px] font-semibold '>{OUR_TEAM.title}</div>
                    <div className='text-lg md:text-2xl font-medium text-dark-Neutral-300 '>{OUR_TEAM.description}</div>
                </div>
                <div className='flex flex-col gap-3 p-8 items-center bg-dark-Neutral-1 rounded-3xl'>
                    <div className='text-[38px] md:text-[60px] font-semibold '>{JOIN_US.title}</div>
                    <div className='text-lg text-2xl font-medium text-dark-Neutral-300 '>{JOIN_US.description}</div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;