const path = require('path');

module.exports = {
    mode: 'production',
    context: path.join(__dirname, 'src'),
    entry: './devTools.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }, {
            test: /\.(css)$/,
            //exclude: /(node_modules)/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    url: false
                }
            }]
        }]
    },
    performance: {
        maxAssetSize: 2000000,
        maxEntrypointSize: 2000000
    }
};
