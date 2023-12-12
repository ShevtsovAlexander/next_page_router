/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  basePath: '/github-pages',
  images: {
    unoptimized: true
  }
}


