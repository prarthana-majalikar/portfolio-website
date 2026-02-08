'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 gradient-text"
        >
          Featured Projects
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-morphism rounded-lg overflow-hidden shadow-xl"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={24} />
                    </motion.a>
                  )}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                {/* Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className="text-center p-4 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg"
                      >
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 font-medium mb-1">
                          {metric.label}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-500">
                          {metric.subtext}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Highlights */}
                {project.highlights && (
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-primary-600 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
