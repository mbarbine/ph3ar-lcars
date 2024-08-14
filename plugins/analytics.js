export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('trackEvent', (eventName, data) => {
      console.log(`Tracking event: ${eventName}`, data);
      // Implement actual tracking logic, e.g., send data to an analytics service
    });
  });
  