// base module
import gulp from 'gulp';
// import path
import path from './gulp/config/path.js';
// import plugins
import plugins from './gulp/config/plugins.js';

// import tasks
import server from './gulp/tasks/server.js';
import reset from './gulp/tasks/reset.js';
// ==
import html from './gulp/tasks/html.js';
import scss from './gulp/tasks/scss.js';
import js from './gulp/tasks/js.js';
import img from './gulp/tasks/img.js';
// ==
import files from './gulp/tasks/files.js';
import fonts from './gulp/tasks/fonts.js';
import sprite from './gulp/tasks/sprite.js';

// config const
global.app = {
  gulp,
  path,
  plugins,
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
};

// watcher
function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.style, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.img, img);
}

// script
const main = gulp.series(files, fonts, sprite, gulp.parallel(html, scss, js, img));
// ==
const dev = gulp.series(reset, main, gulp.parallel(watcher, server));
const build = gulp.series(reset, main);

// export
export { dev };
export { build };
export { files };
export { fonts };
export { sprite };

// default
gulp.task('default', dev);
