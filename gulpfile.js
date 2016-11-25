var gulp = require('gulp');
// gulp.src 输入文件流
// gulp.pipe() 传输文件流
// gulp.dest() 输出文件流
// gulp.task() 创建任务
// gulp.watch() 监听
var less = require('gulp-less');
//压缩css
var cleanCss = require('gulp-clean-css');
//自动设置兼容
var autoPrefix = require('gulp-autoprefixer');
//合并
var concat = require('gulp-concat');
//压缩js
var uglify = require('gulp-uglify');
//服务器
var connect = require('gulp-connect');
//加密
var rev = require('gulp-rev');
//植入html
var inject = require('gulp-inject');
//删除老文件
var clean = require('gulp-clean');
//执行顺序
var sequence = require('gulp-sequence');
//整合css
//整合css
gulp.task('less',function(){
	return gulp.src(['www/view/*.less'])
	.pipe( less() )
	.pipe(autoPrefix({
            browsers: ['last 20 versions'],
            cascade: true
		}))
	.pipe( concat('app.min.css') )
	.pipe( cleanCss() )
	.pipe( gulp.dest('www/dest/') );
});
//js 操作
gulp.task('js',function(){
	//先引用app.js
  return gulp.src(['www/indexpage.js','www/controller/*Controller.js'])
   .pipe( concat('app.min.js') )
   .pipe( uglify() )
   .pipe( gulp.dest('www/dest/'))
});

gulp.task("localhost",function(){
    connect.server({
      root:'www', //静态资源目录
      port:3000
      })
});
//监听
gulp.task('mywatch',function(){
  /*gulp.watch('*.less').on('change',function(e){
  	console.log("less编译"+e.path);
  	gulp.src(e.path)
  	 .pipe()
  	 .pipe( gulp.dest())
  	});*/
gulp.watch('www/view/*.less',['less']);
gulp.watch(['www/indexpage.js','www/controller/*Controller.js'],['js']);

});

//缓存
//生成加密文件
gulp.task('rev',function(){
 return  gulp.src( ['www/dest/app.min.css','www/dest/app.min.js'])
    .pipe( rev())
    .pipe( gulp.dest('www/dest/'))
    .pipe( rev.manifest())
    .pipe( gulp.dest('www/dest/'));
});

//植入
gulp.task('inject',function(){
  return  gulp.src('indexpage.html')
      .pipe(inject( gulp.src(['www/dest/app-*.min.js','www/dest/app-*.min.css'])))
      .pipe( gulp.dest('www/dest/'));
});

//清理
gulp.task('clean',function(){
  return gulp.src('www/dest/app-*.min.*')
    .pipe( clean())
    //.pipe( gulp.dest('dest/'))
});
//执行顺序

gulp.task('sequence',function(cb){
    sequence('less','js','mywatch','clean','rev','inject',cb);
});
