require("dotenv").config();
const path = require("path");

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const configureWebpack = (config, { dev }) => {
  config.plugins = config.plugins || [];

  if (config.resolve.plugins) {
    config.resolve.plugins.push(new TsconfigPathsPlugin());
  } else {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
  }

  if (dev) {
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: "eslint-loader",
    });
  }

  return config;
};

module.exports = {
  webpack: configureWebpack,
  images: {
    domains: [
      "citynow.vn",
      "www.linkpicture.com",
      "citynow.jp",
      "cutewallpaper.org",
      "s3-us-west-2.amazonaws.com",
    ],
  },
  reactStrictMode: true,
};
