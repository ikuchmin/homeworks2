var gulp = require('gulp');
var notify = require('gulp-notify');
var minifyCss = require('gulp-minify-css');
var minify = require('gulp-minify');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var paths = {
    sass:['sass/**/*.sass'],
    script:['js/common.js', 'libs/**/*.js']
};

gulp.task('sass', function () {
    return gulp.src(paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
        .pipe(notify({
        onLast: true,
        message: 'Done! Sass...'
    }));
});

gulp.task('mincss', function(){
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(gulp.dest('css/styles'))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist'))
        .pipe(notify({
        onLast: true,
        message: 'Done! MinCSS...'
    }));
});

gulp.task('minscripts', function(){
    return gulp.src(paths.script)
        .pipe(minify())
        .pipe(gulp.dest('dist/libs/scripts'))
        .pipe(notify({
        onLast: true,
        message: 'Done! MinScripts...'
    }));	
});

gulp.task('copyimages', function() {
    gulp.src('images/**')
        .pipe(gulp.dest('dist/images'))
})

gulp.task('minhtml', function() {
    gulp.src('index.html')
        .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true}))
        .pipe(gulp.dest('dist'))
})

gulp.task('watcher',function(){
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['watcher'] );