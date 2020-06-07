const path = require('path');

module.exports = {
  mode: "development",
  entry: [
    "./src/index.ts",
    "./src/styles/style.scss",
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "css/[name].css",
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../dist"),
  },
};