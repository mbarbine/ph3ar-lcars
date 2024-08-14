import { useI18nStore } from '~/stores/i18n';

export default function useI18n() {
  const i18nStore = useI18nStore();

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
