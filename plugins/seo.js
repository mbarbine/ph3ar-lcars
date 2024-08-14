export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('seo', {
      setMeta(title, description) {
        document.title = title;
        document.querySelector('meta[name="description"]').setAttribute('content', description);
      },
    });
    nuxtApp.hook('page:meta', (meta) => {
      meta.title = `${meta.title} - LCARS Nuxt App`;
      meta.meta.push({
        hid: 'description',
        name: 'description',
        content: meta.description || 'A Star Trek LCARS inspired Nuxt.js app',
      });
    });
  });
   