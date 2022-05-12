export default {
  build: {
    html: './dist/',
    js: './dist/assets/js/',
    style: './dist/assets/style/',
    img: './dist/assets/img/',
    fonts: './dist/assets/fonts/',
    files: './dist/assets/files/',
  },
  src: {
    html: './src/page/**/*.pug', // *.pug if use pug
    js: './src/assets/js/app.js',
    style: './src/assets/style/style.scss',
    img: './src/assets/img/**/*.{jpg,jpeg,png,gif,webp}',
    svg: './src/assets/img/**/*.svg',
    svgicons: './src/assets/img/icons/*.svg',
    fonts: './src/assets/fonts/**/*.ttf',
    files: './src/assets/files/**/*.*',
  },
  watch: {
    html: './src/**/*.pug', // *.pug if use pug
    js: './src/**/*.js',
    style: './src/**/*.scss',
    img: './src/assets/img/**/*.{jpg,jpeg,png,gif,svg,gif,ico,webp}',
  },
  clean: './dist',
};
