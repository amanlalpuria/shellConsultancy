import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/app/data/data.tsx';
import { CheckCircle } from 'lucide-react';
export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
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
            About Shell Consultancy
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bridge the gap between education and employment by creating job-ready professionals
            and delivering talent that drives results.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              To bridge the gap between education and employment by creating job-ready professionals
              and delivering talent that drives results. We believe in transforming potential into
              performance.
            </p>
            <div className="space-y-4">
              {[
                'Customized hiring and training strategies',
                'Industry-aligned project simulations',
                'Growing network of successful placements',
                'Trusted by clients, valued by candidates',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Why Choose Us?</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-blue-100">Successful Placements</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-blue-100">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-blue-100">Partner Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-blue-100">Support</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
