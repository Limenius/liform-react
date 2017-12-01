var path = require("path");

var config = {
  entry: {
    simple: "./docs/pages/examples/simple/index",
    "all-widgets": "./docs/pages/examples/all-widgets/index",
    "arrays": "./docs/pages/examples/arrays/index",
    "change-layout": "./docs/pages/examples/change-layout/index",
    "combining-schemas": "./docs/pages/examples/combining-schemas/index",
    "custom-field-validation": "./docs/pages/examples/custom-field-validation/index",
    "custom-themes": "./docs/pages/examples/custom-themes/index",
    "initial-values": "./docs/pages/examples/initial-values/index",
    "refs": "./docs/pages/examples/refs/index",
    "validation": "./docs/pages/examples/validation/index",
  },
  output: {
    filename: "[name]/bundle.js",
    path: path.resolve(__dirname, "./docs/pages/examples/")
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: [ 'babel-loader' ],
        exclude: /node_modules/
      },
      {
        test: /\.json?/,
        loaders: [ 'json-loader' ],
      },
    ]
  }
};

module.exports = config;
