export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('notify', (message, variant = 'primary') => {
      console.log(`Notification: ${message} (variant: ${variant})`);
      // Implement the notification logic here
    });
  });
  