'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  startDelay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function TypewriterText({ 
  text, 
  delay = 50, 
  startDelay = 0, 
  className = '',
  as: Component = 'p'
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [startDelay]);

  useEffect(() => {
    if (!hasStarted) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, hasStarted]);

  const ElementType = Component;

  return (
    <ElementType className={className}>
      <span style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
        <span style={{ visibility: 'hidden', userSelect: 'none', whiteSpace: 'pre-wrap' }} aria-hidden="true">
          {text}
        </span>
        <span style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
          {displayText}
          {currentIndex < text.length && hasStarted && (
            <span className="animate-pulse">|</span>
          )}
        </span>
      </span>
    </ElementType>
  );
} 