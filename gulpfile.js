const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const sass = require('sass');
const sassCompile = gulpSass(sass);

gulp.task("compileSassFile",async()=>{
    gulp.src("src/components/**/*.scss").pipe(sassCompile()).pipe(gulp.dest("src/css"));
})
gulp.task("watch",async()=>{
    gulp.watch("src/components/**/*.scss",()=>{
        gulp.src("src/components/**/*.scss").pipe(sassCompile()).pipe(gulp.dest("src/css"));
    })
})