'use strict';

//require 
var gulp = require('gulp');
var sass = require('gulp-sass');

// settings
var input = './scss/**/*.scss';
var output = './css';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

// use 'gulp sass'
gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(input)
    // Run Sass on those files
    .pipe(sass(sassOptions)).on('error', sass.logError)
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output));
});