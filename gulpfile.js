var gulp = require("gulp");
// var util = require("gulp-util");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var path = require('path');
var del = require('del');

///////////////////////////////////////////////////////////

var paths = {
    src: [
        "./src/module.js",
    ],
    dist: {
        path: "./dist",
        file: "kfs-client.js",
        minified: "kfs-client.min.js"
    }
};

///////////////////////////////////////////////////////////

gulp.task('clean', cb => {
    del([path.join(paths.dist.path, '*')]).then(() => {
        cb();
    });
});

gulp.task('build', ['clean'], () =>
    gulp.src(paths.src)
    .pipe(concat(paths.dist.file))
    .pipe(gulp.dest(paths.dist.path)));

gulp.task('minify', ['build'], () =>
    gulp.src(path.join(paths.dist.path, paths.dist.file))
    .pipe(concat(paths.dist.minified))
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist.path)));

gulp.task('watch', ['minify'], () =>
    gulp.watch(paths.src, ['minify']));

gulp.task('default', ['watch']);
