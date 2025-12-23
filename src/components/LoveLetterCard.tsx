import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function LoveLetterCard({ children }: { children: React.ReactNode }) {
  const hearts = Array.from({ length: 10 });

  const heartVariants = {
    initial: { y: 0, opacity: 0 },
    animate: (i: number) => ({
      y: -200,
      opacity: [0, 1, 0],
      transition: {
        delay: i * 0.5,
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <div className="relative bg-white/80 p-8 rounded-lg shadow-lg">
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
        <Heart className="w-8 h-8 text-white" fill="white" />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        {hearts.map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0"
            style={{ left: `${(i + 1) * 9}%` }}
            variants={heartVariants}
            initial="initial"
            animate="animate"
            custom={i}
          >
            <Heart className="w-6 h-6 text-primary" fill="#fce8e8" />
          </motion.div>
        ))}
      </div>
      <div className="relative font-script text-2xl text-text/80 leading-loose">
        {children}
      </div>
    </div>
  );
}
