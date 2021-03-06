# Правила написания стилей

## Именования селекторов

Используйте __БЭМ__ (Блок Элемент Модификатор), как способ именования селекторов

__Блок__ — это самостоятельная часть страницы
- Название класса должно быть простым и коротким.
- Название класса должно отвечать на вопрос «Что это?»
- Не используйте сокращения кроме наиболее частых
- Название __не должно__ отвечать на вопрос «Как выглядит?»

```
<!-- .product — БЭМ-блок -->
<div class="product">
  ...
</div>
```

__Элемент__ — часть БЭМ-блока
- Название класса формируется из названия блока с добавлением __ и названия элемента.
- Название класса должно быть простым и коротким.
- Название класса должно отвечать на вопрос «Что это?»
- Избегайте сокращений, кроме наиболее частых.
- Название __не должно__ отвечать на вопрос «Как выглядит?»

```
<!-- .product — БЭМ-блок -->
<div class="product">
 
  <!-- product__image — БЭМ-элемент блока product -->
  <img class="product__image" src="..." alt="...">
 
  <!-- product__description — БЭМ-элемент блока product -->
  <p class="product__description">...</p>
 
  <!-- product__more-link — БЭМ-элемент блока product -->
  <a class="product__more-link" href="">...</a>
</div>
```

__Модификатор__ — дополнительный класс для смены оформления или поведения
- Название класса формируется из названия блока/элемента с добавлением -- и названия модификатора.
- Название должно быть простым и коротким.
- Название класса может отвечать на вопросы «Что это?», «Что меняется?», «Чем отличается от прочих?»
- Избегайте сокращений, кроме наиболее частых.

```
<!-- .product--large — БЭМ-модификатор -->
<div class="product  product--large">
  ...
</div>
```
__Как отличить БЭМ-блок и БЭМ-элемент__

Просто задайте себе вопрос: «Эта сущность может потребоваться мне отдельно, сама по себе? Или она нужна только внутри её родителя?» Если нужна отдельно — это БЭМ-блок, если мыслима только внутри родителя — это БЭМ-элемент.

В действительно сомнительных случаях делайте выбор в пользу БЭМ-блока.

---

Не у всех блоков должны быть элементы: кнопка — всегда БЭМ-блок, но БЭМ-элементы у неё внутри встречаются относительно редко.

```
<!-- Нет ошибки: блок без элементов -->
<a class="btn" href="">Скачать</a>
```

Блоки можно и нужно вкладывать друг в друга

```
<!-- .page-header — БЭМ-блок -->
<div class="page-header">
 
  <!-- .logo — вложенный БЭМ-блок -->
  <a class="logo">...</a>
 
</div>
```

В классах БЭМ-элементов нельзя прописывать иерархию (два и более сегмента __ недопустимы).

```
<div class="promo">
  <div class="promo__description">
    <!-- Нет ошибки: вложенный элемент не имеет особенностей -->
    <a class="promo__link" href="">...</a>
  </div>
</div>
 
<div class="promo">
  <div class="promo__description">
    <!--ОШИБКА: попытка прописать иерархию -->
    <a class="promo__description__link" href="">...</a>
  </div>
</div>
```

## Sass
__Вложения селекторов__
- Чем меньше уровней вложенности, тем лучше.
- Не допускайте более 3-х уровней вложенности (псевдоэлемены, псевдоселекторы и медиа-условия не считаются увеличивающими вложенность).
- Осторожно используйте жесткое наследование.
- Всегда оставляйте пустую строку перед вложенным селектором или @media.
- Всегда делайте дополнительный отступ для вложений.

```
.promo {
  display: block;
                    // пустая строка для улучшения читаемости
  a {               // первый уровень вложенности
    color: #ff0000;
                    // пустая строка для улучшения читаемости
    &:hover {       // не увеличивает уровень вложенности
      ...
    }
  }
}
```

__@media__
- Вкладывайте @media в селекторы, а не наоборот.
- Не вкладывайте @media друг в друга.
- Предпочтите путь mobile-first, избегайте указания @media-условия max-width в пользу min-width.
- Пишите @media рядом, не пишите селекторы между ними.
- Пишите условия для @media там, где используете @media, не пишите условия в переменных.

```
.promo {
  display: block;
  
  // Хорошо: условие очевидно, в переменной только ширина
  @media (min-width: $screen-md) {
    display: none;
  }
  
  @media (min-width: $screen-lg) {
    display: block;
  }
 
  // Плохо: условие целиком вынесено в переменную (неочевидность)
  @media ($mobile-width) {
    display: block;
  }
}
```

__Амперсанд__
- Используйте амперсанд только перед:
	- разделителем БЭМ-элемента,
	- разделителем БЭМ-модификатора,
	- псевдоэлементом или псевдоселектором.
- _Никогда_ не используйте амперсанд в местах разделения словосочетаний имён блоков, элементов или модификаторов (см. пример).
- _Никогда_ не повторяйте написанный с амперсандом селектор внутри одного контекста.

```
.promo {
  
  // Правильно: амперсанд перед псевдоклассом
  &:hover { ... }
  
  // Правильно: амперсанд перед разделителем элемента
  &__item {
  
    // НЕПРАВИЛЬНО: амперсанд в месте разделения словосочетания в названии элемента
    &-link { ... }
  }
  
  // НЕПРАВИЛЬНО: амперсанд в месте разделения словосочетания в названии блока
  &-shover { ... }
  
  // Правильно: модификаторы нужно писать под элементами
  &--large { ... }
  
}
```

__Очередность написания в контексте селектора__

В контексте селектора используйте следующую очередность:

1. Стилевые правила для этого селектора.
2. @media этого контекста.
3. Псевдоселекторы и псевдоэлементы.
4. Вложенные сторонние селекторы.
5. БЭМ-элементы.
6. БЭМ-модификаторы.

```
.page-header {
  position: relative;
  display: block;
  
  @media (min-width: $screen-lg) { ... }
  
  &:before { ... }
  
  // Этот блок простилизован в другом файле, тут только каскадная модификация
  .fp-tableCell { ... }
  
  &__item {
    display: block;
  
    &:before { ... }
  
    @media (min-width: $screen-md) { ... }
  }
  
  &--large {
  
    .page-header__item { ... }
  
    @media (min-width: $screen-md) { ... }
  }
  
}
```

__Переменные__
- Выносите в переменные (как минимум):
	- цвета,
	- размеры шрифтов и интерлиньяж (все значения интерлиньяжа можно не выносить в переменные, а задавать его в отн. единицах),
	- брейкпоинты.
- Отделяйте смысловые блоки с переменными пустыми строками.

```
$color-main:                  #0275d8;
$color-success:               #5cb85c;
$color-danger:                #d9534f;
 
$font-family:                 'Roboto', Arial, sans-serif;
 
$screen-xs:                   0;
$screen-sm:                   480px;
$screen-md:                   768px;
$screen-lg:                   992px;
$screen-xl:                   1200px;
```