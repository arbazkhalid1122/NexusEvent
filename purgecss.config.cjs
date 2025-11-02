module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './index.html'
  ],
  css: [
    './app/globals.css',
    './app/styles/base.css',
    './app/styles/webflow.css'
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
  },
  output: './app/styles/purged'
};




