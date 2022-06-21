/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  redirects: async() => ([
    {
        source: '/oldpage',
        destination: '/newpage',
        permanent: false,
    },
    {
      source: '/fakepage',
      destination: '/newpage',
      permanent: false,
  },
])
  }

module.exports = nextConfig
