const { resolve, join } = require("path");
const pkg = require("./package.json");
const nodeExternals = require("webpack-node-externals");

const config = {
  mode: process.env.NODE_ENV || "development",
  devtool: "source-map",
  entry: resolve(__dirname, "./src/index.ts"),
  target: "node",
  output: {
    path: resolve(__dirname, "dist/src"),
    filename: "lib.js",
    libraryTarget: "umd"
    // library: pkg.name
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
        include: [
          resolve(__dirname, "./node_modules/typescript/lib/lib.es5.d.ts")
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  externals: [
    nodeExternals({
      modulesFromFile: true
    })
  ]
};

module.exports = config;
