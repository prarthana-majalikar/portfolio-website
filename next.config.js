/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optimize for Netlify
  trailingSlash: true,
}

module.exports = nextConfig
