/**
 *  @type {import('next').NextConfig}
 */
const withImages = require('next-images')


module.exports = {
  reactStrictMode: true,
  webpack5: false,
}

module.exports = withImages({
  esModule: true,
})

module.exports = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://carteirinhauneb.vercel.app/api/:path*',
          },
        ]
      },
  };