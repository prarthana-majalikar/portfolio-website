'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap } from 'lucide-react'
import { education } from '@/lib/data'

export function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 bg-dark-700" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 gradient-text font-serif"
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="glass-morphism p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg">
                  <GraduationCap className="text-primary-400" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-100">
                      {edu.institution}
                    </h3>
                    <span className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-lg font-medium text-gray-200 mb-1">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-gray-300 mb-2">
                    {edu.period}
                  </p>
                  {edu.details && (
                    <p className="text-gray-200">{edu.details}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
