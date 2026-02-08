'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
            <span>Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart size={16} className="text-red-500 fill-current" />
            </motion.span>
            <span>using Next.js, TypeScript, and Tailwind CSS</span>
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
            © {currentYear} Prarthana Majalikar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
