export default defineNuxtMiddleware((context) => {
  const { $i18n } = context.app;

  const locale = context.route.query.lang || 'en';
  $i18n.locale = locale;
});
