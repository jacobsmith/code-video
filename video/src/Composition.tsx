import {AbsoluteFill, Sequence} from 'remotion';
import { CodeSnippet } from './CodeSnippet';

export const MyComposition = () => {
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<CodeSnippet code={
				`
				<div>Hello world</div>
				<span>this is an exciting time to work on new code.</span>`
			} />
			<div className='mt-10'></div>
			<CodeSnippet delay={ 100 } code={
				`
				function() {
					alert('This is javascript!');
				}
				`
			} />
		</AbsoluteFill>
	);
};
