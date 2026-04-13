'use client';

import { useEffect, useState } from 'react';

interface HeroTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export function HeroText({ text, className = '', speed = 50 }: HeroTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [displayText, text, speed]);

  return (
    <span className={`${className} ${!isComplete ? 'typing' : ''}`}>
      {displayText}
    </span>
  );
}
