const merge = require('webpack-merge')
const config = require('../config')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const utils = require('./utils')
const path = require('path');

const env = require('../config/prod.env')

const devwebpackConfig = merge(baseWebpackConfig, {
    mode: "development",
    devServer:{
        contentBase: '../docs',
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'app',
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin() // HMR shows correct file names in console on update.
    ]
})

module.exports = devwebpackConfig