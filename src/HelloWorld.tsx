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
import {Title} from './HelloWorld/Title';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import {LeftContainerTxt} from './HelloWorld/LeftContainerTxt';
import Table from './HelloWorld/table';

export const myCompSchema = z.object({
	titleText: z.string(),
	billText: z.string(),
	titleColor: zColor(),
	logoColor1: zColor(),
	logoColor2: zColor(),
});

export const HelloWorld: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
	billText:propThree,
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

	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<div>
<AbsoluteFill>
  <AbsoluteFill style={{ backgroundColor: 'black' }}>
    {/* Sequences can shift the time for its children! */}
    <Sequence from={10}>
      <Title titleText={propOne} titleColor={propTwo} />
    </Sequence>
    {/* The subtitle will only enter on the 75th frame. */}
    <Sequence from={25}>
      <Subtitle />
    </Sequence>
  </AbsoluteFill>
  <AbsoluteFill style={{ transform: `translateY(${logoTranslation}px)` }}>
    <Sequence from={35}>
      <Logo logoColor1={logoColor1} logoColor2={logoColor2} />
    </Sequence>
  </AbsoluteFill>
  <Sequence from={90}>
    <AbsoluteFill style={{ backgroundColor: 'white' }}>
      {/* Sequences can shift the time for its children! */}
      <LeftContainerTxt titleText={propThree} titleColor={propTwo} />
    </AbsoluteFill>
  </Sequence>
	<Sequence from={180}>
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      {/* Sequences can shift the time for its children! */}
			<Table />
    </AbsoluteFill>
  </Sequence>
</AbsoluteFill>
		</div>
	);
};
