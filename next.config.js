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