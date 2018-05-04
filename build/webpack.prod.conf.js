const merge = require('webpack-merge')
const config = require('../config')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const utils = require('./utils')
const path = require('path');

const env = require('../config/prod.env')

const webpackConfig = merge(baseWebpackConfig, {
    mode: "development",
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'app',
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new CleanWebpackPlugin(['docs'], {
            root: path.resolve(__dirname, '..')
        }),
        new webpack.DefinePlugin({
            'process.env': env
        }),
    ]
})

module.exports = webpackConfig