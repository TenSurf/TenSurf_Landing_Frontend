import { BLOG } from '../../constatns/blogPage.constants';

// *.*.*.*.*.*.*.*.*.*.* Main Function ↓•↓•↓
export const Blog = () => {
  // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
  return (
    <div className=' flex flex-col gap-[200px]  mt-[200px] mb-[600px]'>
      <div className='flex flex-col gap-2 items-center'>
        <div className=' pageTitle'>{BLOG.title}</div>
        <div className='trext-[24px] font-semibold text-dark-Neutral-200'>{BLOG.description}</div>
      </div>
    </div>
  );
};

export default Blog;
