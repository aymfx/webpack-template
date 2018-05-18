const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-plugin-manifest');

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: {
        app:'./src/index.js',
        print:'./src/js/print.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer:{
        contentBase:'./dist',
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
        new HtmlWebpackPlugin({
            title:'test',
            template:'index.html'
        }),
        new CleanWebpackPlugin(['dist']),
        new ManifestPlugin()
    ]
};