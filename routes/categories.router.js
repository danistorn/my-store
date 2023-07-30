const express = require('express');
const app = express();
const { faker } = require('@faker-js/faker');

const router = express.Router();


// Abrimos otro endpoint para users:
app.get('/categories', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
});


module.exports = router;





















const gulp = require ('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function(cb) {
    console.log('Construyendo el sitio');
    setTimeOut(cb, 1200);
    //cb(); (en vez del setTimeOut)
});

gulp.task('serve', function(cb) {
  gulp.src('www')
    .pipe(server({
        livereload: true,
        open: true,
    }));
});

gulp.task('default', gulp.series('build', ))







const { app, BrowserWindow } = require('electron');

let windowPrincipal;

app.on('ready', crearWindow);

function crearWindow() {
  windowPrincipal = new BrowserWindow({
    width: 800,
    height: 600,
  });

  windowPrincipal.loadFile('index.html');
}
