export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.errorHandler = (error, _, info) => {
      console.error('Global error handler:', error, info);
      // Here you could send the error to a logging service
    };
    nuxtApp.vueApp.config.errorHandler = (err, _, info) => {
      console.error('Error captured:', err, info);
      // Implement error reporting logic here, e.g., send to an error tracking service
    };
  });
   