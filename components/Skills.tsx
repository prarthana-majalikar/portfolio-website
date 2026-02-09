'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
// import { useState } from 'react'
import { skillsData } from '@/lib/data'
import Image from 'next/image'

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  // const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 bg-dark-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 gradient-text font-serif"
        >
          Skills & Competencies
        </motion.h2>

        <div className="space-y-12">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold font-serif mb-6 text-gray-100 flex items-center gap-3 font-serif">
                <span className="text-3xl">
                  {category === 'AI & Machine Learning' && '🤖'}
                  {category === 'Cloud & Infrastructure' && '☁️'}
                  {category === 'Backend Engineering' && '⚙️'}
                  {category === 'DevOps & Tools' && '🛠️'}
                </span>
                {category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills.map((skill, index) => (
                  <SkillCard
                    key={index}
                    skill={skill}
                    index={index}
                    categoryIndex={categoryIndex}
                    inView={inView}
                  // isSelected={selectedSkill === skill.name}
                  // onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}

                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        {/* Skill Detail Modal
                {selectedSkill && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedSkill(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="glass-morphism p-8 rounded-lg max-w-md w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                                {selectedSkill}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Click on skill tiles to add more details or link to relevant projects and experiences.
                            </p>
                            <button
                                onClick={() => setSelectedSkill(null)}
                                className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )} */}
      </div>
    </section>
  )
}

interface SkillCardProps {
  skill: {
    name: string
    logo: string
    category: string
  }
  index: number
  categoryIndex: number
  inView: boolean
  // isSelected: boolean
  // onClick: () => void
}

function SkillCard({ skill, index, categoryIndex, inView }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
      whileHover={{ scale: 1.1, y: -5 }}
      // whileTap={{ scale: 0.95 }}
      // onClick={onClick}
      className="glass-morphism p-6 rounded-lg text-center shadow-md"
    >

      <div className="w-16 h-16 mx-auto mb-3 relative">
        <Image
          src={skill.logo}
          alt={`${skill.name} logo`}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 48px, 64px"
          priority={false}
        />
      </div>
      <div className="text-sm font-medium text-gray-100">
        {skill.name}
      </div>
    </motion.div>
  )
}