var gulp = require('gulp')
  , connect = require('gulp-connect')
  , typescript = require('gulp-typescript');
 
gulp.task('reload', function(){
  gulp.src(['src/*.html', 'src/ts/compiled.js'])
    .pipe(connect.reload());
});

gulp.task('connect', function () {
  connect.server({
    root: [__dirname + '/src'],
    port: 9000,
    livereload: true
  });
});

gulp.task('watch', ['compile'], function () {
  gulp.watch('./src/**/*.ts', ['compile']);
  gulp.watch('./src/compiled.js', ['reload']);
});

gulp.task('compile', function(){
   gulp.src('./src/**/*.ts')
     .pipe(typescript({out: 'compiled.js'}))
     .pipe(gulp.dest('./src'))
});

gulp.task('default', ['connect', 'watch']);