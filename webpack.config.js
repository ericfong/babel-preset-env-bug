const Path = require("path");
const _ = require("lodash");
const webpack = require("webpack");

module.exports = {
  target: "web",
  context: __dirname,
  entry: {
    main: "./src/main"
  },

  output: {
    filename: "[name].js",
    path: `${__dirname}/prod`
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "env",
              {
                targets: { browsers: "> 1%" },
                // cannot override .babelrc `modules:true` to `modules:false`
                modules: false
              }
            ]
          ]
        }
      }
    ]
  }
};
