'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { about } from '@/lib/data'

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 gradient-text"
          >
            About
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {about.intro}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {about.experience}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {about.current}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Specializations
                </h3>
                <ul className="space-y-2">
                  {about.specializations.map((spec, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-primary-600 mt-1">•</span>
                      <span>{spec}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Currently Exploring
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{about.exploring}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
