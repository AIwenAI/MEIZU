const gulp = require('gulp'),
htmlmin = require('gulp-htmlmin'),//压缩html
cleanCSS = require('gulp-clean-css'),//压缩css
babel = require('gulp-babel'),//把es6转成es5
uglify = require('gulp-uglify'),//压缩js
rev = require('gulp-rev'),//生成hash值
revCollector = require('gulp-rev-collector'),//改变html内请求css和js的路径
gulpSequence = require('gulp-sequence'), // 处理异步任务
del = require('del');//删除文件

gulp.task('del',function(){
    del(['dist']);
})

gulp.task('default',function(){
    gulpSequence()();
})

gulp.task('miniHtml',function(){
    gulp.src(['rev/**/*.json','app/**/*.html'])
    .pipe(revCollector({
        replaceReved: true,
        dirReplacements: {}
    }))
    .pipe(htmlmin({
        minifyJS: true,//压缩页面JS
        minifyCSS: true,//压缩页面CSS
        collapseWhitespace: true,//压缩HTML
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('miniCss', function() {
    gulp.src('app/**/*.css')
    .pipe(cleanCss({compatibility: 'ie8'}))
    .pipe(rev())
    .pipe(gulp.dest('dist'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('rev')) 
})

gulp.task('miniJs', function () {
    gulp.src('app/**/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest('dist'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('rev/js')) 
})


