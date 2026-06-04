# Перенос в WordPress

## Структура соответствия

| Статика (папка/файл)       | WordPress (шаблон)        |
|----------------------------|---------------------------|
| `index.html`               | `front-page.php`          |
| `pages/about.html`         | `page-about.php`          |
| `pages/services.html`      | `page-services.php`       |
| `pages/gallery.html`       | `page-gallery.php`        |
| `pages/blog.html`          | `page-blog.php`           |
| `blog/index.html`          | `archive.php`             |
| `blog/single.html`         | `single.php`              |
| `404.html`                 | `404.php`                 |
| `css/style.css`            | `style.css` (в теме)     |
| `js/main.js`               | `js/main.js` (в теме)     |
| `assets/`                  | `assets/` (в теме)        |

## Порядок переноса

1. Создать пустую тему в `/wp-content/themes/yoga-studio/`
2. Перенести `style.css` (с комментарием темы в шапке)
3. Создать `index.php`, `header.php`, `footer.php`, `functions.php`
4. Разрезать HTML-шаблоны на header/footer/content
5. Подключить Advanced Custom Fields (ACF) для гибкого контента
6. Настроить произвольные типы записей (если нужно)

## Плагины (рекомендация)

- Advanced Custom Fields (ACF)
- Contact Form 7 (форма обратной связи)
- Yoast SEO
- Regenerate Thumbnails
