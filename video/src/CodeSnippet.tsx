import {interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';

export const CodeSnippet: React.FC<{ code: any, delay?: number }> = ({ code, delay = 0 }: { code: any, delay?: number }) => {
	const frame = useCurrentFrame();

	if (frame < delay) { return null; }
	
	const characters = code.split('');
	const framestoShowChars = 100;
	const numToShow = interpolate(frame, [delay, delay + framestoShowChars], [0, characters.length]);
	const charactersToShow = code.split('').splice(0, numToShow);

	const hasStarted = frame > 30;
	const blink = frame % 30 < 15;
	const showCursor = hasStarted && blink && frame < delay + framestoShowChars + 45;
	
	return (
		<div
			className="text-gray-700 text-4xl font-bold leading-relaxed text-center"
		>
			{ charactersToShow.map((char: string) => (
				<>
				<span>{ char }</span>
				{ char == '\n' ? <div></div> : null }
				</>
			))}
			<span className={ `w-8 h-8 bg-black ${showCursor ? 'opacity-100' : 'opacity-0'}` }>t</span>
		</div>
	);
};
