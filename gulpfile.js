var gulp = require('gulp');
sass = require('gulp-sass'); //Подключаем Sass пакет

gulp.task('sass', function(){ // Создаем таск "sass"
	return gulp.src('app/sass/**/*.sass') // Берем все sass файлы из папки sass и дочерних, если таковые будут
		.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
});