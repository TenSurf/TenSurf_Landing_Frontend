// 'use client'
// import { signIn } from 'next-auth/react';
// import { FormEvent, useCallback, useState } from 'react'
// import Image from 'next/image';
//
//
// export default function LoginPage() {
//   const submitHandler = useCallback(async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget)
//     const email = formData.get('username')
//     const password = formData.get('password')
//     try {
//       const res = await signIn('credentials', { username: email, password: password });
//       console.log(res);
//     } catch (err) {
//       console.log(err);
//     } finally {
//     }
//   }, []);
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//
//   return (
//     <div className='relative bg-[url("/icons/bg_login.svg")] bg-no-repeat bg-right bg-contain flex w-full p-14 bg-white h-auto'>
//       <form onSubmit={submitHandler} className='relative flex flex-col h-fit justify-between items-between rounded-xl bg-gradient-to-t from-[#2A206A] to-[#443A96]'>
//         <div className='relative flex flex-col h-fit items-center'>
//           <div className=' pt-[4%] px-52'>
//             <Image src="/icons/newLogo.svg" alt='logo' width={296} height={110} />
//           </div>
//           <h2 className='mt-[4%] font-Roboto text-[32px] font-[700] text-white leading-none'>Welcome Back</h2>
//           <p className=' mt-4 font-Roboto text-[24px] font-[400] text-white leading-none'>Sign into your account</p>
//
//           <div className='flex flex-col px-4 pt-[5%] w-2/3' >
//             <label htmlFor='username' className=' text-white pb-[10px] font-Inter font-[500]'>
//               Email
//             </label>
//             <input
//               id='username'
//               type="email"
//               name='username'
//               placeholder='johnsmith@work.com'
//               className=' dark:text-black text-black w-full py-3 px-6 placeholder-[#6B7280] font-Inter border border-[#E5E7EB] bg-white rounded-lg' />
//           </div>
//           <div className="relative flex flex-col mt-[3%] px-4 w-2/3">
//             <label htmlFor='password' className=' text-white pb-[10px] font-Inter font-[500]'>
//               Password
//             </label>
//             <input
//               id='password'
//               name='password'
//               type={isPasswordVisible ? "text" : "password"}
//               placeholder="Password"
//               className='dark:text-black text-black w-full py-3 px-6 placeholder-[#6B7280] font-Inter border border-[#E5E7EB] bg-white rounded-lg' />
//             <button
//               type='button'
//               className="absolute -inset-y-0 top-8 right-0 flex items-center px-4 text-gray-600 mr-4 outline-none"
//               onClick={() => setIsPasswordVisible(prev => !prev)}
//             >
//               {isPasswordVisible ? (
//                 <Image src={'/icons/eye_close.svg'} alt='' width={24} height={24} />
//               ) : (
//                 <Image src={'/icons/eye_open.svg'} alt='' width={24} height={24} />
//
//               )}
//             </button>
//           </div>
//           <div className='flex flex-row justify-between w-2/3 px-4 bg-transparent mt-1 '>
//             <div className="inline-flex items-center">
//               <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="check">
//                 <input type="checkbox"
//                   className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
//                   id="check" />
//                 <div
//                   className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
//                   <Image src="/icons/tick.svg" alt='logo' width={18} height={18} />
//                 </div>
//               </label>
//               <label className="mt-1 font-light text-white cursor-pointer select-none ml-1" htmlFor="check">
//                 Remember Me
//               </label>
//             </div>
//             <p className='text-white'> Forgot Password? </p>
//
//           </div>
//           <div className='w-2/3 px-4 mt-[5%] 2xl:mt-[10%]'>
//             <button type='submit' className='w-full py-3  font-Roboto text-white text-[24px] font-[600] bg-[#1BC283] rounded-lg'>
//               Login
//             </button>
//           </div>
//         </div>
//         <div className='  pb-[30px] flex justify-center mt-[70px]'>
//           <p className='text-white text-12px font-Roboto font-[400]'>Don’t have account? <span className=' text-white text-12px font-Roboto font-[600]'> Contact Us</span></p>
//         </div>
//       </form>
//     </div>
//
//   )
// }

import React from "react";

const Page = () => {
  return (
    <>

    </>
  );
};

export default Page;