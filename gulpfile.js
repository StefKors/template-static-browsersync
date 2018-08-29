var gulp = require("gulp");
var browserSync = require("browser-sync").create();


gulp.task("serve", function() {
	browserSync.init({
		injectChanges: true,
		server: "./",
		port: 8080
	});

	gulp.watch("**/*.html").on("change", browserSync.reload);
	gulp.watch("css/**/*.css").on("change", browserSync.reload);
	gulp.watch("js/**/*.js").on("change", browserSync.reload);
});

gulp.task("default", ["serve"]);
