/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
}
// module.exports = {
//   reactStrictMode: true,
//   compiler: {
//     // Enables the styled-components SWC transform
//     styledComponents: true
//   },
//   basePath: '/github-pages',
//   images: {
//     unoptimized: true
//   }
// }


