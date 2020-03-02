const gulp = require('gulp')
const browserSync = require('browser-sync').create();
var minify = require('gulp-minify-css');

gulp.task('hello' , function(done){
  console.log('Привет, мир');
  done();
})

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('css', function(){
  gulp.src('./css/*.css')
  .pipe(concat('styles.css'))
  .pipe(minify())
  .pipe(gulp.dest('build/styles/'));
});