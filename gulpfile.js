const sass = require('gulp-sass')
const gulp = require('gulp')
const browserSync = require('browser-sync').create()


const caminho = 'scss/**/*.scss'



function estilo() {
    return gulp.src(caminho)
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream())
}


function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }

    })
    gulp.watch(caminho, estilo).on('change', browserSync.reload)
}

exports.estilo = estilo
exports.watch = watch