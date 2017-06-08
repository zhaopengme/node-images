<p></p><p>var rd = require('rd');
// 同步列出目录下的所有文件
// var files = rd.readSync('/Users/zhaopeng/GitBook/Library/zhaopengme/gitbook/_resource');
var files = rd.readFilterSync('/Users/zhaopeng/GitBook/Library/zhaopengme/gitbook/_resource', /\.png|jpg$/);


console.log(files);


// // 异步列出目录下的所有文件
// rd.read('/tmp', function (err, files) {
//   if (err) throw err;
//   // files是一个数组，里面是目录/tmp目录下的所有文件（包括子目录）


// });






var images = require('images');
var path = require('path');
var watermarkImg = images('/Users/zhaopeng/Pictures/logo.png');
var sourceImg = images('/Users/zhaopeng/GitBook/Library/zhaopengme/gitbook/_resource/mac/iTerm/8.png');
var savePath = path.join(__dirname, 'saveImg.jpg');
// 比如放置在右下角，先获取原图的尺寸和水印图片尺寸
var sWidth = sourceImg.width();
var sHeight = sourceImg.height();
var wmWidth = watermarkImg.width();
var wmHeight = watermarkImg.height();
images(sourceImg)
    // 设置绘制的坐标位置，右下角距离 10px
    .draw(watermarkImg, sWidth - wmWidth - 10, sHeight - wmHeight - 10)
    // 保存格式会自动识别
    .save(savePath);
</p><p></p>