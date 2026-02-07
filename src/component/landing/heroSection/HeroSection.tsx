import {Button} from '@/components/ui/button';
import {token_name} from '@/helpers/auth';
import {ArrowRight} from 'lucide-react';
import {cookies} from 'next/headers';
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
	const cookieStore = await cookies();
	
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
							'text-4xl sm:text-6xl md:text-7xl text-center font-medium text-[#F8F9FA] !leading-tight'
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
						href='/signup'
					>
						<Button
							className="flex gap-2 rounded-3xl drop-shadow-[3px_5px_24px_#082FDF] py-6 px-10 sm:py-8 sm:px-14">
							<p className={'text-lg sm:text-xl font-semibold text-center'}>
								Generate Your First Strategy Free
							</p>
							<ArrowRight size={20} strokeWidth={2}/>
						</Button>
					</Link>
					
					{/* Trust Indicators */}
					<p className="text-sm text-[#6C757D]">
						7 days free • Full access to all features • Cancel anytime
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
