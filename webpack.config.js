const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@pages": path.resolve(__dirname, "src/pages"),
      "@ui": path.resolve(__dirname, "src/ui"),
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV !== "production",
    }),
  ],
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
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
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
