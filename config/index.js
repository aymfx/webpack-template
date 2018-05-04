'use strict'
/* 
    用户根据自己的需求配置自己想要的东西
*/
const path = require('path')

module.exports = {
    dev:{ //开发环境
        assetsPublicPath: '/', ////打包后html页面的路
        assetsSubDirectory: 'static', //打包后js和css以及图片存放路径
        cssSourceMap: "true", productionSourceMap: true, //是否启用开发环境的sourcmap
    },
    build:{//生产环境
        assetsRoot:path.resolve(__dirname,'../docs'),//项目最终生成的目录
        assetsPublicPath: '/',  ////打包后html页面的路
        assetsSubDirectory: 'static', //打包后js和css以及图片存放路径
        productionSourceMap: true, //是否启用生产环境的sourcmap
    }
}