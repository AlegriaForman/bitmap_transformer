'use strict';

const gulp = require('gulp');
var eslint = require('gulp-eslint');
var eslintRules = require('__dirname + .eslintrc');
var paths = ['lib/*.js', 'test/*.js', 'index.js', 'gulpfile.js'];

gulp.task('eslint', () => {
  return gulp.src(paths)
  .pipe(eslint(eslintRules))
  .pipe(eslint.format());
});
