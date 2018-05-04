'use strict'
const path = require('path')
const config = require('../config')
const utils = require('./utils') 

// const vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
    return path.join(__dirname, '../', dir)
}
module.exports = {
    context: path.resolve(__dirname, '../'), //基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
    entry: { //入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始
        app:'./src/main.js'  //入口文件
    },
    output:{ //输出
        path: config.build.assetsRoot, //输出的目录
        filename: '[name].js', //输出打包后的js文件名 
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath, //打包后html页面的路径
    },
    resolve: { //解析
        extensions: [".js", ".json", '.vue'], //能够使用户在引入模块时不带扩展
        alias: { //创建 import 或 require 的别名，来确保模块引入变得更简单
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'), //方便创建模板
        }
    },
    plugins: [
    ],
    module:{
        rules:[{
            test: /\.san$/,
            include: [resolve('src')],
            loader: 'san-loader',
            
        },
            {
                test: /\.js$/,
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
                use:{
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
        ]
    }

}