/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: 'http://localhost:1337'
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
