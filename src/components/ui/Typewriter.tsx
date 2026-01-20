'use client';

import { useEffect, useState, useRef } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  cursor?: boolean;
  startDelay?: number;
}

export default function Typewriter({ 
  text, 
  speed = 50, 
  className = "",
  cursor = true,
  startDelay = 0
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const startTimeout = setTimeout(() => {
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, speed);

      return () => clearInterval(timer);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, started, startDelay]);

  return (
    <span ref={ref} className={`${className} font-mono`}>
      {displayedText}
      {cursor && (
        <span className="animate-pulse inline-block w-[2px] h-[1.2em] bg-current align-middle ml-1" />
      )}
    </span>
  );
}
