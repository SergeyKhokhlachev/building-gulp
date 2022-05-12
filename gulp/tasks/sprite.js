/* global app */
import svgSprite from 'gulp-svg-sprite';

export default () => app.gulp.src(app.path.src.svgicons, {})
  .pipe(app.plugins.plumber())
  .pipe(svgSprite({
    mode: {
      stack: {
        sprite: '../icons/sprite.svg',
        example: true,
      },
    },
  }))
  .pipe(app.gulp.dest(app.path.build.img));
