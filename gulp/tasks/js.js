/* global app */
import webpack from 'webpack-stream';
import eslint from 'gulp-eslint-new';

export default () => app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
  .pipe(app.plugins.plumber())
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
  .pipe(webpack({
    mode: app.isBuild ? 'production' : 'development',
    output: {
      filename: 'app.min.js',
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
        },
      ],
    },
  }))
  .pipe(app.gulp.dest(app.path.build.js))
  .pipe(app.plugins.browserSync.stream());
