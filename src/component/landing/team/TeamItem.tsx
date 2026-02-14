import Image from 'next/image';
import React from 'react';

interface TeamItemProps {
	name: string;
	position: string;
	image: string;
}

const TeamItem = ({name, position, image}: TeamItemProps) => {
	return (
		<div className="group flex flex-col gap-4 grayscale hover:grayscale-0 transition-all">
			{/* Updated fixed-size container for a 2x larger image */}
			<div
				className="relative rounded-3xl overflow-hidden shadow-md"
				style={{width: '300px', height: '300px'}}
			>
				<Image
					src={image}
					alt={name}
					fill
					className="transition-all duration-1000  object-cover ease-in-out group-hover:scale-105"
				/>
			</div>
			<div className="flex flex-col items-center">
				<h4 className="text-xl font-medium">{name}</h4>
				<p className="text-base font-normal">{position}</p>
			</div>
		</div>
	);
};

export default TeamItem;
