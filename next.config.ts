import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  images: {
    domains: ["localhost", "randomuser.me"],
  },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: [{ loader: "@svgr/webpack", options: { icon: true } }],
  //   });
  //   return config;
  // },
};

export default nextConfig;
