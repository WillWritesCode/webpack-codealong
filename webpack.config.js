const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname, 'app/dist/'),
        filename: 'app.bundle.js',
        publicPath: '/dist/',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'app'),
        publicPath: '/dist/',
        /* only needed for files not yet included in the webpack bundle
            clearly a dev only option
        */
        watchContentBase: false,
        port: 8081,  
        // hot : true, 
        hotOnly : true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
};
