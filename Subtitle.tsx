import React from 'react';
import {Img, interpolate, useCurrentFrame} from 'remotion';
import {COLOR_1, FONT_FAMILY} from './constants';

const subtitle: React.CSSProperties = {
	fontFamily: FONT_FAMILY,
	fontSize: 75,
	textAlign: 'center',
	position: 'absolute',
	top: 400,
	color:'white',
	width: '100%',
};

const codeStyle: React.CSSProperties = {
	color: COLOR_1,
};

export const Subtitle: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return (
		<div style={{...subtitle, opacity}}>
			Thanks for Choosing Verizon !
		</div>
			
	);
	
};
