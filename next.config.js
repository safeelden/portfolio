/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // experimental: {
  //   serverActions: true,
  // },
  output: 'export',  // This line is added to specify static export
};

module.exports = nextConfig;
