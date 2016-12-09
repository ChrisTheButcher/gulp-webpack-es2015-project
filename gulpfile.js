const gulp = require('gulp');
const webpack = require('gulp-webpack');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

const webpackConfig = {
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel-loader?presets[]=es2015']
            }
        ]
    },
    output: {
        filename: '[bundle].js',
    },
};

gulp.task('scripts', ['sync'], ()=> gulp
    .src('src/js/app.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/js'))
);

gulp.task('styles', ()=> gulp
    .src('src/scss/app.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
);

gulp.task('sync', ['styles'], ()=> {
    gulp.start('scripts'); // starts watch

    gulp.watch('dist/js/app.js', browserSync.reload);
    gulp.watch('src/scss/**/*.scss', ['styles']);
    gulp.watch('dist/css/app.css', ()=> browserSync.reload('dist/css/app.css'));

    browserSync.init({
        server: { baseDir: "./" },
        port: 8080
    });
});

gulp.task('default', ['sync']);