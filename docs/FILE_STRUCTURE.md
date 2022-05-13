## Структура файлов
```
project
|— dist
|— gulp
|  |- config
|  |- tasks
|— src
| .editorconfig
| .eslintignore
| .eslintrc
| .gitignore
| .stylelintignore
| .stylelintrc
| gulpfile.js
| package.json
```
- __dist__ - конечная папка с билдом верстки
- __gulp__ - папка сборщика Gulp
	- config - пути и плагины сборщика Gulp
	- tasks - таски сборщика Gulp
- __src__ - папка с исходниками проекта
- _.editorconfig_ - файл настроек редактора
- _.eslintignore_ - список исключений для Eslint
- _.eslintrc_ - файл настроек Eslint
- _.gitignore_ - список исключений для Git
- _.stylelintignore_ - список исключений для Stylelint
- _.stylelintrc_ - файл настроек Stylelint
- _gulpfile.js_ - файл настроек для сборщика Gulp
- _package.json_ - файл с настройками проекта с указанием списка зависимостей для установки

## Папка с исходниками проекта
```
src
|- assets
|  |- files
|  |- fonts
|  |- img
|  |  |- icons
|  |  |- static
|  |  |- temp
|  |- js
|  |- style
|- component
| |- mixin
| |- module
| |- part
|- layout
|- page
```

- __assets__ - 
	- _files_ - папка с файлами
	- _fonts_ - папка со шрифтами
	- _img_ - папка с картинками
		- _icons_ - папка с иконками
		- _static_ - папка с постоянными картинками
		- _temp_ - папка с временными картинками
	- _js_ - папка со скриптами
	- _style_ - папка со стилями
- __component__ - папка с компонентами
	- _mixin_ - папка с миксинами разметки
	- _module_ - папка с компонентами
	- _part_ - папка с компонентами входящими в шаблон
- __layout__ - папка с шаблонами
- __page__ - папка со страницами