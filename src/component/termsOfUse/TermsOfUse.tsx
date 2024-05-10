import { TERMS_OF_USE } from '../../constatns/TermsOfUsePage.constants';
import { TENSURF_CONTACT } from '../../constatns/general.constants';
import MailOpen from '../../icons/MailOpen';

// *.*.*.*.*.*.*.*.*.*.* Main Function ↓•↓•↓
export const TermsOfUse = () => {
  const titleClass = 'text-[24px] font-semibold text-dark-Neutral-400';
  const descriptionClass = 'text-base font-medium text-dark-Neutral-200';
  // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
  return (
    <div className=' flex flex-col gap-10  my-[120px] w-[980px]'>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-1'>
          <div className='pageTitle'>{TERMS_OF_USE.mainTitle}</div>
          <div className={titleClass}>{TERMS_OF_USE.subtitle}</div>
        </div>
      </div>

      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-16'>
          {TERMS_OF_USE.items.map((item, index) => (
            <div key={index} className='flex flex-col'>
              <div className=' flex flex-col gap-1'>
                <div className='flex flex-col gap-1'>
                  <div className={titleClass}>{item.title}</div>
                  {item.description && <div className={descriptionClass}>{item.description}</div>}
                </div>
                {item?.hedLines && (
                  <div className='flex flex-col gap-3'>
                    {item?.hedLines?.map((headLine, index) => (
                      <div key={index} className={`flex gap-3 ${descriptionClass}`}>
                        {headLine}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <div className={titleClass}>Contact Us</div>
        <div className={descriptionClass}>If you have any questions about these Terms, please contact us at</div>
        <div className={descriptionClass + ' flex gap-1 items-center'}>
          <MailOpen />
          <a href={TENSURF_CONTACT.mailToLink} className='hover:underline'>
            {TENSURF_CONTACT.mail}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
