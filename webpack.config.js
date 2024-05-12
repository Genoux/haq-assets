const path = require("path");

module.exports = {
  entry: "./src/index.ts", // Pointing to the file that exports your components
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js", // This specifies the name of the output file.
    library: "haqAssets",
    libraryTarget: "umd",
    globalObject: "this",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"], // Resolves these extensions
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
