
import React, { useRef, ElementType } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedText3DProps {
  text: string;
  el?: ElementType;
  className?: string;
  [x: string]: any; // for other props like style
}

const AnimatedText3D: React.FC<AnimatedText3DProps> = ({
  text,
  el: Wrapper = 'p',
  className,
  ...rest
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: '100%',
      rotateX: -90,
      transition: { type: 'spring', damping: 12, stiffness: 200 },
    },
    visible: {
      opacity: 1,
      y: '0%',
      rotateX: 0,
      transition: { type: 'spring', damping: 12, stiffness: 200 },
    },
  };

  return (
    <Wrapper ref={ref} className={`${className} text-3d`} {...rest}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {text.split(' ').map((word, i) => (
          <span key={i} className="inline-block" style={{ transformOrigin: 'bottom' }}>
            {word.split('').map((char, j) => (
              <motion.span
                key={j}
                className="inline-block"
                variants={wordVariants}
              >
                {char}
              </motion.span>
            ))}
            {i < text.split(' ').length - 1 ? '\u00A0' : ''}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText3D;
