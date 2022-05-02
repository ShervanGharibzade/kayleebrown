let mix = require('laravel-mix');

mix
    .sass('resources/scss/default.scss', 'assets/css/default.css')
        .setPublicPath('public')
    .js('resources/js/app.js', 'assets/js/app.js')
        .setPublicPath('public');