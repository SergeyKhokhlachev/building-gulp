/* global app */
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import importerSass from 'node-sass-tilde-importer';

import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import webpcss from 'gulp-webpcss';
import gcmq from 'gulp-group-css-media-queries';
import stylelint from 'gulp-stylelint';

const sass = gulpSass(dartSass);

// eslint-disable-next-line max-len
export default () => app.gulp.src(app.path.src.style, { sourcemaps: app.isDev })
  .pipe(app.plugins.plumber())
  .pipe(app.plugins.replace(/@img\//g, '../img/'))
  .pipe(app.plugins.replace(/@component\//g, '../../component/'))
  .pipe(stylelint({
    reporters: [
      {
        formatter: 'string',
        console: true,
      },
    ],
  }))
  .pipe(sass({
    outputStyle: 'expanded',
    importer: importerSass,
  }).on('error', sass.logError))
  .pipe(
    app.plugins.gulpIf(
      app.isBuild,
      gcmq(),
    ),
  )
  .pipe(
    app.plugins.gulpIf(
      app.isBuild,
      autoprefixer({
        grid: true,
        overrideBrowserslist: ['last 3 versions'],
        cascade: true,
      }),
    ),
  )
  .pipe(
    app.plugins.gulpIf(
      app.isBuild,
      webpcss({
        webpClass: '.webp',
        noWebpClass: '.no-webp',
      }),
    ),
  )
  .pipe(
    app.plugins.gulpIf(
      app.isBuild,
      app.gulp.dest(app.path.build.style),
    ),
  )
  .pipe(
    app.plugins.gulpIf(
      app.isBuild,
      cleanCSS(),
    ),
  )
  .pipe(
    app.plugins.rename({
      extname: '.min.css',
    }),
  )
  .pipe(app.gulp.dest(app.path.build.style))
  .pipe(app.plugins.browserSync.stream());
