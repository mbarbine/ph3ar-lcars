import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  if (import.meta.client && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    }).catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
  }
});
