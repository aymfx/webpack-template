'use strict'

process.env.NODE_ENV = 'production'

const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.conf')
const config = require('../config')
const chalk = require('chalk') // 命令行彩色输出
const ora = require('ora') // 命令行环境的 loading效果
const rm = require('rimraf') //以包的形式包装rm -rf命令，用来删除文件和文件夹的，不管文件夹是否为空，都可删除
const spinner = ora('构建生产环境的项目')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory),err =>{ //删除文件夹并执行回调
    if (err) throw err;
    webpack(webpackConfig, (err, stats)=>{ //打包之后的回调函数
        spinner.stop() // 进度条停止加载
        if(err) throw err;

        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n')) //有错误报错
            process.exit(1) 
        }

        console.log(chalk.cyan('编译打包完成.\n'))
        console.log(chalk.yellow(
            '  Tip: 打包后，你需要起一个server服务器.\n' +
            '  直接打来index.html不能工作.\n'
        ))

    })
})


