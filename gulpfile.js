'use strict';

const gulp = require('gulp');
var eslint = require('gulp-eslint');
var eslintRules = require(__dirname + '/.eslintrc');
var files = ['lib/*.js', '/index.js', '/gulpfile.js'];

gulp.task('mocha:test', () => {
  return gulp.src('./test/*.js')
  .pipe(mocha());
});

gulp.task('lint:test', () => {
  return gulp.src('./test/*.js')
    .pipe(eslint(eslintRules))
    .pipe(eslint.format());
});

gulp.task('lint:nontest', () => {
  return gulp.src(files)
  .pipe(eslint(eslintRules))
  .pipe(eslint.format());
});

gulp.task('watch', () => {
  gulp.watch('./test/*.js', ['lint:test', 'mochaTest']);
  gulp.watch(files, ['lint:nontest', 'mochaTest']);
});

gulp.task('lint', ['lint:test', 'lint:nontest']);
gulp.task('mochaTest', ['mocha:test']);
gulp.task('default', ['lint', 'mochaTest']);
