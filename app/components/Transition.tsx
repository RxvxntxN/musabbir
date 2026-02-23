'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface TextTransitionProps {
  className?: string;
  delay?: number;
  direction?: 'up' | 'down';
  inline?: boolean;
  transition?: any; // Framer motion transition config
  style?: React.CSSProperties;
  translateValue?: string;
  children: React.ReactNode;
}

function TextTransition({
  direction = 'up',
  inline = false,
  transition = { type: 'spring', damping: 20, stiffness: 300 },
  delay = 0,
  className = '',
  style,
  translateValue: tv = '100%',
  children,
}: TextTransitionProps) {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number | string>('auto');
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const initialRun = useRef(true);

  const fromTransform = direction === 'down' ? `-${tv}` : tv;
  const leaveTransform = direction === 'down' ? tv : `-${tv}`;

  const variants = {
    enter: {
      opacity: 1,
      y: '0%',
      transition: {
        ...transition,
        delay: !initialRun.current ? delay : 0,
      },
    },
    from: {
      opacity: 0,
      y: fromTransform,
    },
    leave: {
      opacity: 0,
      y: leaveTransform,
      position: 'absolute',
      transition: {
        ...transition,
        delay: !initialRun.current ? delay : 0,
      },
    },
  };

  useEffect(() => {
    initialRun.current = false;

    if (contentRef.current) {
      const { width, height } = contentRef.current.getBoundingClientRect();
      setWidth(width);
      setHeight(height);
    }
  }, [children]);

  return (
    <motion.div
      ref={containerRef}
      className={`text-transition ${className}`}
      style={{
        ...style,
        whiteSpace: inline ? 'nowrap' : 'normal',
        display: inline ? 'inline-flex' : 'flex',
        height: height,
      }}
      animate={{
        width: inline ? width : 'auto',
      }}
      transition={{
        ...transition,
        delay: !initialRun.current ? delay : 0,
      }}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={String(children)}
          ref={contentRef}
          variants={variants}
          initial="from"
          animate="enter"
          exit="leave"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default TextTransition;
