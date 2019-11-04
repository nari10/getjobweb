var gulp = require('gulp');
var concat = require('gulp-concat');
var express = require('express');
var browserSync = require('browser-sync');
var util = require('gulp-util')

gulp.task('concat:js', function(){
    return gulp.src(['project/src/**/**.js'])
        .pipe(concat('index.js'))
        .pipe(gulp.dest('project/dist/js'));
});

gulp.task('watch', function(){
  gulp.watch('project/src/**/*.js', ['concat:js']);
});

gulp.task('server', function(){
  server = express();
  server.use(express.static('dist'))
  server.listen(8000);
  browserSync({
    proxy: 'localhost:8000'
  });
});

function reload() {
  if (server) {
    return browserSync.reload({
      stream:true
    });
  }
  return util.noop();
}

gulp.task('default', ['concat:js', 'watch']);










// // gulp 및 패키지 모듈 호출 
// var gulp = require('gulp'),
//     concat = require('gulp-concat'),
//     uglify = require('gulp-uglify'),
//     rename = require('gulp-rename'),
//     sourcemaps = require('gulp-sourcemaps'),
//     scss = require('gulp-sass'),
//     livereload = require('gulp-livereload'); // livereload 호출 

// var src = 'project/src';
// var dist = 'project/dist';
// var paths = {
//     js: src + '/js/**/*.js',
//     scss: src + '/sass/**/*.scss'
// };
// /** 
//   *  =====================================+ 
//   *  @task : HTML livereload 반영 
//   *  =====================================+ 
//   */
// gulp.task('html', function () {
//     return gulp /** * html 파일을 읽어오기 위해 경로 지정 */
//         .src('./**/*.html') /** * html 파일을 읽어온 후 livereload 호출하여 브라우저에 반영 */
//         .pipe(livereload());
// });

// /** =====================================+ 
//  *  @task : Script 병합,압축,min 파일 생성 
//  *  =====================================+ 
//  */
// gulp.task('js:combine', function () {
//     return gulp.src(paths.js)
//         .pipe(concat('combined.js'))
//         .pipe(gulp.dest(dist + '/js'))
//         .pipe(uglify())
//         .pipe(rename('combined.min.js'))
//         .pipe(gulp.dest(dist + '/js')) /** * 스크립트 task를 모두 수행한 후 livereload 호출하여 브라우저에 반영 */
//         .pipe(livereload());
// });

// /** ==============================+ 
//  *  @SCSS : SCSS Config(환경설정) 
//  * ==============================+ 
//  */

// var scssOptions = {
//     outputStyle: "expanded",
//     indentType: "tab",
//     indentWidth: 1,
//     precision: 6,
//     sourceComments: false
// };

// /** * ==================================+ 
//  * @task : SCSS Compile & sourcemaps 
//  * ==================================+ 
//  */
// gulp.task('scss:compile', function () {
//     return gulp.src(paths.scss)
//         .pipe(sourcemaps.init())
//         .pipe(scss(scssOptions)
//         .on('error', scss.logError))
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest(dist + '/css')) /** * SCSS 컴파일을 수행한 후 livereload 호출하여 브라우저에 반영 */
//         .pipe(livereload());
// });

// /** * ==============================+ * @task : livereload 실행 * ==============================+ */

// gulp.task('live', ['html', 'js:combine', 'scss:compile'],
//     function () { /** * livereload.listen() 옵션값으로 기본 경로를 지정 */
//         livereload.listen(
//             { basePath: dist }
//         );
//     }); /** * ==================================+ * @task : watch 파일 변경을 감지 * ==================================+ */

// gulp.task('watch', function () {
//     gulp.watch('./**/*.html', ['html']); // html task 를 watch 에 등록 
//     gulp.watch(paths.js, ['js:combine']);
//     gulp.watch(paths.scss, ['scss:compile']);
// });

// gulp.task('default', ['live', 'watch']); 