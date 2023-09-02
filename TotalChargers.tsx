import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_FAMILY} from './constants';

const title: React.CSSProperties = {
	fontFamily: FONT_FAMILY,
	fontWeight: 'bold',
	fontSize: 100,
	textAlign: 'left',
	position: 'absolute',
	top: '25%',
	width: '50%',
	padding:10
};

const word: React.CSSProperties = {
	marginLeft: 10,
	marginRight: 10,
	display: 'inline-block',
};

export const LeftContainerTxt: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

  const scale = spring({
    fps: videoConfig.fps,
    frame,
  });
	return (
		
		<h1 style={title}>
			 <div
      style={{
        flex: 1,
        textAlign: "center",
        fontSize: "7em",
      }}
    ></div>
			  <div style={{ transform: `scale(${scale})` }}>{titleText}</div>
		</h1>
	);
};
