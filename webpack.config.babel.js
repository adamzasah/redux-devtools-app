import path from 'path';

const config = {
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
            loader: 'babel-loader'
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

export default config;
