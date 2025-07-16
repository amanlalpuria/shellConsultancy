import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, industries } from '@/app/data/data.tsx';

export function IndustriesSection() {
  return (
    <section id="industries" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent pb-2"
          >
            Industries We Serve
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized recruitment and training solutions across diverse sectors
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
            >
              <span className="text-gray-700 font-medium">{industry}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
