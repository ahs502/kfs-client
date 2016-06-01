var gulp = require("gulp");
// var util = require("gulp-util");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var path = require('path');
var del = require('del');

///////////////////////////////////////////////////////////

var paths = {
    src: {
        'localforage': [
            "./src/module.js",
        ],
        // 'localStorage': [
        //     //...
        // ],
    },
    dist: {
        path: "./dist",
        name: "kfs-client"
    }
};

///////////////////////////////////////////////////////////

gulp.task('clean', cb => {
    del([path.join(paths.dist.path, '*')]).then(() => {
        cb();
    });
});

gulp.task('build-localforage', () =>
    gulp.src(paths.src['localforage'])
    .pipe(concat(paths.dist.name + '.localforage.js'))
    .pipe(gulp.dest(paths.dist.path))
    .pipe(uglify())
    .pipe(concat(paths.dist.name + '.localforage.min.js'))
    .pipe(gulp.dest(paths.dist.path)));

gulp.task('build', ['clean', 'build-localforage']);

gulp.task('watch', ['build'], callback => {
    gulp.watch(paths.src['localforage'], ['build']);
    callback();
});

gulp.task('default', ['watch']);
