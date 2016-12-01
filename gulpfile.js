var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var gulpif = require('gulp-if');
var babelify = require('babelify');
var streamify = require('gulp-streamify');
var source = require("vinyl-source-stream");
var fs = require('fs');

var isProduction = process.env.NODE_ENV === 'prod';
var conf = JSON.parse(fs.readFileSync('./src/config.json'));
conf.IS_DEV = !isProduction;
fs.writeFileSync('./src/config.json', JSON.stringify(conf, null, '  '));

console.log("isProduction: ", isProduction);

gulp.task('browserify', function() {
  var b = browserify({
    entries: ['src/js/main.js'],
    extensions: ['.jsx', '.js', '.json' ],
    debug: true
  });
  b.transform("babelify", { presets: ["es2015", "react"] });
  return b.bundle()
    .pipe(source('main.js'))
    .pipe(gulpif(isProduction, streamify(uglify())))
    .pipe(gulp.dest('./dist'));
});


gulp.task('css', function() {
  return gulp.src('src/less/*.*')
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  if (!isProduction) {
    gulp.watch('src/less/*.*', ['css']);
    gulp.watch(['src/js/*.*', 'src/common-ui/*.*'], ['browserify']);
  }
});


gulp.task('default', ['html', 'browserify', 'css', 'watch']);
gulp.task('build', ['default']);
