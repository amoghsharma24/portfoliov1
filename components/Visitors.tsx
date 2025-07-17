import React from 'react';
import { motion } from 'framer-motion';
import { VISITORS } from '../constants';

const Visitors = () => {
  return (
    <section id="visitors" className="my-12 scroll-mt-16 md:my-16" aria-label="Visitors Map">
      <div className="inline-block bg-neutral-800/90 text-sm text-neutral-300 rounded-full px-3 py-1 mb-6">
        Visitors
      </div>
      <div 
        className="relative h-56 md:h-80 w-full rounded-lg border border-neutral-800 bg-neutral-900/50 p-4"
        style={{ 
          backgroundImage: 'url(https://duyle.dev/images/map.png)', 
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {VISITORS.map((visitor, index) => (
          <motion.div
            key={visitor.id}
            className="absolute w-2 h-2 rounded-full bg-white"
            style={{
              left: visitor.x,
              top: visitor.y,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 1, 0], scale: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: index * 0.3,
              ease: "easeInOut"
            }}
          >
            {/* Inner glowing dot */}
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-white blur-sm"></div>
          </motion.div>
        ))}
        <p className="absolute bottom-4 left-4 text-xs text-neutral-500">
          Just a conceptual visualization.
        </p>
      </div>
    </section>
  );
};

export default Visitors;