/* global app */
import webpHtml from 'gulp-webp-html-nosvg';
// === if use html ===
// import fileinclude from 'gulp-file-include';
// === if use pug ===
import pug from 'gulp-pug';

export default () => app.gulp.src(app.path.src.html)
  .pipe(app.plugins.plumber())
  // === if use html ===
  // .pipe(fileinclude({}))
  // === if use pug ===
  .pipe(pug({
    pretty: true,
    verbose: true,
    basedir: './src',
  }))
  .pipe(app.plugins.replace(/@img\//g, 'assets/img/'))
  .pipe(
    app.plugins.gulpIf(
      app.isBuild,
      webpHtml(),
    ),
  )
  .pipe(app.gulp.dest(app.path.build.html))
  .pipe(app.plugins.browserSync.stream());
