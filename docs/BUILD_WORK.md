# Как это работает

## Разметка

- Страницы кидаем в папку __page__ (./src/page)
- Шаблоны кидаем в папку __layout__ (./src/layout)
- Компоненты кидаем в папку __component__ (./src/component)
- В папку __part__ (./src/component/part) кидаем компоненты являющиеся частью шаблона

Разметку разбиваем на компоненты, каждый компонент должен лежать в отдельной папке и иметь файл с разметкой .pug или .html и файл со стилями .scss

```
src
|  |- component
|  |  |- module
|  |  |  |- card
|  |  |  |  | card.html
|  |  |  |  | card.pug
|  |  |  |  | card.scss
|  |  |- part
|  |  |  |- header
|  |  |  |  | header.html
|  |  |  |  | header.pug
|  |  |  |  | header.scss
```

## Стили

Файл __style.scss__ (./src/assets/style/style.scss) - точка входа для всех стилей, содержит только подключения других файлов.

```
/* ===== NOTE: normalize ===== */
@import "~css-reset-and-normalize/scss/reset-and-normalize";

/* ===== NOTE: libs style ===== */
@import "~slick-carousel/slick/slick";

/* ===== NOTE: variable ===== */
@import "variable";

/* ===== NOTE: fonts ===== */
@import "fonts";

/* ===== NOTE: common style ===== */
@import "common";

/* ===== NOTE: component style ===== */
@import "@component/part/footer/footer";
@import "@component/part/header/header";

@import "@component/module/slider/slider";
@import "@component/module/product/product";
@import "@component/module/card/card";
```
- __common.scss__ - тут пишем общие стили проекта
- __fonts.scss__ - тут подключаем шрифты
- __variable.scss__ - тут определяем переменные

 стили каждого компонента выносим в отдельный файл и храним в папке соответствующего компонента

## Скрипты

Файл __app.js__ (./src/assets/js/app.js) - точка входа для всех скриптов ...

## Изображения

Изображения кидаем в папку __img__ (./src/assets/img), избражения делим на 3 группы:

- __icons__ (./src/assets/img/icons) - иконки интерфейса. Из .svg картинок в этой папке генерируется спрайт.
- __static__ - постоянные изображения (часть дизайна).
- __temp__ - временные изображения (часть контента, при интеграции выводятся из БД).

## Шрифты

Шрифты в формате .ttf кидаем в папку __fonts__ (./src/assets/fonts), при сборке они конвертируются в форматы woff и woff2 и сохраняются в папку с билдом.

Подключаем шрифты через миксин в файле _fonts.scss (./src/assets/style/_fonts.scss)

```
@mixin font-face($font-name, $path, $weight: normal, $style: normal) {
  @font-face {
    font-weight: $weight;
    font-family: $font-name;
    font-style: $style;
    src: local($font-name), url("#{$path}.woff") format("woff"),
      url("#{$path}.woff2") format("woff2");
  }
}

@include font-face("Open Sans", "../fonts/OpenSans-Regular", 400, "normal");
```

## Файлы

Дополнительные файлы кидает в папку __files__ (./src/assets/files), при сборке они просто копируются в папку с билдом