const { resolve, join } = require("path");
const pkg = require("./package.json");
const nodeExternals = require("webpack-node-externals");

const config = {
  mode: process.env.NODE_ENV || "development",
  devtool: "source-map",
  entry: resolve(__dirname, "./src/api.ts"),
  target: "node",
  output: {
    path: resolve(__dirname, "dist/src"),
    filename: "lib.js"
  },
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ }]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};

/**
 * ,
  externals: [
    nodeExternals({
      modulesFromFile: true
    })
  ]
 */
// const { resolve, join } = require("path");
// const pkg = require("./package.json");

// const config = {
//   mode: process.env.NODE_ENV || "development",
//   devtool: "source-map",
//   entry: resolve(__dirname, "./src/api.ts"),
//   output: {
//     path: resolve(__dirname, "dist/src"),
//     filename: "lib.js",
//     libraryTarget: "commonjs",
//     library: pkg.name
//   },
//   resolve: {
//     extensions: [".ts", ".tsx", ".js"]
//   },
//   externals: {
//     request: {
//       root: "Request",
//       commonjs2: "request",
//       commonjs: "request",
//       amd: "request",
//       umd: "request"
//     }
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(ts|tsx)$/,
//         loader: "awesome-typescript-loader",
//         exclude: /node_modules/,
//         options: {
//           presets: [["react-app", { flow: false, typescript: true }]],
//           configFileName: "./tsconfig.json"
//         }
//       }
//     ]
//   }
// };

// module.exports = config;
