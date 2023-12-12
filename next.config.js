/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/next_page_router'
}


