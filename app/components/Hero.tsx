import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [showTagline, setShowTagline] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowTagline(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const tagline = "Turning hair drama into a queen's happy ending".split(' ');

  return (
    <section
      className="relative z-0 flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-orange-50 to-white pt-20 pb-16 overflow-hidden"
      style={{
        backgroundImage: "url('/components/assets/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 text-center px-4 max-w-2xl">
        <AnimatePresence>
          {showTagline && (
            <motion.div
              className="mb-4 text-2xl md:text-3xl font-extrabold text-yellow-200 flex flex-wrap justify-center gap-1"
              style={{ fontFamily: "'Pacifico', cursive" }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.08 },
                },
                hidden: {},
              }}
            >
              {tagline.map((word, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Embrace Your Beautiful 4C Hair Journey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-lg md:text-xl text-white mb-8"
        >
          Join thousands of Kenyan girls discovering the beauty and versatility of their natural 4C hair
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full transition transform hover:scale-105">
            Learn the royal routine
          </button>
          <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-full hover:bg-yellow-100 transition transform hover:scale-105">
            Join Community
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-white"
        >
          {[
            { value: '5K+', label: 'Members' },
            { value: '200+', label: 'Guides' },
            { value: '50+', label: 'Product Reviews' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block text-3xl font-bold">{stat.value}</span>
              <span className="text-sm">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}