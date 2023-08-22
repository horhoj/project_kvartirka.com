/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // scrollRestoration: false,
};

module.exports = nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/asteroid-list',
        permanent: true,
      },
    ];
  },
};
