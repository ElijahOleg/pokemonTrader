var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('templates', function() {
  gulp.src('./views/*.jade')
    .pipe(jade({}))
    .pipe(gulp.dest('./public/views'))
});

gulp.task('default', function(){
  gulp.watch('./views/*.jade', ['templates']);

});
