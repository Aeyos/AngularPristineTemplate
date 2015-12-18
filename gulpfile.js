var gulp   = require('gulp');
var concat = require('gulp-concat');
var mincss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass   = require('gulp-sass');
var server = require('gulp-server-livereload');

gulp.task('default',   ['livereload'    , 'sass:watch'] );
gulp.task('webserver', ['livereload8000', 'sass:watch'] );

gulp.task('livereload', function () {
	gulp.src('.')
		.pipe(server({
			livereload: true,
			directoryListing: false,
			open: true,
			port: 80,
			defaultFile: 'index.html'
	}));
});

gulp.task('livereload8000', function() {
	gulp.src('.')
		.pipe(server({
			livereload: true,
			directoryListing: false,
			open: true,
			port: 8000,
			defaultFile: 'index.html'
	}));
});

gulp.task('sass:watch', function () {
	gulp.watch('app/sass/**/*.scss', ['sass']);	// Watch all SCSS files for changes
});
gulp.task('sass', function () {
	gulp.src('app/sass/**/*.scss')				// Get all SCSS files
		.pipe(concat('sass.css'))					// concatenate the files
		.pipe(sass().on('error', sass.logError))	// sass the css
		.pipe(gulp.dest('app/css'))					// save the sass.css to css/
		//.pipe(concat('sass.min.scss'))			// create another instance
		//.pipe(mincss())							// minify it
		//.pipe(gulp.dest('app/css'));				// save the minified file
});
