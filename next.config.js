/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "twitter-clone-yusan.s3.us-east-2.amazonaws.com",
      "i.imgur.com",
      "lh3.googleusercontent.com",
      "localhost"
    ],
  },
};

module.exports = nextConfig;
