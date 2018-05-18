const merge = require('webpack-merge');
const common = require('./webpack.base.conf');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-plugin-manifest');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = merge(common, {
    devtool: 'source-map',
    mode: "production",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader"
                    })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style/[hash]-style.css'),
        new ManifestPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('production')
        }),
        
        
    ]
})