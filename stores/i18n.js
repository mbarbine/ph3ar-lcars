import { defineStore } from 'pinia';

export const useI18nStore = defineStore('i18n', {
  state: () => ({
    currentLocale: 'en',
    translations: require('../public/localizations/en.json'),
  }),
  actions: {
    setLocale(locale) {
      this.currentLocale = locale;
      this.translations = require(`../public/localizations/${locale}.json`);
    },
  },
});
