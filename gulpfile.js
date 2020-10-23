const gulp = require("gulp");
const pug = require("gulp-pug");
const stylus = require("gulp-stylus");

let src = {
  dev: {
    pug: "app/src/pug/*.pug",
    stylus: "app/src/stylus/"
  },

  build: {
    html: "app/build/",
    css: "app/build/css"
  },
};

gulp.task("pug", function () {
  return gulp

    .src(src.dev.pug)

    .pipe(
      pug({
        pretty: true,
      })
    )

    .pipe(gulp.dest(src.build.html));
});
gulp.task('stylus', function () {
	// eslint-disable-next-line prefer-template
	return gulp.src(src.dev.stylus + 'style.styl')
		.pipe(stylus())
		.pipe(gulp.dest(src.build.css));
});