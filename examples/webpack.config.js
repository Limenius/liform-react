const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    path.join(__dirname, 'index.js'),
  ],
  output: {
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      'liform-react': path.resolve('src'),
    },
  },
};
