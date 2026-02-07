import TeamItem from '@/component/landing/team/TeamItem';
import Image from 'next/image';
import React, {RefObject} from 'react';

export const TeamSection = (
	{
		TeamRef
	}: {
		TeamRef?: RefObject<HTMLDivElement>;
	}) => {
	return (
		<div className="flex flex-col w-full gap-20 mt-44 mb-52">
			<h1 className="text-5xl md:text-7xl font-medium text-center">
				Meet the Team
			</h1>
			<div className="relative w-full overflow-hidden">
				<div className="relative w-full aspect-video">
					{/* Background overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"/>
					<Image
						src="/images/team.png"
						alt="About Us"
						fill
						priority
						className="object-cover 2xl:rounded-3xl"
					/>
				</div>
			</div>
			<div className="container mx-auto flex flex-col gap-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto justify-center items-center">
					<TeamItem
						image="/images/keivan-ebrahimi.png"
						name="Keivan Ebrahimi"
						position="Founder and CEO"
					/>
	<TeamItem
						image="/images/aaron-korbs.png"
						name="Aaron Korbs"
						position="Co-founder and CMO"
					/>

				</div>
			</div>
		</div>
	);
};
