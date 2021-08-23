/* eslint-disable */

module.exports = {
  reactStrictMode: true,
  target: "serverless",
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({});
