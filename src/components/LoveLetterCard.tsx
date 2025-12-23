import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function LoveLetterCard({ children }: { children: React.ReactNode }) {
  const hearts = Array.from({ length: 20 });

  const heartVariants = {
    initial: { y: 0, opacity: 0 },
    animate: (i: number) => ({
      y: -300,
      opacity: [0, 1, 0],
      transition: {
        delay: i * 0.2,
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <div className="relative bg-primary-light p-8 rounded-lg shadow-lg border-2 border-primary">
      <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary rounded-full flex items-center justify-center transform -rotate-12">
        <Heart className="w-10 h-10 text-white" fill="white" />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        {hearts.map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0"
            style={{ left: `${(i + 1) * 5}%` }}
            variants={heartVariants}
            initial="initial"
            animate="animate"
            custom={i}
          >
            <Heart className="w-6 h-6 text-primary" fill="#fce8e8" />
          </motion.div>
        ))}
      </div>
      <div className="relative font-sans text-lg text-text leading-relaxed">
        {children}
      </div>
    </div>
  );
}
