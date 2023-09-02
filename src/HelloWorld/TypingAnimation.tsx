import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [typedText, setTypedText] = useState('');
  const textToType = "Your total Charges : $2042.98.";
  const typingSpeed = 50; // Adjust the typing speed (milliseconds per character)
  const header: React.CSSProperties = {
		fontWeight: 'bold',
		fontSize: 80,
    color:'white',
    borderBottom:'3px solid white',
    marginBottom:100,
	};
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setTypedText(textToType.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div>
        <h1 style={header}>{typedText}</h1>
    </div>
  );
};

export default TypingAnimation;
