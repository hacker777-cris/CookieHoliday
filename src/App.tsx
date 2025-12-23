import { HeroSection } from './components/HeroSection';
import { PhotoSection } from './components/PhotoSection';
import { GameMemoriesSection } from './components/GameMemoriesSection';
import { AppreciationSection } from './components/AppreciationSection';
import { OceanCatSection } from './components/OceanCatSection';
import { ClosingSection } from './components/ClosingSection';
import { motion } from 'framer-motion';

function App() {
  const sections = [
    { id: 1, component: <HeroSection />, color: 'bg-primary-light' },
    { id: 2, component: <PhotoSection />, color: 'bg-secondary-light' },
    { id: 3, component: <GameMemoriesSection />, color: 'bg-accent-light' },
    { id: 4, component: <AppreciationSection />, color: 'bg-primary-light' },
    { id: 5, component: <OceanCatSection />, color: 'bg-secondary-light' },
    { id: 6, component: <ClosingSection />, color: 'bg-accent-light' },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-background text-text overflow-x-hidden">
      <div className="relative max-w-4xl mx-auto px-4">
        <div className="absolute top-0 left-6 md:left-1/2 -translate-x-1/2 h-full w-3 bg-gradient-to-b from-accent via-secondary to-primary"></div>
        {sections.map(({ id, component, color }) => (
          <motion.div
            key={id}
            className={`relative py-12 px-4 rounded-lg my-8 ${color}`}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-8 border-accent"></div>
            <div
              className={`w-full md:w-1/2 px-8 ${
                id % 2 === 0
                  ? 'md:ml-auto md:text-left'
                  : 'md:mr-auto md:text-right'
              } text-left pl-24 md:pl-8`}
            >
              {component}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;
