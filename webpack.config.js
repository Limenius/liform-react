let path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: './src/js/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.scss$/i, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ] },
            { test: /\.css$/i, loaders: [ 'style-loader', 'css-loader','sass-loader' ] },
            { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.md$/, loader: 'html-loader!highlight-loader!markdown-loader' },
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
            { test: /\.gif$/, loader: 'url-loader?limit=100000' },
            { test: /\.png$/, loader: 'url-loader?limit=100000' },
            { test: /\.jpg$/, loader: 'file-loader' },
        ]
    }
}

