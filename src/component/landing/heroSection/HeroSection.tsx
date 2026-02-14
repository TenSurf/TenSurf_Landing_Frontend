import Link from 'next/link';
import React from 'react';
import {AnimateLight} from './AnimateLight';

const animateLights = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export const HeroSection = async ({
	title,
	description
}: {
	title: string;
	description: React.ReactNode;
}) => {
	return (
		<div
			className={`w-full flex flex-col items-center overflow-hidden h-screen`}
		>
			<div className="flex items-center flex-col justify-center gap-10 relative z-[9] max-w-4xl min-h-screen px-4">
				{/* Badge */}
				<div className="flex items-center gap-2 bg-[#082FDF]/10 border border-[#082FDF]/30 rounded-full px-4 py-2">
					<span className="w-2 h-2 bg-[#082FDF] rounded-full animate-pulse"></span>
					<span className="text-sm text-[#ADB5BD]">AI You Can Trust</span>
				</div>

				<div className="flex items-center flex-col justify-center gap-6">
					<h1
						className={
							'text-[28px] sm:text-5xl md:text-7xl text-center font-medium text-[#F8F9FA] !leading-tight'
						}
					>
						{title}
					</h1>
					<p
						className={
							'text-lg sm:text-xl font-normal text-center text-[#DEE2E6] max-w-2xl'
						}
					>
						{description}
					</p>
				</div>

				<div className="flex flex-col items-center gap-4">
					<Link
						className={'flex justify-center w-fit'}
						href='/waitlist'
					>
						<div className="flex items-center gap-3 bg-[#082FDF]/20 border border-[#082FDF]/40 rounded-full px-8 py-4 sm:px-10 sm:py-5 md:px-14 md:py-6 hover:bg-[#082FDF]/30 transition-colors">
							<span className="w-3 h-3 bg-[#082FDF] rounded-full animate-pulse"></span>
							<span className={'text-base sm:text-lg md:text-xl font-semibold text-white'}>
								Coming Soon — Join the Waitlist
							</span>
						</div>
					</Link>
					
					{/* Trust Indicators */}
					<p className="text-sm text-[#6C757D]">
						Join the waitlist • Be first to access • Free early access
					</p>
				</div>
			</div>
			
			<div
				className="absolute z-0 h-full top-0 w-full items-stretch justify-between flex gap-[300px] max-w-[90%] max-h-screen px-4 overflow-hidden">
				{animateLights.map((light, index) => (
					<AnimateLight key={index} index={index}/>
				))}
			</div>
		</div>
	);
};
