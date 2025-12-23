import { motion } from 'framer-motion';

export function OceanCatSection() {
  const waveAnimation = {
    y: ['-10%', '10%'],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  };

  const catAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      scale: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <div
      className="!bg-cover !bg-center rounded-lg text-center"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
      }}
    >
      <div className="text-6xl mb-6 bg-white/30 backdrop-blur-sm p-8 rounded-lg inline-block">
        <motion.span animate={waveAnimation} className="inline-block">
          🌊
        </motion.span>
        <motion.span animate={catAnimation} className="inline-block ml-4">
          🐱
        </motion.span>
      </div>

      <p className="text-2xl md:text-3xl font-serif text-white bg-black/30 p-4 rounded-md leading-relaxed">
        For someone who loves the calm of the ocean and the quiet comfort of a
        cat.
      </p>
    </div>
  );
}
