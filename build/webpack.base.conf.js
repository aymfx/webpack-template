const path = require('path');
const {resolve} = require('./tool');

module.exports = {
    context: path.resolve(__dirname, '../'), ////基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
    entry:'./src/main.js',
    output: {
        filename: 'bundle.js',
        path: './dist'
    }
};