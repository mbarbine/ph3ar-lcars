// Declare NuxtConfig and related interfaces
interface NuxtConfig {
  css?: string[];
  buildModules?: string[];
  plugins?: string[];
  pwa?: any;
  i18n?: any;
  build?: any;
  modules?: string[];
}

interface ConfigLayerMeta {
  buildModules?: string[];
}

interface InputConfig<T, U> {
  css?: string[];
  buildModules?: string[];
  plugins?: string[];
  pwa?: any;
  i18n?: any;
  build?: any;
  modules?: string[];
}

// Declare the defineNuxtConfig function
export declare function defineNuxtConfig<T extends NuxtConfig, U extends ConfigLayerMeta>(
  config: InputConfig<T, U>
): T;

// Export the Nuxt configuration
export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css',
    '~/assets/css/lcars-theme.css',
    '~/assets/css/lcars-animations.css',
    '~/assets/css/lcars.css',
    '~/assets/css/lcars-utilities.css',
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    'pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  compatibilityDate: '2024-08-14',
  plugins: [
    '~/plugins/theme-switcher.js',
    '~/plugins/notification.js',
    '~/plugins/auth.js',
    '~/plugins/pinia-plugin.js',
    '~/plugins/seo.js',
    '~/plugins/error-handler.js',
    '~/plugins/pwa.js',
  ],
  modules: [
    '@nuxtjs/i18n',
  ],
  pwa: {
    manifest: {
      name: 'LCARS Nuxt App',
      short_name: 'LCARS',
      description: 'A Star Trek LCARS inspired Nuxt.js app',
      background_color: '#1a1a1a',
      theme_color: '#ff9933',
      icons: [
        {
          src: '/images/logo.svg',
          sizes: '192x192',
          type: 'image/svg+xml',
        },
      ],
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://fonts.googleapis.com/.*',
          handler: 'cacheFirst',
        },
      ],
    },
  },
  i18n: {
    vueI18n: './config/i18n.config.js', 
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  build: {
    rollupOptions: {
      external: ['pinia', 'chart.js', '@nuxt/bridge'],
    },
    transpile: ['vue-i18n', 'pinia'],
  },
  generate: {
    fallback: '404.html',
  },
});