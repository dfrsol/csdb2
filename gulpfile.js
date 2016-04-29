var gulp = require("gulp");
var sass = require('gulp-sass');
var neat = require('node-neat').includePaths;
var bourbon = require('node-bourbon').includePaths;

const paths = {
    scss: './client/sass/*.scss'
};


gulp.task('styles', function() {
    gulp.src(paths.scss)
        .pipe(sass({
            includePaths: bourbon,
            includePaths: neat
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./client/css'));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch(['./client/sass/**/*.scss', './client/sass/**/**/*.scss'],['styles']);
});