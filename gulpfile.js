//Adiciona os modulos instalados
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

//Função para compressão de imagens
function buildImg() {
    return gulp
        .src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/img/'));
}

//Tarefa de gulp para compressão de imagens
gulp.task('build-img', buildImg);

//Função para compiliar o SASS e adicionar em breve os prefixos
function compilaSass() {
    return gulp
        .src('src/css/scss/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('src/css/'))
        .pipe(browserSync.stream());
}

//Tarefa de gulp para a função de SASS
gulp.task('sass', compilaSass);

//Função para juntar o JS
function gulpJs() {
    return gulp
        .src('src/js/main/*.js')
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('src/js/'))
        .pipe(browserSync.stream());
}

gulp.task('mainjs', gulpJs);

//Função para iniciar o browser
function browser() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
}
//Tarefa do browser-sync
gulp.task('browser-sync', browser);

//Função de watch do gulp
function watch() {
    gulp.watch('src/css/scss/*.scss', compilaSass);
    gulp.watch('src/js/main/*.js', gulpJs);
    gulp.watch(['*.html']).on('change', browserSync.reload);
}

//inicia a tarefa de watch
gulp.task('watch', watch);

//Tarefa padrão do Gulp, que inicia o watch e o browser-sync
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'mainjs'));

