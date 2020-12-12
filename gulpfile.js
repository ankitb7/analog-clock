const del = require('del');
const pkg = require('./package.json');
const dirs = pkg['directories'];
const gulp = require('gulp');
const plugins = require('gulp-load-plugins');

const deploy = require('gulp-gh-pages');

gulp.task('clean', (done) => {
  del([
    dirs.dist
  ]).then(() => {
    done();
  });
});

gulp.task('copy', () =>
  gulp.src([
    `${dirs.src}/**/*`,
  ], {
    dot: true
  }).pipe(gulp.dest(dirs.dist))
);

gulp.task('lint:js', () =>
  gulp.src([
    `${dirs.src}/js/*.js`,
    `${dirs.test}/*.js`
  ]).pipe(plugins().eslint())
    .pipe(plugins().eslint.failOnError())
);

gulp.task(
  'build',
  gulp.series(
    gulp.parallel('clean', 'lint:js'),
    'copy',
  )
);

gulp.task('default', gulp.series('build'));

gulp.task('deploy', () => gulp.src('./dist/**/*').pipe(deploy()));
