const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        exclude: /node_modules/,
        test: /\.js$/,
      },
    ],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
};
