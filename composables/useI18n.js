import { useI18nStore as i18nStoreInstance } from '~/stores/i18n';
import { useI18n as vueUseI18n } from 'vue-i18n'; // Assuming you're using vue-i18n
import { computed } from 'vue';

// useCustomI18nStore composable
export function useCustomI18nStore() {
  const i18nStore = i18nStoreInstance();

  const t = (key) => {
    return i18nStore.translations[key] || key;
  };

  const changeLocale = (locale) => {
    i18nStore.setLocale(locale);
  };

  return {
    t,
    changeLocale,
    currentLocale: computed(() => i18nStore.currentLocale),
  };
}

// useI18n composable using vue-i18n
export function useI18n() {
  const i18n = vueUseI18n();
  return {
    t: i18n.t, // Translate function
    locale: i18n.locale, // Current locale
    availableLocales: i18n.availableLocales, // Available locales
  };
}
