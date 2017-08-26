
/**
 * reference const objects
 */
const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

/**
 * Task: Compile SASS files to css
 */
gulp.task("sass", function () {
    return gulp.src(["src/scss/*.scss"])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

/**
 * Task: Serve files to browser...
 */
gulp.task("serve", ["sass"], function () {
    
    /**
     * Set the config
     */
    browserSync.init({
        server: "./src"
    });

    /**
     * Watch the changes - SASS, HTML
     */
    gulp.watch(["src/scss/*.scss"], ['sass']);
    gulp.watch(["src/*.html"]).on("change", browserSync.reload);
});

/**
 * Task: Default
 */
gulp.task("default", ["serve"]);
