const gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create()

  gulp.task('sass',()=>
  gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
  )

  gulp.task('serve',['sass'], function() {
    browserSync.init({
      server: {
        baseDir: "./"
      }
    })
    gulp.watch ("sass/*.scss", ['sass'])
    gulp.watch("./*.html")
    gulp.watch ("views/*.html")
    gulp.watch("scripts/*.js")
    // Broser Reload
    gulp.watch("scripts/*.js").on('change', browserSync.reload)
    gulp.watch ("./*.html").on('change', browserSync.reload)
    gulp.watch ("./views/*.html").on('change', browserSync.reload)
  })