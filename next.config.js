const { LayoutGroup } = require('framer-motion')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['https://res.cloudinary.com'],
    loader:'cloudinary',
    path:'https://res.cloudinary.com/dfhcuoi1e/image/upload/v1668422202/'
  }
}

module.exports = nextConfig
