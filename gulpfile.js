var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename');
    
gulp.task('default', function() {
    // 压缩js文件
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./min_js'));
    // 编译sass并压缩css文件，命名为jikexueyuan.min.css
    sass('./scss/*.scss')
        .pipe(autoprefixer('last 4 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('./css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./css'));
    //压缩图片
    gulp.src('./image_big/**')
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('./image'));
});