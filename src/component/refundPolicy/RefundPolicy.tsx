import MailOpen from '../../icons/MailOpen';
import { TENSURF_CONTACT } from '../../constatns/general.constants';
import { REFUND_POLICY } from '../../constatns/refundPolicyPage.constants';

// *.*.*.*.*.*.*.*.*.*.* Main Function ↓•↓•↓
export const RefundPolicy = () => {
  const descriptionClass = 'text-base font-medium text-dark-Neutral-200';
  // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
  return (
      <div className=' flex flex-col gap-10  my-[120px] max-w-[1200px] px-8'>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-1'>
            <div className='pageTitle mb-2'>
              <h1 className={'text-4xl md:text-5xl 2xl:text-6xl text-center md:text-left'}>
                {REFUND_POLICY.mainTitle}
              </h1>
            </div>
            <div className='text-[24px] font-semibold text-dark-Neutral-400 mb-2'>
              <h2 className={'text-xl lg:text-2xl 2xl:text-3xl'}>{REFUND_POLICY.subtitle}</h2>
            </div>
          </div>
          <div className={descriptionClass}>
            <p className={'text-base font-light'}>{REFUND_POLICY.description}</p>
          </div>
        </div>

        <div className='flex flex-col gap-8'>
          <div className='text-[36px] font-bold text-dark-Neutral-400'>
            <h2 className={'text-2xl lg:text-3xl 2xl:text-4xl'}>Subscription Plans and Refund Policy</h2>
          </div>
          <div className='flex flex-col gap-16'>
            <div className='flex flex-col gap-2'>
              <div>
                <div className='text-[24px] font-semibold text-dark-Neutral-400 mb-3'>
                  <h3 className={'text-xl lg:text-2xl 2xl:text-3xl'}>1. Non-Refundable Subscriptions</h3>

                </div>
                <div className='text-[20px] font-medium text-dark-Neutral-400'>
                  <h4 className={'text-lg lg:text-xl 2xl:text-2xl'}>Monthly and Annual Subscription Plans:</h4>
                </div>
              </div>
              <div className={descriptionClass}>
                <p className={'text-base font-light'}>
                  Please be advised that our monthly and annual subscription plans are non-refundable once purchased. We
                  strive to offer you the best trading tools and resources, and part of our policy ensures we maintain the
                  highest quality of service continuously.
                </p>
              </div>
            </div>

            <div className='flex flex-col gap-8'>
              <div className='flex flex-col gap-2'>
                <div>
                  <div className='text-[24px] font-semibold text-dark-Neutral-400 mb-3'>
                    <h2 className={'text-2xl lg:text-3xl 2xl:text-4xl'}>2. Cancellation of Subscription</h2>
                  </div>
                  <div className='text-[20px] font-medium text-dark-Neutral-400'>
                    <h3 className={'text-xl lg:text-2xl 2xl:text-3xl'}>Option to Cancel:</h3>
                  </div>
                </div>
                <div className={descriptionClass}>
                  <p className={'text-base font-light'}>
                    You have the option to cancel your subscription plan. This can be done through your profile settings
                    page on our website.
                  </p>
                </div>
              </div>
              <div>
                <div className='text-[20px] font-medium text-dark-Neutral-400'>
                  <h3 className={'text-xl lg:text-2xl 2xl:text-3xl'}>Before Next Billing Date:</h3>
                </div>
                <div className={descriptionClass}>
                  <p className={'text-base font-light'}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    To avoid the next billing cycle's charges, ensure that you set your subscription plan package to
                    cancel before your next billing date.to cancel your subscription plan. This can be done through your
                    profile settings page on our website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-8'>
          <div className='text-[36px] font-bold text-dark-Neutral-400'>
            <h2 className={'text-2xl lg:text-3xl 2xl:text-4xl'}>Managing Your Subscription</h2>
          </div>
          <div className='flex flex-col gap-16'>
            <div className='flex flex-col gap-2'>
              <div className='text-[24px] font-semibold text-dark-Neutral-400'>
                <h3 className={'text-xl lg:text-2xl 2xl:text-3xl'}>Access to Profile Page</h3>
              </div>
              <div className={descriptionClass}>
                <p className={'text-base font-light'}>
                  You can manage your subscription directly from your profile page on the TenSurf website..
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='text-[24px] font-semibold text-dark-Neutral-400'>
                <h3 className={'text-xl lg:text-2xl 2xl:text-3xl'}>Adjustments to Plan</h3>
              </div>
              <div className={descriptionClass}>
                <p className={'text-base font-light'}>
                  If you wish to adjust or change your plan, you can do so from your profile page, subject to the terms of
                  the plan you choose.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-8'>
          <div className='text-[24px] font-semibold text-dark-Neutral-400'>
            <h3 className={'text-xl lg:text-2xl 2xl:text-3xl'}>Contact Us</h3>
          </div>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-2'>
              <div className={descriptionClass}>
                <p className={'text-base font-light'}>
                  For any questions or concerns regarding your subscription or our refund policy, please contact us at
                </p>
              </div>
              <div className={descriptionClass + ' flex gap-1 items-center'}>
                <MailOpen/>
                <a href={TENSURF_CONTACT.mailToLink} className='hover:underline'>
                  {TENSURF_CONTACT.mail}
                </a>
              </div>
            </div>

            <div className={descriptionClass}>
              Our customer service team is here to assist you with any issues or inquiries you might have
            </div>
          </div>
        </div>
      </div>
  );
};

export default RefundPolicy;
