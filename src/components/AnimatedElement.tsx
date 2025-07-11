
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-in' | 'slide-up' | 'slide-right' | 'slide-left' | 'scale-in';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

const getDefaultStyle = (animation: AnimationType) => {
  switch (animation) {
    case 'slide-up':
      return { opacity: 0, transform: 'translateY(20px)' };
    case 'slide-right':
      return { opacity: 0, transform: 'translateX(-20px)' };
    case 'slide-left':
      return { opacity: 0, transform: 'translateX(20px)' };
    case 'scale-in':
      return { opacity: 0, transform: 'scale(0.95)' };
    case 'fade-in':
    default:
      return { opacity: 0 };
  }
};

const getVisibleStyle = (animation: AnimationType) => {
  switch (animation) {
    case 'slide-up':
    case 'slide-right':
    case 'slide-left':
    case 'scale-in':
      return { opacity: 1, transform: 'translate(0, 0) scale(1)' };
    case 'fade-in':
    default:
      return { opacity: 1 };
  }
};

const AnimatedElement = ({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  triggerOnce = false
}: AnimatedElementProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ 
    threshold, 
    triggerOnce 
  });

  const defaultStyle = getDefaultStyle(animation);
  const visibleStyle = isVisible ? getVisibleStyle(animation) : defaultStyle;

  return (
    <div
      ref={ref}
      className={cn(animation, className)}
      style={{
        ...visibleStyle,
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
