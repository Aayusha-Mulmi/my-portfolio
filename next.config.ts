/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true }, // required for static export
  trailingSlash: true,           // works better for GitHub Pages
};

export default nextConfig;
