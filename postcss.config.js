const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    ...(isProd
      ? {
          '@fullhuman/postcss-purgecss': {
            content: [
              './app/**/*.{js,jsx,ts,tsx}',
              './index.html'
            ],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: {
              standard: [
                /^w-/,
                /^w--/,
                /^is-/,
                /^active-/,
                /^open-/
              ]
            }
          }
          ,
          cssnano: {
            preset: 'default'
          }
        }
      : {})
  }
};


