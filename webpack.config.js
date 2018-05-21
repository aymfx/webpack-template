const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-plugin-manifest');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: {
        index:'./src/index.js',
        vendor:[
            'lodash'
        ]
    },
    
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:'/',
        // chunkFilename: '[name].bundle.js',
    },
    devServer:{
        contentBase:'./dist',
        hot:true
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'url-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'url-loader'
                ]
            }
        ]
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new HtmlWebpackPlugin({
            title:'test',
            template:'index.html'
        }),
        new CleanWebpackPlugin(['dist']),
        new ManifestPlugin(),
         new webpack.NamedModulesPlugin(),
         new webpack.HotModuleReplacementPlugin()
    ]
};