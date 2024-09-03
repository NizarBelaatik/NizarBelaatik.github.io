// TypingAnimation.js
import React, { useState, useEffect } from 'react';

const texts = [
  "Hello, world!",
  "Welcome to the typing effect.",
  "Enjoy this animation!"
];

const TypingAnimation = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const typingSpeed = 100; // Speed of typing in milliseconds
  const deletingSpeed = 50; // Speed of deleting in milliseconds
  const delayBetweenTexts = 2000; // Delay between texts in milliseconds

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        setDisplayedText(currentText.slice(0, charIndex));
        
        if (charIndex > 0) {
          setCharIndex(prevCharIndex => prevCharIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
          setTimeout(handleTyping, delayBetweenTexts); // Delay before starting typing the next text
        }
      } else {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        
        if (charIndex < currentText.length) {
          setCharIndex(prevCharIndex => prevCharIndex + 1);
        } else {
          setIsDeleting(true);
          setTimeout(handleTyping, delayBetweenTexts); // Delay before starting deleting
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(typingTimer); // Cleanup on unmount
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div className="typing-container">
      <div className="typed-text">{displayedText}</div>
    </div>
  );
};

export default TypingAnimation;
