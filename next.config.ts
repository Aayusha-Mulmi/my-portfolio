/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // static export
  images: {
    unoptimized: true,   // disables image optimization for static export
  },
  basePath: '/my-portfolio', // optional: use this if your repo is github.io/<repo-name>
};

module.exports = nextConfig;
