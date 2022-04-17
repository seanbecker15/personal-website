const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  plugins: [new webpack.ProgressPlugin()],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      // when webpack encounters .js or .jsx, use babel loader to load files
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
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
  },
};
