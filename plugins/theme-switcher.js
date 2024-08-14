export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('toggleTheme', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
  });
});
