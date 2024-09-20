const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

//Função para compilar o Sass e mover o CSS para o dist
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}


//Função para otimizar imagens e mover para o dist
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

//Função para copiar o JavaScript para o dist
function scripts() {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(gulp.dest('./dist/js'));
}

//Tarefa padrão que inclui a compilação do Sass, cópia de imagens e javaScript
exports.default = gulp.parallel(styles, images, scripts);

//Tarefa de watch que observa mudanças em arquivos .scss, imagens e scripts
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/images/**/*', gulp.parallel(images))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}