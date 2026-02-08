'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Linkedin, Github, Send } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12">
            Interested in AI products that need solid engineering fundamentals? Let's talk.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ContactCard
              icon={<Mail size={32} />}
              label="Email"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
              delay={0.2}
              inView={inView}
            />
            <ContactCard
              icon={<Linkedin size={32} />}
              label="LinkedIn"
              value="linkedin.com/in/prarthanamajalikar"
              href={personalInfo.linkedin}
              delay={0.3}
              inView={inView}
            />
            <ContactCard
              icon={<Github size={32} />}
              label="GitHub"
              value="github.com/prarthana-majalikar"
              href={personalInfo.github}
              delay={0.4}
              inView={inView}
            />
          </div>

          <motion.a
            href={`mailto:${personalInfo.email}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <Send size={20} />
            Send me a message
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

interface ContactCardProps {
  icon: React.ReactNode
  label: string
  value: string
  href: string
  delay: number
  inView: boolean
}

function ContactCard({ icon, label, value, href, delay, inView }: ContactCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      className="glass-morphism p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="text-primary-600 dark:text-primary-400 mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 dark:text-white mb-2">{label}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 break-all">{value}</p>
    </motion.a>
  )
}
