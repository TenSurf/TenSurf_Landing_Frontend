import Link from 'next/link';
import React from 'react';
import {AnimateLight} from './AnimateLight';
import BrowserFrame from '@/component/general/BrowserFrame';

const animateLights = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export const HeroSection = async ({
	title,
	description,
	productShot
}: {
	title: React.ReactNode;
	description: React.ReactNode;
	productShot?: { image: string; alt: string };
}) => {
	return (
		<div
			className={`w-full flex flex-col items-center overflow-hidden ${productShot ? '' : 'min-h-screen'}`}
		>
			<div className={`flex items-center flex-col justify-center gap-6 relative z-[9] max-w-4xl px-4 ${productShot ? 'pt-24 sm:pt-28 md:pt-32 pb-4' : 'min-h-screen py-12'}`}>

				<div className="flex items-center flex-col justify-center gap-4">
					<h1
						className={
							'text-[26px] sm:text-4xl md:text-5xl text-center font-medium text-foreground !leading-tight'
						}
					>
						{title}
					</h1>
					<p
						className={
							'text-base sm:text-lg font-normal text-center text-muted-foreground max-w-2xl'
						}
					>
						{description}
					</p>
				</div>

				{/* Karpathy Quote */}
				<div className="max-w-xl border-l-2 border-[#082FDF]/40 pl-5 py-1">
					<p className="text-sm sm:text-base italic text-muted-foreground">
						&ldquo;There&apos;s a new kind of coding I call &apos;vibe coding&apos;, where you fully give in to the vibes, embrace exponentials, and forget that the code even exists.&rdquo;
					</p>
					<p className="text-xs sm:text-sm text-muted-foreground mt-1">
						— Andrej Karpathy, AI pioneer and former Tesla AI Director
					</p>
				</div>

				<div className="flex flex-col items-center gap-3">
					<Link
						className={'flex justify-center w-fit'}
						href='/waitlist'
					>
						<div className="flex items-center gap-3 bg-primary/20 border border-primary/40 rounded-full px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 hover:bg-primary/30 transition-colors">
							<span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></span>
							<span className={'text-sm sm:text-base md:text-lg font-semibold text-white'}>
								Join the Waitlist
							</span>
						</div>
					</Link>

					<Link href="/vibe-trading" className="text-sm font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4 hover:decoration-primary/70">
						What is Vibe Trading? →
					</Link>

					{/* Trust Indicators */}
					<p className="text-xs text-muted-foreground">
						Be first in line • No credit card required • Inspired by Vibe Coding. Built for Traders.
					</p>
				</div>
			</div>

			{productShot && (
				<div className="relative z-[9] w-full max-w-5xl px-4 mt-10 sm:mt-14 mb-16 sm:mb-24">
					<BrowserFrame
						image={productShot.image}
						alt={productShot.alt}
						sizes="(max-width: 1024px) 100vw, 1024px"
						priority
					/>
				</div>
			)}

			<div
				className="absolute z-0 h-full top-0 w-full items-stretch justify-between hidden dark:flex gap-[300px] max-w-[90%] max-h-screen px-4 overflow-hidden">
				{animateLights.map((light, index) => (
					<AnimateLight key={index} index={index}/>
				))}
			</div>
		</div>
	);
};
