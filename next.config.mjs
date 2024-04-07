/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'storage.googleapis.com',
            pathname: '/**',
          },
            {
            protocol: 'https',
            hostname: 'i.ibb.co',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'media.licdn.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'coffeedealtura.netlify.app',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
