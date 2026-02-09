'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, FileVideo2 } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-[-10]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            filter: 'brightness(0.4)',
          }}
        />
        {/* Dark gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-dark-900/70 to-dark-900"></div>
      </div>

      {/* Animated gradient accents */}
      <div className="absolute inset-0 -z-[10] opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-4 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {personalInfo.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <SocialButton
              href={`mailto:${personalInfo.email}`}
              icon={<Mail size={20} />}
              label="Get in Touch"
            />
            <SocialButton
              href={personalInfo.linkedin}
              icon={<Linkedin size={20} />}
              label="LinkedIn"
            />
            <SocialButton
              href={personalInfo.github}
              icon={<Github size={20} />}
              label="GitHub"
            />
            <SocialButton
              href={personalInfo.resLink}
              icon={<FileVideo2 size={20} />}
              label="ResLink"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
            >
              <span>Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowDown size={20} />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors shadow-lg hover:shadow-xl font-semibold"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <span>{label}</span>
    </motion.a>
  )
}