const withPlugins = require("next-compose-plugins");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  experimental: { esmExternals: true, scrollRestoration: true },
  reactStrictMode: true,
  target: "serverless",
  eslint: {
    // !! WARNING: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARNING:Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
};

const plugins = [withBundleAnalyzer];

module.exports = withPlugins([...plugins], nextConfig);
