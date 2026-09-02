/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/kasikirja",
        destination: "/tyokalut",
        permanent: true,
      },
      {
        source: "/promptit",
        destination: "/tyokalut",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
