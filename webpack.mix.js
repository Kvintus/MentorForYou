const mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.react('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css');

    mix
  .js("resources/js/app.js", "public/js")
  .sass("resources/sass/app.scss", "public/css")
  .webpackConfig({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"]
    }
  });

// Per this issue: https://github.com/JeffreyWay/laravel-mix/issues/1483
Mix.listen('configReady', (webpackConfig) => {
    if (Mix.isUsing('hmr')) {
        // Remove leading '/' from entry keys
        webpackConfig.entry = Object.keys(webpackConfig.entry).reduce(
            (entries, entry) => {
                entries[entry.replace(/^\//, '')] = webpackConfig.entry[entry];
                // }
                // console.log(entries);
                return entries;
            },
            {}
        );
        // Remove leading '/' from ExtractTextPlugin instances
        webpackConfig.plugins.forEach((plugin) => {
            if (plugin.constructor.name === "ExtractTextPlugin") {
                // console.log(plugin.filename);
                plugin.filename = plugin.filename.replace(/^\//, '');
                // console.log(plugin.filename);
            }
        });
    }

    console.log(webpackConfig.output);
});

mix.browserSync('localhost:8000');
