import { defineNuxtPlugin, useNuxtApp } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('seo', {
    setMeta(title, description) {
      document.title = title;
      const descriptionMeta = document.querySelector('meta[name="description"]');
      if (descriptionMeta) {
        descriptionMeta.setAttribute('content', description);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.name = 'description';
        newMeta.content = description;
        document.head.appendChild(newMeta);
      }
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

export function useSeo() {
  const nuxtApp = useNuxtApp();
  return nuxtApp.$seo;
}
