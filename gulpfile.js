const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function styles() {
  // retornar a pega dos arquivos fontes
  return (
    gulp
      .src("./src/styles/*.scss")

      // encadear compilação e compressão
      .pipe(sass({ outputStyle: "compressed" }))

      // enviar arquivos comprimidos para a pagina
      .pipe(gulp.dest("./dist/css"))
  );
}

exports.default = styles;

exports.watch = function () {
  gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
};
