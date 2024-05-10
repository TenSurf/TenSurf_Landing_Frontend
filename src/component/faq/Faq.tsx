import { FAQ } from '../../constatns/faqPage.constants';

// *.*.*.*.*.*.*.*.*.*.* Main Function ↓•↓•↓
export const Faq = () => {
  // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
  return (
    <div className=' flex flex-col gap-[200px]  mt-[200px] mb-[600px]'>
      <div className='flex flex-col gap-2 items-center'>
        <div className='pageTitle'>{FAQ.title}</div>
        <div className='trext-[24px] font-semibold text-dark-Neutral-200'>{FAQ.description}</div>
      </div>
    </div>
  );
};

export default Faq;
