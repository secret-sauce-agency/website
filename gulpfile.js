/* Global */
var gulp = require('gulp');
    rename = require("gulp-rename");
    notify = require('gulp-notify');


/* Less */
var less = require('gulp-less');
    autoprefixer = require('gulp-autoprefixer');
    cssnano = require('gulp-cssnano');
var lessMasterFile = './less/secretsauce-master.less';
    lessWatchFolder = './less/**/*.less';
    lessOutputFolder = './css';
    lessOutputFile = 'secretsauce-master.css';
    lessOutputFileMin = 'secretsauce-master.min.css';

gulp.task('less', function () {
  return gulp
    .src(lessMasterFile)
      .pipe(less( 'compress: false' )).on('error', notify.onError(function (error) {
        return "ERROR! pipe less Problem file : " + error.message;
      }))
      .pipe(autoprefixer('last 2 version'))
      .pipe(rename(lessOutputFile))
      .pipe(gulp.dest(lessOutputFolder))

      .pipe(cssnano()).on('error', notify.onError(function (error) {
        return "ERROR! minifyCSS Problem file : " + error.message;
      }))
      .pipe(rename(lessOutputFileMin))
      .pipe(gulp.dest(lessOutputFolder))
      .pipe(notify('Less Compiled Prefixed and Minified'));
});

gulp.task('watchLESS', function() {
  gulp.watch(lessWatchFolder, ['less'])
});




gulp.task('default', ['less', 'watchLESS' ]);
