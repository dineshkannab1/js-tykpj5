import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useVideoConfig } from 'remotion';
import { Gif } from "@remotion/gif";
export const Calendar: React.FC = () => {
	const springProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
  });
	const { width, height } = useVideoConfig();
  const ref = useRef<HTMLCanvasElement>(null);
  return (
    // <animated.div
    //   className="calendar-day"
    //   style={{
    //     ...springProps,
    //     position: 'absolute',
    //     width: '30px',
    //     height: '30px',
    //   }}
    // >
    // </animated.div>
		 <Gif
		 ref={ref}
		 src="https://media0.giphy.com/media/Pnfnk8pjnwlxER5Sde/giphy.gif?cid=ecf05e478ihavud558tg92ugvgl06sp1m4qx0b820u2o6ncz&ep=v1_gifs_related&rid=giphy.gif&ct=g"
		 width={width}
		 height={height}
		 fit="fill"
	 />
  );
};
