const isProd = process.env.NODE_ENV === 'production';

const purgecssOptions = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}'
  ],
  safelist: [
    // Layout + wrappers
    'main-wrapper', 'global-padding', 'section', 'section-heading', 'heading-2-style', 'line-margin',
    // Navbar
    'navbar-wrapper','navbar-main','divider-mask-bottom-navbar','navbar-content','brand','w-nav-brand','w--current',
    'hamburger','w-button','nav-menu','menu-background','menu-padding','menu-grid','link-wrapper','menu-link-button','menu-link',
    'divider-mask','nav-bar-wrapper-footer','menu-social','social-button','link-social','w-inline-block','social-icons',
    'contacts-menu','button-wrapper','button','navbar-main-copy','brand-copy','hamburger-cross','logo-ne',
    // Hero
    'hero','hero-image-wrapper','image-hero','hero-grid','hero-heading-wrapper','global-hero-head','hero-copy','color-text-white','text-medium','text-normal',
    // Benefits
    'divider-mask-top','divider-mask-bottom','line-dynamic','color-line-green','text-paragraph-medium','benefit-icon-2',
    // Testimonials
    'text-wrapper','testimonials','testimonials-items','testimonials-item','testimonials-container','autor-wrapper','testimonials-name',
    // Partners
    'partner-grid','logo-wrapper',
    // Footer
    'footer','fill-section-footer','footer-grid','image','footer-menu-items','footer-contacts','footer-social','button-footer','footer-button-arrow','footer-button-wrapper','footer-bottom','link-design','contacts-wrapper'
  ],
  blocklist: [
    /^w-dropdown/, /^w-nav/, /^w-slider/, /^w-lightbox/, /^w-tabs/, /^w-widget/, /^w-form/, /^w-file-upload/, /^w-background-video/, /^w-webflow-badge/, /^w-richtext/,
    /^w-icon-/, /^w--open/, /^w--active/, 'w-slider-mask', 'w-slide', 'w-slider-nav', 'w-slider-arrow-left', 'w-slider-arrow-right', 'w-slider-dot', 'w-slider-aria-label',
    '[data-nav-menu-open]'
  ],
  keyframes: true,
  fontFace: true,
  variables: true,
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:./%#]+/g) || []
};

module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    ...(isProd ? { '@fullhuman/postcss-purgecss': purgecssOptions } : {})
  }
};


