var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', function (done) {
    gulp.src('css/styles.css')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build'));
    done();
});


gulp.task('watch', function () {
    // gulp.watch('css/styles.css', ['styles']);
    gulp.watch('css/styles.css', gulp.series('styles'));
});
