/**
 * Created by andy on 6/13/15.
 */

var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('minifycss', function() {
    return gulp.src('css/*.css')
        .pipe(minifycss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css/minified'));
});

gulp.task('default', ['minifycss']);