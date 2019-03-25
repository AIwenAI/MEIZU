const gulp = require('gulp'),
connect = require('gulp-connect'),
sass = require('gulp-sass');
sass.compiler = require('node-sass');
// 默认执行default
gulp.task('default',['allFile','sass','server','watch']);

gulp.task('del',function(){
    del(['dist']);
})
// 输出app文件夹下面除了sass文件夹的所有文件到dist文件夹内
gulp.task('allFile',function(){
    gulp.src(['app/**/*','!app/sass/**/*'])
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
})
// 输出app下面sass文件夹的内后缀名为.scss的所有文件
gulp.task('sass',function(){
    gulp.src('app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
})
// 监听app下面的文件是否修改
gulp.task('watch',function(){
    gulp.watch(['app/**/*','!app/sass/**/*'],['allFile']);
    gulp.watch('app/sass/**/*.scss',['sass','allFile']);
})
// 生成服务器
gulp.task('server',function(){
    connect.server({
        root: 'dist',//设置根目录
        livereload: true, //是否热更新
        port: 3333  //设置默认端口号
    })
})