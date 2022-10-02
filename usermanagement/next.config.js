/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'imgix',
    path :'',
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
