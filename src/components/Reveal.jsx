import { motion } from 'framer-motion';

// Subtle scroll-in reveal used across sections.
const Reveal = ({ children, delay = 0, className = '', as = 'div' }) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
