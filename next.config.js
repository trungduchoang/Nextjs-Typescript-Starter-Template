require("dotenv").config();
const path = require("path");
const Dotenv = require("dotenv-webpack");
const withOffline = require("next-offline");

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const configureWebpack = (config, { dev }) => {
  config.plugins = config.plugins || [];

  config.plugins.push(
    // Read the .env file
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

  config.module.rules.push({
    test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
    use: {
      loader: "url-loader",
      options: {
        limit: 100000,
        name: "[name].[ext]",
      },
    },
  });

  if (dev) {
    config.module.rules.push({
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: "eslint-loader",
    });
  }

  return config;
};

module.exports = withOffline({
  webpack: configureWebpack,
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT
      ? "service-worker.js"
      : "static/service-worker.js",
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "offlineCache",
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/service-worker.js",
        destination: "/_next/static/service-worker.js",
      },
    ];
  },
});
