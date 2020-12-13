const gulp = require("gulp");

const SwordCSS = require("gulp-sword");
const postcss = require("gulp-postcss");
const scss = require("gulp-sass");

scss.compiler = require("dart-sass");

const autoprefixer = require("autoprefixer");
const presetEnv = require("postcss-preset-env");

gulp.task("default", () => {
  return gulp
    .src("src/**.scss")
    .pipe(scss())
    .pipe(SwordCSS({ minify: true }))
    .pipe(postcss([autoprefixer, presetEnv]))
    .pipe(gulp.dest("dist/"));
});
