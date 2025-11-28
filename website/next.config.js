// Basit bir Next.js config dosyası, Vercel için uygundur
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
