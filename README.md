# Tестовое задание библиотека Modsen DatePicker

## About the library

This library allows you to add a calendar to your application. It is also possible to add functionality to the calendar using various decorators.

## Installation

For the library to work correctly you need:

- install the styled-components package via npm or yarn:

```
npm install styled-components
```

```
yarn add styled-components
```

- install the package via npm or yarn:

```
npm install @lkvasikl/modsen-datepicker-library
```

```
yarn add @lkvasikl/modsen-datepicker-library
```

## Usage

```javascript
import ReactDOM from "react-dom/client";
import {
  CalendarConfigurator,
  withMondaysFirst,
  withRange,
  withTodos,
  DateProvider,
  Calendar,
  DatePicker,
} from "kliui-date-picker-library";

const root = ReactDOM.createRoot(document.getElementById("root"));

const calendarService = new CalendarConfigurator(Calendar);
calendarService.addDecorator(withMondaysFirst);
calendarService.addDecorator(withRange, { rangeStart: new Date() });
calendarService.addDecorator(withTodos);

const CalendarPicker = calendarService.getDecorator();

root.render(
  <>
    <DateProvider>
      <DatePicker Calendar={CalendarPicker} />
    </DateProvider>

    <DateProvider>
      <Calendar withWeekdays={true} rangeStart={new Date()} />
    </DateProvider>
  </>
);
```

#### CalendarService:

A class that has **two methods**:

1. **getDecorator()** - allows you to get a decorated calendar component;
2. **addDecorator(decorator)** - allows you to add functionality to your calendar.

#### Functionality description [decorator]:

- **withMondayFirst**: for displaying calendar weekdays starting from Monday. By default - Sunday;
- **withHolidays**: allows you to highlight holidays with blue color;
- **withMinAndMaxDate**: allows to set restrictions for dates (min and/or max);
- **withoutWeekdays**: weekdays are hidden;
- **withRange**: adds the ability to display a range of dates on the calendar;
- **withTodos**: adds the ability to add and interact with a to-do list;

To use the calendar, you **MUST** wrap the component in DateProvider:

```javascript
<DateProvider>
  <Calendar withTodos={true} />
</DateProvider>
```

#### Usage variants:

There are two options of usage available:

1. You can use Calendar Component and pass all settings as props:

```javascript
import {
  DateProvider,
  Calendar,
} from "kliui-date-picker-library";

...
<DateProvider>
  <Calendar withTodos={true} minDate={new Date()} />
</DateProvider>;
```

2. You can use DatePicker Component and set options of Calendar with decorators:

```javascript
import {
  DateProvider,
  Calendar,
  CalendarConfigurator,
  withRange,
  withTodos
} from "kliui-date-picker-library";

const calendarService = new CalendarConfigurator(Calendar);
calendarService.addDecorator(withRange, { rangeStart: new Date() });
calendarService.addDecorator(withTodos);

const CalendarPicker = calendarService.getDecorator();

...
<DateProvider>
    <DatePicker Calendar={CalendarPicker} />
</DateProvider>;
```

## Содержание

- [Техническое задание](#Техническое-задание)
- [Используемые технологии](#Используемые-технологии)
- [Структура проекта](#Структура-проекта)
- [Тестирование](#Тестирование)
- [Как начать](#Как-начать)
- [Полезные ссылки](#Полезные-ссылки)

## Техническое задание

Необходимо реализовать библиотеку Javascript - **_DatePicker_**, для работы с различными видами календаря.
Цель состоит в том, чтобы создать базовую библиотеку, которую можно настраивать и расширять.

#### Необходимый функционал:

- Просмотр календаря;
- Выбор диапазона для календаря;
- Дефолтный календарь с заранее установленным диапазоном;
- Возможность выбора начала недели(с понедельника или воскресенья);
- Выбор вида календаря (по неделям, месяцам и т.д.);
- Реализовать возможность при клике на определенный день добавлять список задач и
  сохранять их в localStorage;
- Возможность переключения на предыдущий(ую)/следующий(ую) неделю/месяц/год;
- Возможность выбора максимальной даты календаря;
- Возможность выбора минимальной даты для календаря;
- Возможность скрывать/показывать выходные дни и выделять праздничные дни другим цветом;
- Возможность перейти в календаре на введенную пользователем дату;
- Стилизация календаря.

#### Дополнительный функционал:

- Развернуть приложение на хостинге (heroku, vercel);
- Настроить CI/CD, используя [GitHub Actions](https://github.com/features/actions);
- Собрать проект с нуля(с настройками всех конфигов: rollup, eslint, prettier, husky).

#### Пример графического представления:

Ссылка на макет: [Макет "DatePicker"](https://www.figma.com/file/PGg4P38QaPjUzasxC2GSkv/Modsen-Datepicker?node-id=0%3A1&t=dWZj8oM41qBje0bv-0).

#### Также проект предполагает:

- Придерживаться требований по написанию и организации кода react приложения. Ссылка на требования: [Требования к тестовому заданию](https://github.com/annaprystavka/requirements);

- Разделить библиотеку на два основных компонента: представления и логики. Для реализации логики приложения необходимо использовать порождающий паттерн программирования **_"Декоратор"_**, который позволяет динамически добавлять объектам новую функциональность, оборачивая их в полезные «обёртки» (см. подробнее [паттерн Декоратор](https://refactoring.guru/ru/design-patterns/decorator)). При помощи паттерна создать сервисный класс, в котором вы будете задавать конфигурацию и создавать календарь;

- Настроить конфигурации **_babel_**, **_eslint_**, **_prettier_**;

- Подключить и настроить бандлер **_Rollup_** для сборки проекта в библиотеку;

- Подключить и настроить **_Storybook_** для проверки работоспособности вашей библиотеки;

- Добавить обработку ошибок через паттерн **_Error Boundaries_**;

- Добавить проверку типов в React компонентах, передаваемых параметров и подобных объектов;

- Использовать алиасы для импортирования файлов;

- В приложении допускается использование языка typescript;

- Нельзя использовать какие-либо сторонние библиотеки.

## Используемые технологии

### Для react

- **_node.js_** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код);
- **_babel_** - транспайлер, преобразующий код из одного стандарта в другой;
- **_eslint_** - линтер для JavaScript кода;
- **_yarn_** - менеджер пакетов;
- **_rollup_** - сборщик ES-модулей;
- **_storybook_** - инструмент, используемый для разработки компонентов пользовательского интерфейса в изоляции;
- **_react_** - JavaScript-библиотека для создания пользовательских интерфейсов;
- **_prop-types_** - набор валидаторов, которые могут быть использованы для проверки получаемых данных;
- **_styled-components_** - система стилизации react компонентов;
- **_jest_** — интеграционное тестирование (rtl) + unit-тестирование.

### Для react native

Will be soon...

## Структура проекта

[Структура проекта](https://github.com/mkrivel/structure)

## Тестирование

Реализовать e2e тестирование c полным покрытием функционала приложения:

- Сервис для конфигурации DatePicker-компонента;
- Графическое (компонент модуля и т.д.).

## Полезные ссылки

[React](https://reactjs.org/docs/getting-started.html)

[Rollup](https://rollupjs.org/guide/en/)

[Storybook](https://storybook.js.org/docs/basics/introduction/)

[Eslint](https://eslint.org/docs/user-guide/configuring)

[Babel](https://babeljs.io/docs/en/configuration)

[Тестирование Jest](https://jestjs.io/ru/docs/getting-started)

[Styled-components](https://www.styled-components.com/docs)

[Husky](https://dev.to/ivadyhabimana/setup-eslint-prettier-and-husky-in-a-node-project-a-step-by-step-guide-946)
