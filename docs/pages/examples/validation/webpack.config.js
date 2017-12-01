var path = require("path");

var config = {
  entry: ["./index"],
  output: {
    filename: "bundle.js",
    path: "/"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: [ 'babel-loader' ],
        include: path.join(__dirname, './'),
        exclude: /node_modules/
      },
    ]
  }
};

module.exports = config;
