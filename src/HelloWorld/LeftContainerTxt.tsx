import React, { useRef } from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_FAMILY} from './constants';
import { Gif } from "@remotion/gif";
import TypingAnimation from './TypingAnimation';
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

const gifer : React.CSSProperties ={
	textAlign: 'right',
	position: 'absolute',
	top: '25%',
	right:'10%'
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
  const ref = useRef<HTMLCanvasElement>(null);
  const scale = spring({
    fps: videoConfig.fps,
    frame,
  });
	return (
		
		<div>
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
		<div>
		<Gif
		 ref={ref}
		 style={gifer}
		 src="https://media0.giphy.com/media/Pnfnk8pjnwlxER5Sde/giphy.gif?cid=ecf05e478ihavud558tg92ugvgl06sp1m4qx0b820u2o6ncz&ep=v1_gifs_related&rid=giphy.gif&ct=g"
		 width={400}
		 height={400}
		 fit="fill"
	 />

		</div>

		</div>
	);
};
