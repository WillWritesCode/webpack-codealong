const path = require('path');
module.exports = {
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname, 'app/dist/'),
        filename: 'app.bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'app'),
        publicPath: '/dist/',
        /* only needed for files not yet included in the webpack bundle
            clearly a dev only option
        */
        watchContentBase: true,  
    }
};
