/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/waitlist',
        permanent: false,
      },
      {
        source: '/signin',
        destination: '/waitlist',
        permanent: false,
      },
      {
        source: '/signup',
        destination: '/waitlist',
        permanent: false,
      },
      {
        source: '/profile',
        destination: '/',
        permanent: false,
      },
      {
        source: '/profile/:path*',
        destination: '/',
        permanent: false,
      },
      {
        source: '/payment/:path*',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
