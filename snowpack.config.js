/** @type {import("snowpack").SnowpackUserConfig } */
require('dotenv').config()

const port = parseInt(process.env.PORT) || 3000

module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
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
        preloadModules: true,
      },
    ],
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    port,
    // open: 'none',
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
}
