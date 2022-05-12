/* global app */
import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export default () => app.gulp.src(app.path.src.img)
  .pipe(app.plugins.plumber())
  .pipe(app.plugins.newer(app.path.build.img))
  .pipe(
    app.plugins.gulpIf(
      app.isBuild,
      webp(),
    ),
  )
  .pipe(
    app.plugins.gulpIf(
      app.isBuild,
      app.gulp.dest(app.path.build.img),
    ),
  )
  .pipe(
    app.plugins.gulpIf(
      app.isBuild,
      app.gulp.src(app.path.src.img),
    ),
  )
  .pipe(
    app.plugins.gulpIf(
      app.isBuild,
      app.plugins.newer(app.path.build.img),
    ),
  )
  .pipe(
    app.plugins.gulpIf(
      app.isBuild,
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3,
      }),
    ),
  )
  .pipe(app.gulp.dest(app.path.build.img))
  .pipe(app.gulp.src(app.path.src.svg))
  .pipe(app.gulp.dest(app.path.build.img))
  .pipe(app.plugins.browserSync.stream());
