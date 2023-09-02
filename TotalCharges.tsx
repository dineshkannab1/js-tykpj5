import {spring} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './HelloWorld/Subtitle';
import {LeftContainerTxt} from './HelloWorld/LeftContainerTxt';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import Table from './HelloWorld/table';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor1: zColor(),
	logoColor2: zColor(),
});

export const TotalCharges: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
	logoColor1,
	logoColor2,
}) => {
	
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	// Animate from 0 to 1 after 25 frames
	const logoTranslationProgress = spring({
		frame: frame - 25,
		fps,
		config: {
			damping: 100,
		},
	});

	// Move the logo up by 150 pixels once the transition starts
	const logoTranslation = interpolate(
		logoTranslationProgress,
		[0, 1],
		[0, -150]
	);

	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const tableData = [
    { column1: 'Row 1, Column 1', column2: 'Row 1, Column 2' },
    { column1: 'Row 2, Column 1', column2: 'Row 2, Column 2' },
    // Add more rows as needed
  ];

	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill style={{backgroundColor: 'black'}}>
			<AbsoluteFill style={{opacity}}>
				{/* Sequences can shift the time for its children! */}
				<Sequence from={10}>
				<Table />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
