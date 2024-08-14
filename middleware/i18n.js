// middleware/i18n.js

export default defineNuxtMiddleware((context) => {
  const { $i18n } = context.app;
  
  // Get the locale from the query parameter or default to 'en'
  const locale = context.route.query.lang || 'en';
  
  // Set the locale
  $i18n.locale = locale;
});
