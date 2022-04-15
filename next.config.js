/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/post',
        destination: '/post/page/1',
        permanent: true
      },
      {
        source: '/post/page',
        destination: '/post/page/1',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
