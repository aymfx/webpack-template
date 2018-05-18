const merge = require('webpack-merge');
const common = require('./webpack.base.conf');
const webpack = require('webpack');
module.exports = merge(common,{
     mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})