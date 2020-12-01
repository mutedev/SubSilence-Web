/** @type {import("snowpack").SnowpackUserConfig } */
require('dotenv').config()

const port = parseInt(process.env.PORT) || 3000

module.exports = {
  mount: {
    public: '/',
    src: '/_dist_'
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-sass',
    [
      '@snowpack/plugin-optimize',
      {
        minifyJS: true,
        minifyCSS: true,
        minifyHTML: true,
        preloadModules: true
      }
    ],
    [
      'snowpack-plugin-imagemin',
      {
        /* see "Plugin Options" below */
        include: ['**/*.jpg', '**/*.png'],
        plugins: [
          require('imagemin-mozjpeg')({ quality: 90, progressive: true }),
          require('imagemin-optipng')({ optimizationLevel: 7 })
        ]
      }
    ]
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    port,
    open: 'none'
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  }
}
