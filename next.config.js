/** @type {import('next').NextConfig} */
const nextConfig = {
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
