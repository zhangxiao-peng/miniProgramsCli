const del = require('del');
const gulp=require('gulp');


// 目标文件路径
const srcPath = './src/**';
// 编译后文件路径
const distPath = './dist/';

function defaultTask(cb) {
    console.log('defaultTask')
    cb()
}
//删除dist文件夹
function clean(){
    console.log('cleaning...')
    return del([
        'src/commom/config.js',
        'dist/*'
    ])
}

exports.default=defaultTask
exports.clean=clean
