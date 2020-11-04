require("dotenv").config();
const path = require("path");
const Dotenv = require("dotenv-webpack");

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const configureWebpack = (config, { dev }) => {
  config.plugins = config.plugins || [];

  config.plugins.push(
    new Dotenv({
      path: path.join(__dirname, ".env"),
      systemvars: true,
    })
  );

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
    domains: ["citynow.vn", "citynow.jp"],
  },
  reactStrictMode: true,
};
