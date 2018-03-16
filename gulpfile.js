'use strict'

const browserSync = require('browser-sync');
const reload = browserSync.reload;
const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-minify-css');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

gulp.task('scripts', () => {
	browserify('src/scripts/app.js')
        .transform('babelify', {
            presets: ['env']
        })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        //.pipe(concat('main.js'))
        //.pipe(uglify())
        .pipe(rename({basename: 'main', suffix: '.min'}))
        .pipe(gulp.dest('./dist/scripts'))
        .pipe(reload({stream:true}));
});

gulp.task('styles', () => {

    return gulp.src('./src/styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer('last 5 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(concat('style.css'))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/styles'))
        .pipe(reload({ stream: true }));
});

gulp.task('watch', function() {
    gulp.watch('./src/scripts/**/*.js', ['scripts']);
    gulp.watch('./src/styles/**/*.scss', ['styles']);
});

gulp.task('default',['scripts', 'styles', 'watch']);