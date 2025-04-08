/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "cdn.brandfetch.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "pagedone.io",
      },
      // https://t3.ftcdn.net/jpg
      {
        protocol: "https",
        hostname: "t3.ftcdn.net",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  webpack: (
    config: any,
    { dev, isServer }: { dev: boolean; isServer: boolean }
  ) => {
    // Optimize CSS
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups.styles = {
        name: "styles",
        test: /\.(css|scss)$/,
        chunks: "all",
        enforce: true,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
