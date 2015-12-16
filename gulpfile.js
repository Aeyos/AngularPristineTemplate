var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('default', function() {
	gulp.src('.')
		.pipe(server({
			livereload: true,
			directoryListing: false,
			open: true,
			port: 80,
			defaultFile: 'index.html'
	}));
});

gulp.task('webserver', function() {
	gulp.src('.')
		.pipe(server({
			livereload: true,
			directoryListing: false,
			open: true,
			port: 8000,
			defaultFile: 'index.html'
	}));
});