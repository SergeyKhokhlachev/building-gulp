/* global app */
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export default () => app.gulp.src(app.path.src.fonts)
  .pipe(app.plugins.plumber())
  .pipe(fonter({
    formats: ['woff'],
  }))
  .pipe(app.gulp.dest(app.path.build.fonts))
  .pipe(app.gulp.src(app.path.src.fonts))
  .pipe(ttf2woff2())
  .pipe(app.gulp.dest(app.path.build.fonts));
