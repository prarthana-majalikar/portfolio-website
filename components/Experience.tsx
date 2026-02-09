'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase } from 'lucide-react'
import { experience } from '@/lib/data'

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-dark-700" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 gradient-text font-serif"
        >
          Experience
        </motion.h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="glass-morphism p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg shrink-0">
                  <Briefcase className="text-primary-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-serif text-gray-100 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-primary-400 font-medium mb-1">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="text-sm text-gray-300">
                    {exp.period}
                  </p>
                </div>
              </div>

              <p className="text-gray-200 mb-6">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-4 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg"
                  >
                    <div className="shrink-0">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    </div>
                    <div>
                      <div className="font-bold text-primary-700 dark:text-primary-300 mb-1">
                        {achievement.metric}
                      </div>
                      <div className="text-gray-200">
                        {achievement.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-200 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
