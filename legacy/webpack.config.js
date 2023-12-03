/* eslint-disable */

const webpack = require("webpack");
const path = require("path");
const version = require('./package.json').version;
const versionDate = require('./package.json').versionDate;

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@ui": path.resolve(__dirname, "src/ui"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV !== "production",
      __VERSION__: JSON.stringify(version),
      __VERSION_DATE__: JSON.stringify(versionDate)
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              url: false,
            }
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    client: {
      overlay: true,
      progress: true,
    },
    port: 9000,
    hot: true,
    historyApiFallback: true,
  },
};
