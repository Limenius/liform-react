const webpack = require('webpack')
const merge = require('webpack-merge')

const devBuild = process.env.NODE_ENV !== 'production'
const nodeEnv = devBuild ? 'development' : 'production'

let config = {
    entry: {
        main: './src/js/main.js'
    },
    output: {
        path: './dist/',
        filename: '[name].js'
    },
    resolve: {
        extensions: [ '', '.js' ],
    },
    module: {
        loaders: [
            { test: /\.scss$/i, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ] },
            { test: /\.css$/i, loaders: [ 'style-loader', 'css-loader','sass-loader' ] },
            { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.md$/, loader: 'html!highlight!markdown' },
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
            { test: /\.gif$/, loader: 'url-loader?limit=100000' },
            { test: /\.png$/, loader: 'url-loader?limit=100000' },
            { test: /\.jpg$/, loader: 'file-loader' },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(nodeEnv),
            },
        }),

    ]
};

if (devBuild) {
    console.log('Webpack dev build');
    module.exports = merge(config, {
        devtool: 'eval-source-map',
    });
} else {
    console.log('Webpack production build');
    module.exports = merge(config, {
        //module: {
        //    loaders: [
        //        { test: /\.scss$/i, loader: extractCSS.extract([ 'css','sass' ]) },
        //        { test: /\.css$/i, loader: extractCSS.extract([ 'css' ]) }
        //    ]
        //},
        plugins: [
            //    extractCSS,
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new webpack.DefinePlugin({
                // See https://reactjsnews.com/how-to-make-your-react-apps-10x-faster
                // I find unbelievable that this gives us a gain, but...
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
        ]
    })
}
