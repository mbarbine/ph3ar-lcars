export default defineNuxtMiddleware((context) => {
    const userTheme = context.route.query.theme || 'dark';
    document.body.setAttribute('data-theme', userTheme);
  });
  