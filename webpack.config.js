var webpack = require('webpack');

module.exports = {
    entry:[
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        './app-client.js'],
    output: {
        path:__dirname+"/public",
        filename: "bundle.js",
        publicPath:'/'
    },
    devServer: {
        inline: true,
        contentBase:'./public',
        port:3000
    },
    module: {
        loaders: [
            {   
                test:/\.js$/,
                exclude: /(node_modules|app-server.js)/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};