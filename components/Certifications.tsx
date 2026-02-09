'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award } from 'lucide-react'
import { certifications } from '@/lib/data'

export function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="certifications" className="py-20 bg-dark-700" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 gradient-text font-serif"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-morphism p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg shrink-0">
                  <Award className="text-primary-400" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-100 leading-tight">
                      {cert.title}
                    </h3>
                    <span className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full text-xs font-medium shrink-0 ml-2">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-200">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
