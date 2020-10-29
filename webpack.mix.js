const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");
require("laravel-mix-critical");
require("laravel-mix-purgecss");
mix.js("src/main.js", "public/js")
    .sass("src/sass/app.scss", "public/css")
    .purgeCss()
    .critical({
        enabled: mix.inProduction(),
        urls: [
            {
                src: "https://decero.eu",
                dest: "public/css/index_critical.min.css"
            }
        ],
        options: {
            minify: true
        }
    })
    .options({
        processCssUrls: false,
        postCss: [tailwindcss("./tailwind.config.js")]
    });
